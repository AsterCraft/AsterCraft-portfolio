# GitHub Actions Deployment to Cloud Run

This guide explains how to set up automatic deployment of a Go backend to Google Cloud Run using GitHub Actions.

## Prerequisites

### 1. Enable Required APIs

```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
gcloud services enable storage.googleapis.com
gcloud services enable serviceusage.googleapis.com
```

## Service Account Setup

### 1. Create GitHub Actions Service Account

```bash
gcloud iam service-accounts create github-actions \
    --display-name="GitHub Actions Deployer"
```

### 2. Grant Required IAM Roles to GitHub Actions Service Account

```bash
PROJECT_ID="your-project-id"
SA_EMAIL="github-actions@${PROJECT_ID}.iam.gserviceaccount.com"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${SA_EMAIL}" \
    --role="roles/serviceusage.serviceUsageConsumer"
```

### 3. Grant Required IAM Roles to Cloud Build Default Service Account

Get your project number:

```bash
PROJECT_NUMBER=$(gcloud projects describe $PROJECT_ID --format="value(projectNumber)")
```

Grant the required role:

```bash
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:${PROJECT_NUMBER}@cloudbuild.gserviceaccount.com" \
    --role="roles/serviceusage.serviceUsageConsumer"
```

### 4. Export Service Account Key

```bash
gcloud iam service-accounts keys create github-actions-key.json \
    --iam-account="${SA_EMAIL}"
```

**Important:** Keep this file secure and never commit it to your repository.

## GitHub Configuration

### 1. Add GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add:

| Secret Name      | Value                                      | How to Obtain                                                                    |
| ---------------- | ------------------------------------------ | -------------------------------------------------------------------------------- |
| `GCP_SA_KEY`     | Full contents of `github-actions-key.json` | Copy entire JSON file content                                                    |
| `GCP_PROJECT_ID` | Your GCP project ID                        | `gcloud config get-value project`                                                |
| `EMAIL_USER`     | Gmail address for SMTP                     | Your Gmail address                                                               |
| `EMAIL_PASS`     | Gmail app password                         | Generate at [Google Account Security](https://myaccount.google.com/apppasswords) |

### 2. Create GitHub Workflow File

Create `.github/workflows/deploy-backend.yml`:

```yaml
name: Deploy Backend to Cloud Run

on:
  push:
    branches: [main, dev]
    paths:
      - "backend/**"
      - ".github/workflows/deploy-backend.yml"

  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Authenticate to Google Cloud
        uses: google-github-actions/auth@v2
        with:
          credentials_json: ${{ secrets.GCP_SA_KEY }}

      - name: Deploy to Cloud Run
        uses: google-github-actions/deploy-cloudrun@v2
        with:
          service: ${{ github.ref == 'refs/heads/main' && 'backend-prod' || 'backend-dev' }}
          region: europe-central2
          source: ./backend
          project_id: ${{ secrets.GCP_PROJECT_ID }}
          flags: "--allow-unauthenticated"
          env_vars: |
            EMAIL_USER=${{ secrets.EMAIL_USER }}
            EMAIL_PASS=${{ secrets.EMAIL_PASS }}
```

## Deploy

Push to `main` or `dev` branch, or manually trigger the workflow from GitHub Actions tab.

The deployment will:

1. Upload source code to Cloud Storage
2. Build container image using Cloud Build
3. Deploy to Cloud Run service (`backend-prod` for main branch, `backend-dev` for dev branch)

## IAM Roles Summary

### GitHub Actions Service Account

| Role                                      | Purpose                                    |
| ----------------------------------------- | ------------------------------------------ |
| `roles/run.admin`                         | Create and manage Cloud Run services       |
| `roles/iam.serviceAccountUser`            | Act as Cloud Run service account           |
| `roles/artifactregistry.writer`           | Push container images to Artifact Registry |
| `roles/storage.admin`                     | Upload source code to Cloud Storage        |
| `roles/serviceusage.serviceUsageConsumer` | Use project resources and APIs             |

### Cloud Build Default Service Account

| Role                                      | Purpose                            |
| ----------------------------------------- | ---------------------------------- |
| `roles/cloudbuild.builds.builder`         | Execute builds (auto-granted)      |
| `roles/serviceusage.serviceUsageConsumer` | Use project resources during build |
