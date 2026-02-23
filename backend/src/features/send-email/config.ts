export const PROJECT_RECIPIENTS = {
  "astercraft-portfolio": "astercraft.dev@gmail.com",
  "consulting-rozinskaya": "astercraft.dev@gmail.com",
} as const;

export type ProjectId = keyof typeof PROJECT_RECIPIENTS;
type ProjectEmail = (typeof PROJECT_RECIPIENTS)[ProjectId];

export const getRecipientEmail = (projectId: ProjectId): ProjectEmail => {
  return PROJECT_RECIPIENTS[projectId];
};
