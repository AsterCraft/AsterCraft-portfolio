Here is a comprehensive knowledge extraction from the video "Vertical Slice Architecture" by Jimmy Bogard, formatted as a Markdown file.

---

# Vertical Slice Architecture

**Speaker:** Jimmy Bogard

**Context:** Moving away from traditional layered architectures (N-Layer, Onion, Clean) towards a feature-centric approach.

## 1. The Problem with Traditional Layered Architecture

Historically, applications were built using "Horizontal Layering" (e.g., UI Layer, Business Logic Layer, Data Access Layer).

- **The Structure:** Code is organized by **technical concern** (Controllers, Services, Repositories).
- **The Workflow:** To add a single feature (e.g., "Add a new field to the screen"), a developer must touch files across all layers:

1. Update the Domain Entity.
2. Update the Repository interface and implementation.
3. Update the Service interface and implementation.
4. Update the ViewModel.
5. Update the Controller.
6. Update the View.

- **The Pain Points:**
- **High Coupling:** Changes ripple through the entire application.
- **Low Cohesion:** Logic for a single feature is scattered across multiple projects and folders.
- **Bloated Services:** "PersonService" becomes a dumping ground for _every_ operation related to a Person, leading to massive classes and merge conflicts.
- **Mocking Hell:** Testing requires mocking every layer underneath, leading to brittle tests.

## 2. The Core Concept: Vertical Slices

Vertical Slice Architecture proposes organizing code by **feature** (or request) rather than by technical layer.

- **Definition:** A "Slice" encapsulates the User Interface, Business Logic, and Data Access for a single feature (e.g., "Approve Invoice") into one logical unit.
- **Goal:** Minimize coupling between features and maximize cohesion within a feature.
- **The "Selfish Gene":** Each slice should do exactly what it needs to do without worrying about other slices. Reuse is considered accidental and avoided unless logic is strictly identical and changes for the same reasons.
- **File Structure:** Instead of folders like `Services/` and `Repositories/`, you have folders like `Features/Orders/Approve/`.

## 3. Implementation Pattern: CQRS & MediatR

The architecture relies heavily on **CQRS** (Command Query Responsibility Segregation) and the **Mediator pattern** (specifically the **MediatR** library in .NET).

### A. The Pattern

1. **Request (Input):** A class representing the user's intent.

- _Queries:_ `GetOrderDetails` (Requesting data).
- _Commands:_ `ApproveInvoice` (Changing state).

2. **Handler (Logic):** A class that takes the Request and produces a Response.

- Contains the specific business logic for that single operation.

3. **Response (Output):** A class representing the result.

- _Query Response:_ A DTO specifically designed for that View.
- _Command Response:_ Success/Failure status, Created IDs, or validation errors.

### B. Queries (Reading Data)

- **Goal:** Get data out as fast and efficiently as possible.
- **Implementation:**
- Do not use Repositories.
- Do not use rich Domain Entities.
- **Projection:** Query handlers should project directly from the Database to the Response DTO.
- _Tooling:_ Use tools like **AutoMapper's `ProjectTo**`. This converts a LINQ query directly into a SQL `SELECT` statement that fetches _only_ the columns needed for the DTO (Conceptually similar to a SQL View).

### C. Commands (Writing Data)

- **Goal:** Perform business logic and state changes.
- **Implementation:**
- Start with "boring procedural code" (Transaction Script).
- **Avoid Abstractions:** Don't create Repository interfaces on top of your ORM (e.g., Entity Framework `DbContext`) unless strictly necessary for testing or swapping backends. Use the `DbContext` directly in the handler.
- **Push Logic Down:** As the handler grows, move business rules into the **Domain Model** (Rich Domain Model).
- **The Flow:**

1. Handler loads data (Aggregate Root).
2. Handler calls a method on the Domain Model (`order.Ship()`).
3. Domain Model updates state and enforces invariants.
4. Handler saves changes.

## 4. Cross-Cutting Concerns (Pipeline Behaviors)

To keep Handlers clean, cross-cutting concerns are moved out of the handler and into **Pipeline Behaviors** (Decorators).

- **Mechanism:** These wrap the handler execution (like Russian Nesting Dolls).
- **Examples:**
- **Validation:** Check if the request is valid before hitting the handler.
- **Transactions:** Open a transaction before the handler, commit after success, rollback on error.
- **Logging:** Log the request and response payload.
- **Retry Policies:** Retry on transient database errors.

- **Result:** The Handler code focuses _only_ on the specific business logic, while infrastructure concerns are handled globally or per-slice via behaviors.

## 5. Validation Strategy

Validation is split into two distinct types:

1. **Request Validation (Context-Free):**

- Checks the form data itself (e.g., "Is Name not null?", "Is Email format correct?").
- Implemented using tools like **FluentValidation**.
- Runs inside the Pipeline Behavior _before_ the handler is called.

2. **Domain Validation (Context-Aware):**

- Checks business rules that require state (e.g., "Is the Order status 'Pending'?", "Is the Email already in the DB?").
- Implemented inside the **Handler** or the **Domain Entity**.
- Returns a Result object (Success/Failure) rather than throwing exceptions.

## 6. Testing Strategy

Vertical Slices change how we test.

- **Unit Tests:**
- **Target:** The **Domain Model**.
- **Focus:** Complex business logic, state transitions, invariants.
- _Don't_ unit test Handlers (they are mostly orchestration/glue code).

- **Integration Tests:**
- **Target:** The **Handlers**.
- **Focus:** The entire slice.
- **Method:**

1. Send a Command (Request) into the Mediator.
2. Assert the side effects (check the DB, check the Response).

- **Scope:** Use a real database and a real dependency injection scope. This mimics the actual application lifecycle exactly.
- **Benefit:** Provides higher confidence than mocking repositories. If the database schema changes, these tests break (which is good).

## 7. Key Takeaways & Benefits

- **Maintainability:** Code related to a feature is easy to find. You don't hunt through 5 layers to find where "Invoice Approval" happens.
- **Change Management:** Modifying a feature involves touching only that slice. The risk of breaking unrelated features (regression) is significantly lower.
- **Conflict Resolution:** Developers working on different features rarely touch the same files, virtually eliminating merge conflicts.
- **Refactoring:** It is safer to refactor a single slice (e.g., optimize a specific slow query) because the changes are isolated to that slice.
- **Flexibility:** You can use different patterns for different slices. One complex slice can use a Rich Domain Model, while a simple slice can be a Transaction Script. You use the "Right Tool for the Job" per feature.

> **Mantra:** "Minimize coupling between slices, maximize cohesion within a slice."
