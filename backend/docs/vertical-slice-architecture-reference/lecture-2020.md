Here is the knowledge extraction from the NDC Conference lecture "Vertical Slice Architecture" by Jimmy Bogard.

---

# Vertical Slice Architecture (NDC Edition)

**Context:** The speaker (Jimmy Bogard) critiques the failure of N-Tier and "DDD-Lite" layered architectures in scaling to large systems, advocating for a request-based isolation strategy.

## 1. The Root Cause of Failure: Layered Grouping

- **The Deception:** Grouping code by technical layer (Services, Repositories, Controllers) looks clean in small apps (4 screens) but collapses in large systems (hundreds of screens).
- **The Symptom:**
- **Fragmented Logic:** A single business feature is scattered across `Controller` -> `Service` -> `Manager` -> `Repository` -> `DB`.
- **God Objects:** Service classes become massive dumping grounds for unrelated methods because they share a name (e.g., `CustomerService` has 50 unrelated methods).
- **Change Paralysis:** To change one feature, you have to touch layers shared by 10 unrelated features, risking regression.

## 2. The Solution: Vertical Slices

- **Core Philosophy:** Organize code by **Axis of Change**. Things that change together should live together.
- **The Structure:**
- Delete the "Layers" (Services, Repositories).
- Create "Features" folders.
- **One Class = One Request.** Use the **Extract Class** refactoring to turn every method of a "God Service" into its own isolated class.
- **Isolation:** A slice contains _everything_ needed to handle that request (UI code, DTOs, Business Logic, Data Access).

## 3. Implementation: CQRS & MediatR

The architecture maps requests strictly to **Commands** (Writes) and **Queries** (Reads).

### A. Queries (Reads)

- **Shape:** Small Request Object (Filters/IDs) Large Response Object (View Model).
- **Strategy:**
- **NO Domain Model:** Do not load entities. It is waste.
- **NO Repositories:** Do not hide the database.
- **Direct Projection:** Use an ORM (EF Core) with `ProjectTo` (AutoMapper) to generate a single SQL `SELECT` statement that populates the View Model directly.
- **Encapsulation:** If a query needs raw SQL or Dapper, it lives _inside that specific handler_. It doesn't leak out.

### B. Commands (Writes)

- **Shape:** Large Request Object (Form Data) Small/Void Response (Success/Fail/NewID).
- **Workflow (The Refactoring Ladder):**

1. **Start Dumb:** Write a **Transaction Script**. Hardcode everything in the handler. No abstractions.
2. **Feel Pain:** Only when logic gets complex or duplicated do you refactor.
3. **Refactor to Domain:** Push business logic down into a **Rich Domain Model**. The Handler becomes an orchestrator (Load Entity Call Method Save).
4. **Refactor to Services:** If logic spans multiple entities, use a **Domain Service**.

## 4. Validation

Validation is not one-size-fits-all. It is split by scope:

1. **Request Validation (Schema):** "Is the string empty? Is the date valid?"

- Handled by **FluentValidation** or Data Annotations _before_ the handler.

2. **Domain Validation (Logic):** "Is the invoice cancelled? Do they have credit?"

- Handled **inside the Handler or Domain Entity**.
- Returns a `Result` object (Success/Failure with reasons), not an Exception.

## 5. Cross-Cutting Concerns (Pipeline Behaviors)

Do not pollute handlers with logging, auth, or transaction management. Use **Decorator Pattern** (Pipeline Behaviors in MediatR).

- **R Russian Nesting Dolls:** Request enters Logger Transaction Validator **Handler** Transaction Commit Response.
- **Global Rules:** Enforce policies like "All Commands must run in a Transaction" or "Retry on Concurrency Exception" globally.

## 6. Testing Strategy

- **Unit Tests:** Only for the **Domain Model**. Test complex business rules in isolation.
- **Integration Tests:** The primary testing strategy.
- **Scope:** Test the **Handler**.
- **Front Door:** Input a Command Assert the Database State/Response.
- **Realism:** Use a real database. Do not mock Repositories (creates brittle tests that pass when the app fails). Isolate tests using transactions.
