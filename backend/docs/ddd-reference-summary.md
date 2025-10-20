# Domain-Driven Design Reference - Concise Summary

**Source:** Eric Evans, Domain-Driven Design Reference (2015)  
**Purpose:** Quick reference for teaching DDD architecture to beginners, optimized for LLM sessions

---

## Core Definitions

**domain** - A sphere of knowledge, influence, or activity. The subject area to which the user applies a program is the domain of the software.

**model** - A system of abstractions that describes selected aspects of a domain and can be used to solve problems related to that domain.

**ubiquitous language** - A language structured around the domain model and used by all team members within a bounded context to connect all the activities of the team with the software.

**context** - The setting in which a word or statement appears that determines its meaning. Statements about a model can only be understood in a context.

**bounded context** - A description of a boundary (typically a subsystem, or the work of a particular team) within which a particular model is defined and applicable.

---

## The Three Pillars of DDD

Domain-Driven Design is an approach to the development of complex software in which we:

1. **Focus on the core domain**
2. **Explore models in a creative collaboration** of domain practitioners and software practitioners
3. **Speak a ubiquitous language within an explicitly bounded context**

---

## I. PUTTING THE MODEL TO WORK

### Bounded Context
**Purpose:** Define clear boundaries where a specific model applies

**Key Rule:** Explicitly define the context within which a model applies. Set boundaries in terms of team organization, usage within specific parts of the application, and physical manifestations such as code bases and database schemas. Keep model concepts and terms strictly consistent within these bounds.

**Critical:** Model expressions only have meaning in context. Multiple models are inevitable in large projects.

---

### Ubiquitous Language
**Purpose:** Create a shared language between developers and domain experts

**Key Rule:** Use the model as the backbone of a language. Commit the team to exercising that language relentlessly in all communication within the team and in the code. Within a bounded context, use the same language in diagrams, writing, and especially speech.

**Critical Insight:** Recognize that a change in the language IS a change to the model. Translation blunts communication and makes knowledge crunching anemic.

**Anti-pattern:** Having separate "technical" and "business" vocabularies, or diagrams that don't match the code.

---

### Continuous Integration
**Purpose:** Keep the model unified as multiple people work on it

**Key Rule:** Institute a process of merging all code and other implementation artifacts frequently, with automated tests to flag fragmentation quickly. Relentlessly exercise the ubiquitous language to hammer out a shared view of the model.

**When:** Once a bounded context has been defined. Even 3-4 people can encounter serious fragmentation problems.

---

### Model-Driven Design
**Purpose:** Tightly relate code to an underlying model

**Key Rule:** Design a portion of the software system to reflect the domain model in a very literal way, so that mapping is obvious. The code becomes an expression of the model, so a change to the code may be a change to the model.

**Critical:** Draw from the model the terminology used in the design and the basic assignment of responsibilities. Usually requires object-oriented programming.

**Anti-pattern:** Models only used for UML diagrams, or translation layers that obscure the domain model.

---

### Hands-on Modelers
**Purpose:** Keep modelers connected to implementation realities

**Key Rule:** Any technical person contributing to the model must spend some time touching the code. Anyone responsible for changing code must learn to express a model through the code. Every developer must be involved in some level of discussion about the model and have contact with domain experts.

**Why:** If code writers don't feel responsible for the model, the model becomes irrelevant. If modelers are separated from implementation, they lose feel for constraints.

---

### Refactoring Toward Deeper Insight
**Purpose:** Evolve the model to capture subtle domain knowledge

**Key Insight:** Sophisticated domain models seldom turn out useful except when developed through an iterative process of refactoring, including close involvement of domain experts with developers interested in learning about the domain.

**What to look for:** A model that sloughs off the superficial and captures the essential - making software more in tune with how domain experts think.

---

## II. BUILDING BLOCKS OF A MODEL-DRIVEN DESIGN

### Layered Architecture
**Purpose:** Isolate domain logic from infrastructure and UI concerns

**Key Rule:** Isolate the expression of the domain model and business logic, and eliminate any dependency on infrastructure, user interface, or application logic that is not business logic. Partition into layers - concentrate all domain-related code in one layer and isolate it from other concerns.

**Goal:** Isolation. Domain objects can focus on expressing the domain model.

**Note:** "Hexagonal Architecture" may serve equally well or better to achieve isolation.

---

### Entities (aka Reference Objects)
**Purpose:** Model things with continuity and identity

**Key Rule:** When an object is distinguished by its identity rather than its attributes, make this primary to its definition in the model. Keep the class definition simple and focused on life cycle continuity and identity.

**Identity:** Define an operation that produces a unique result for each object (possibly by attaching a guaranteed unique symbol). The model must define what it means to be "the same thing."

**When to use:** Objects that represent a thread of identity running through time, even as attributes change.

**NOT for:** Objects defined purely by their attributes (use Value Objects instead).

---

### Value Objects
**Purpose:** Model descriptive aspects that have no conceptual identity

**Key Rule:** When you care only about the attributes and logic of an element, classify it as a value object. Make it express the meaning of the attributes it conveys and give it related functionality. Treat the value object as **immutable**. Don't give it any identity.

**Critical:** All operations should be Side-Effect-Free Functions. Make all operations that don't depend on mutable state.

**When to use:** Objects that describe things (amounts, dates, names, etc.)

**Benefits:** Eliminates tracking overhead, simplifies design, safe to share.

---

### Domain Events* (*New since 2004 book)
**Purpose:** Model information about activity in the domain as first-class concepts

**Key Rule:** Model information about activity in the domain as a series of discrete events. Represent each event as a domain object. Make explicit the events that domain experts want to track or be notified of, or which are associated with state change in other model objects.

**Characteristics:**
- Typically immutable (record of the past)
- Contains timestamp of occurrence
- Contains identity of entities involved
- May have separate timestamp for when entered into system

**Use cases:**
- Tracking causes of state changes
- Audit trails as domain logic
- Distributed systems (state inferred from events)
- Asynchronous cross-boundary updates

---

### Services
**Purpose:** Model operations that don't naturally belong to an object

**Key Rule:** When a significant process or transformation in the domain is not a natural responsibility of an entity or value object, add an operation to the model as a standalone interface declared as a service. Name it and make it part of the ubiquitous language. The operation should be stateless.

**When to use:** "Sometimes, it just isn't a thing" - significant domain operations that don't fit as object responsibilities.

**Critical:** Define service contracts as assertions about interactions. State these in ubiquitous language.

---

### Modules (aka Packages)
**Purpose:** Organize the model into coherent units

**Key Rule:** Choose modules that tell the story of the system and contain a cohesive set of concepts. Give modules names that become part of the ubiquitous language. Modules are part of the model and their names should reflect insight into the domain.

**Goal:** Low coupling in the sense of concepts that can be understood and reasoned about independently. High cohesion of concepts within modules.

**Anti-pattern:** Modules conceived early and never refactored, or organized purely by technical concerns rather than domain concepts.

---

### Aggregates
**Purpose:** Define clear ownership and boundaries for consistency

**Key Rule:** Cluster entities and value objects into aggregates and define boundaries around each. Choose one entity to be the root of each aggregate, and allow external objects to hold references to the root only. Define properties and invariants for the aggregate as a whole and give enforcement responsibility to the root or designated framework mechanism.

**Transaction Rule:** Use the same aggregate boundaries to govern transactions and distribution.

**Consistency Rule:**
- Within an aggregate boundary: apply consistency rules **synchronously**
- Across boundaries: handle updates **asynchronously**

**Distribution Rule:** Keep an aggregate together on one server. Allow different aggregates to be distributed among nodes.

**Critical:** References to internal members passed out for use within a single operation only.

---

### Repositories
**Purpose:** Provide query access to aggregates in domain language

**Key Rule:** For each type of aggregate that needs global access, create a service that provides the illusion of an in-memory collection of all objects of that aggregate's root type. Provide methods that select objects based on criteria meaningful to domain experts. Return fully instantiated objects or collections. Provide repositories only for aggregate roots that actually need direct access.

**What it encapsulates:** Actual storage and query technology

**Goal:** Keep application logic focused on the model, delegating all object storage and access to repositories.

**Anti-pattern:** Queries that breach encapsulation or instantiate objects from aggregate interiors.

---

### Factories
**Purpose:** Encapsulate complex object creation

**Key Rule:** When creation of an entire aggregate, or a large value object, becomes complicated or reveals too much internal structure, shift responsibility for creating instances to a separate object. This object may have no domain responsibility but is still part of the domain design. Provide an interface that encapsulates all complex assembly and doesn't require the client to reference concrete classes. Create an entire aggregate as a piece, enforcing its invariants.

**When to use:** Complex assembly operations that don't fit object responsibilities, or when direct construction muddles the client design.

---

## III. SUPPLE DESIGN

**Goal:** Make the design a pleasure to work with, inviting to change. Enable client developers to flexibly use a minimal set of loosely coupled concepts.

### Intention-Revealing Interfaces
**Purpose:** Make behavior obvious without reading implementation

**Key Rule:** Name classes and operations to describe their effect and purpose, without reference to the means by which they do what they promise. These names should conform to ubiquitous language so team members can quickly infer meaning.

**Anti-pattern:** Names that reveal implementation details, forcing developers to understand internals to use the interface.

---

### Side-Effect-Free Functions
**Purpose:** Make operations predictable and composable

**Key Rule:** Place as much logic as possible into functions - operations that return results with no observable side effects. Strictly segregate commands (methods that modify state) into very simple operations that don't return domain information. Further control side effects by moving complex logic into value objects when a fitting concept presents itself.

**Critical:** All operations of a Value Object should be side-effect-free functions.

**Why:** Without safely predictable abstractions, developers must limit combinatory explosion, placing a low ceiling on richness of feasible behavior.

---

### Assertions
**Purpose:** Make post-conditions and invariants explicit

**Key Rule:** State post-conditions of operations and invariants of classes and aggregates. If assertions cannot be coded directly in your language, write automated unit tests for them. Write them into documentation or diagrams where it fits the project's style.

**Goal:** Seek models with coherent sets of concepts that lead developers to infer the intended assertions, accelerating learning and reducing risk of contradictory code.

**What they define:**
- Contracts of services and entity modifiers
- Invariants on aggregates

---

### Standalone Classes
**Purpose:** Minimize conceptual dependencies

**Key Rule:** When you can, eliminate all other concepts from the picture. Then the class will be completely self-contained and can be studied and understood alone.

**Goal:** Low coupling is fundamental. Every self-contained class significantly eases the burden of understanding a module.

---

### Closure of Operations
**Purpose:** Keep operations within the same type

**Key Rule:** Where it fits, define an operation whose return type is the same as the type of its argument(s). If the implementer has state used in computation, then the implementer is effectively an argument, so the argument(s) and return value should be of the same type as the implementer.

**Benefit:** Provides high-level interface without introducing dependencies on other concepts.

**Most common use:** Value Objects (not typically useful for Entities, whose lifecycle has domain significance).

---

### Declarative Design
**Purpose:** Separate "what" from "how"

**Philosophy:** Once you have intention-revealing interfaces, side-effect-free functions, and assertions, you're edging into declarative territory. Many benefits of declarative design are obtained with combinable elements that communicate meaning and have characterized or obvious effects.

**Key Insight:** A supple design can make it possible for client code to use a declarative style.

---

### Drawing on Established Formalisms
**Purpose:** Leverage well-understood conceptual frameworks

**Key Rule:** When a formalized conceptual framework (like math, accounting, etc.) fits the domain, adapt it rather than reinventing. Many domains include math somewhere - look for it, dig it out.

**Why:** Specialized formalisms are clean, combinable by clear rules, and people find them easy to understand.

---

### Conceptual Contours
**Purpose:** Decompose along natural domain boundaries

**Key Rule:** Decompose design elements (operations, interfaces, classes, aggregates) into cohesive units, taking into consideration your intuition of important divisions in the domain. Observe axes of change and stability through successive refactorings and look for underlying conceptual contours. Align the model with consistent aspects of the domain.

**Anti-patterns:**
- Chopping functionality fine everywhere (pointless complexity)
- Lumping it large everywhere (loses clarity)
- Seeking uniform granularity (oversimplification)

**Goal:** Find where the natural grain of the domain runs.

---

## IV. CONTEXT MAPPING FOR STRATEGIC DESIGN

### Relationship Types Defined

**upstream-downstream** - The upstream group's actions affect downstream project success, but downstream actions don't significantly affect upstream. The upstream team may succeed independently of the downstream fate.

**mutually dependent** - Two projects where both must be delivered for either to be considered a success.

**free** - A context where the direction, success, or failure of development work in other contexts has little effect on delivery.

---

### Context Map
**Purpose:** Understand and communicate relationships between models

**Key Rule:** Identify each model in play on the project and define its bounded context. This includes implicit models of non-object-oriented subsystems. Name each bounded context and make the names part of ubiquitous language. Describe points of contact between models, outlining explicit translation for any communication, highlighting sharing, isolation mechanisms, and levels of influence.

**Critical:** Map the existing terrain. Take up transformations later. This map is the basis for realistic design strategy.

---

### Partnership* (*New since 2004 book)
**Relationship:** Mutually dependent

**Key Rule:** Where development failure in either of two contexts would result in delivery failure for both, forge a partnership between the teams. Institute a process for coordinated planning of development and joint management of integration. Teams must cooperate on interface evolution to accommodate the development needs of both systems. Interdependent features should be scheduled for the same release.

**When to use:** When two teams will succeed or fail together.

---

### Shared Kernel
**Relationship:** Mutually dependent (but can work for others)

**Key Rule:** Designate with an explicit boundary some subset of the domain model that teams agree to share. Keep this kernel small. Within this boundary, include the subset of code or database design associated with that part of the model. This explicitly shared stuff has special status and shouldn't be changed without consultation with the other team.

**Integration:** Define continuous integration process that will keep the kernel model tight and align ubiquitous language of teams. Integrate functionally frequently (though less often than continuous integration within teams).

**When to use:** When continuous integration overhead of a large context is too high, but close collaboration is possible.

---

### Customer/Supplier Development
**Relationship:** Upstream/downstream where downstream needs must be met

**Key Rule:** Establish a clear customer/supplier relationship between the two teams, meaning downstream priorities factor into upstream planning. Negotiate and budget tasks for downstream requirements so everyone understands commitment and schedule.

**In Agile:** Downstream team can play the customer role to upstream team in planning sessions. Jointly developed automated acceptance tests validate expected interface.

**Benefit:** Frees upstream team to make changes without fear of downstream side effects (via tests).

---

### Conformist
**Relationship:** Upstream/downstream where upstream has no motivation to help

**Key Rule:** When the upstream team has no motivation to provide for downstream needs and downstream is helpless, eliminate complexity of translation by slavishly adhering to the model of the upstream team. Although this cramps downstream style and probably doesn't yield ideal model, choosing conformity enormously simplifies integration. You will share ubiquitous language with upstream team.

**When to use:** Upstream indifference makes customer/supplier relationship impossible.

**Benefit:** Altruism may be sufficient to get upstream to share information with you.

---

### Anticorruption Layer
**Relationship:** Defensive downstream position

**Key Rule:** As a downstream client, create an isolating layer to provide your system with functionality of the upstream system in terms of your own domain model. This layer talks to the other system through its existing interface, requiring little/no modification to the other system. Internally, the layer translates in one or both directions as necessary between the two models.

**When to use:**
- Control or communication inadequate for shared kernel, partner, or customer/supplier
- Large interface with upstream system
- Upstream model is weak or doesn't fit your needs
- Integration is valuable/required but you need to protect your model

---

### Open-host Service
**Relationship:** One-to-many upstream/downstream

**Key Rule:** Define a protocol that gives access to your subsystem as a set of services. Open the protocol so all who need to integrate with you can use it. Enhance and expand the protocol to handle new integration requirements, except when a single team has idiosyncratic needs (then use one-off translator).

**When to use:** Subsystem needs integration with many others - customizing translator for each can bog down the team.

**Result:** Provider is upstream; each client is downstream (some conformist, some with anticorruption layers).

---

### Published Language
**Often combined with:** Open-host Service

**Key Rule:** Use a well-documented shared language that can express necessary domain information as a common medium of communication, translating as necessary into and out of that language.

**Examples:** Industry data interchange standards, project-specific interchange languages.

---

### Separate Ways
**Relationship:** Free (no relationship)

**Key Rule:** Declare a bounded context to have no connection to others at all, allowing developers to find simple, specialized solutions within this small scope.

**When to use:** Integration is expensive and the benefit is small. If two sets of functionality have no significant relationship, they can be completely cut loose from each other.

---

### Big Ball of Mud* (*New since 2004 book)
**What it is:** Parts of systems where models are mixed and boundaries are inconsistent

**Key Rule:** Draw a boundary around the entire mess and designate it a big ball of mud. Do not try to apply sophisticated modeling within this context. Be alert to the tendency for such systems to sprawl into other contexts.

**Reality check:** Well-defined context boundaries only emerge from intellectual choices and social forces. When these are absent, systems congeal into balls of mud.

**Practical note:** Big ball of mud is actually practical for some situations, but almost completely prevents the subtlety and precision needed for useful models.

---

## V. DISTILLATION FOR STRATEGIC DESIGN

**Goal:** Focus on central problem without drowning in side issues. Distinguish broad swaths of the model and distill the domain model as a whole.

### Core Domain
**Purpose:** Identify what makes your system valuable

**Key Rule:** Boil the model down. Define a core domain and provide a means of easily distinguishing it from the mass of supporting model and code. Bring the most valuable and specialized concepts into sharp relief. Make the core small.

**Resource allocation:**
- Apply top talent to the core domain
- Spend effort in core to find deep model and develop supple design
- Justify investment in any other part by how it supports the distilled core

**Reality:** Not all parts of design will be equally refined. Priorities must be set.

---

### Generic Subdomains
**Purpose:** Factor out non-core but necessary complexity

**Key Rule:** Identify cohesive subdomains that are not the motivation for your project. Factor out generic models of these subdomains and place them in separate modules. Leave no trace of your specialties in them.

**Priorities:**
- Give continuing development lower priority than core domain
- Avoid assigning core developers to these tasks (little domain knowledge gained)
- Consider off-the-shelf solutions or published models

**Examples:** General principles everyone knows, or specialties that play supporting roles.

---

### Domain Vision Statement
**Purpose:** Communicate the value proposition

**Key Rule:** Write a short description (about one page) of the core domain and the value it will bring - the "value proposition." Ignore aspects that don't distinguish this domain model from others. Show how the domain model serves and balances diverse interests. Keep it narrow. Write this early and revise as you gain new insight.

**When to use:**
- Beginning of project (before model even exists)
- To explain value without requiring in-depth model study
- When critical aspects of domain model span multiple bounded contexts

---

### Highlighted Core
**Purpose:** Make the core domain visible in the code/documentation

**Two forms:**

**Form 1 - Distillation Document:**
Write a very brief document (3-7 sparse pages) that describes the core domain and primary interactions among core elements.

**Form 2 - Flagged Elements:**
Flag the elements of the core domain within the primary repository of the model, without particularly trying to elucidate its role. Make it effortless for a developer to know what is in or out of the core.

**Decision rule:** When a model or code change affects the distillation document, it requires consultation with other team members and immediate notification of all when made. Changes outside the core or to details not in the document can be integrated without consultation.

---

### Cohesive Mechanisms
**Purpose:** Encapsulate complex algorithms away from domain concepts

**Key Rule:** When computations reach complexity that bloats the design, partition a conceptually cohesive mechanism into a separate lightweight framework. Particularly watch for formalisms or well-documented categories of algorithms. Expose capabilities with intention-revealing interface. Now other domain elements can focus on expressing the problem ("what"), delegating intricacies of solution ("how") to the framework.

**Result:** Factoring out generic subdomains reduces clutter; cohesive mechanisms encapsulate complex operations. This leaves a more focused model with fewer distractions.

---

### Segregated Core
**Purpose:** Structurally separate core from supporting elements

**Key Rule:** Refactor the model to separate the core concepts from supporting players (including ill-defined ones) and strengthen cohesion of the core while reducing coupling to other code. Factor all generic or supporting elements into other objects and place them into other packages, even if this means refactoring the model in ways that separate highly coupled elements.

**Problem it solves:** Elements in model may partially serve core and partially play supporting roles. Core elements may be tightly coupled to generic ones. Conceptual cohesion of core may not be strong or visible.

---

### Abstract Core
**Purpose:** Express fundamental concepts at abstract level

**Key Rule:** Identify the most fundamental differentiating concepts in the model and factor them into distinct classes, abstract classes, or interfaces. Design this abstract model so it expresses most of the interaction between significant components. Place this abstract overall model in its own module, while specialized detailed implementation classes are left in their own modules defined by subdomain.

**When to use:** 
- Even core domain has so much detail that big picture is difficult to communicate
- Lot of interaction between subdomains in separate modules

---

## VI. LARGE-SCALE STRUCTURE FOR STRATEGIC DESIGN

**What it is:** A language that lets you discuss and understand the system in broad strokes. A set of high-level concepts or rules that establishes a pattern of design for an entire system.

**Goal:** Understand the role of an individual part in the whole without delving into details of the whole.

### Evolving Order
**Key Rule:** Let this conceptual large-scale structure evolve with the application, possibly changing to a completely different type of structure along the way. Don't over-constrain detailed design and model decisions that must be made with detailed knowledge.

**When to apply:** When a structure can be found that greatly clarifies the system without forcing unnatural constraints. Because an ill-fitting structure is worse than none, it's best not to shoot for comprehensiveness, but rather to find a minimal set that solves problems that have emerged.

**Less is more.**

---

### System Metaphor
**Purpose:** Use concrete analogy to understand the system

**Key Rule:** When a concrete analogy to the system emerges that captures team imagination and seems to lead thinking in useful direction, adopt it as large-scale structure. Organize design around this metaphor and absorb it into ubiquitous language. The metaphor should both facilitate communication about the system and guide development.

**Critical:** Because all metaphors are inexact, continually reexamine the metaphor for overextension or inaptness, and be ready to drop it if it gets in the way.

---

### Responsibility Layers
**Purpose:** Impose structure on responsibility assignment

**Key Rule:** Look at conceptual dependencies in your model and varying rates and sources of change of different parts of your domain. If you identify natural strata, cast them as broad abstract responsibilities. These should tell a story of the high-level purpose and design of your system. Refactor the model so responsibilities of each domain object, aggregate, and module fit neatly within the responsibility of one layer.

**Extension of:** Responsibility-driven design scaled up from individual objects to larger scales.

---

### Knowledge Level
**What it is:** A group of objects that describe how another group of objects should behave

**Key Rule:** Create a distinct set of objects that can be used to describe and constrain the structure and behavior of the basic model. Keep these concerns separate as two "levels" - one very concrete, the other reflecting rules and knowledge that a user or super-user is able to customize.

**When to use:** Application where roles and relationships between entities vary in different situations. Neither fully general models nor highly customized ones serve users' needs.

---

### Pluggable Component Framework
**Purpose:** Enable interoperability across independently designed applications

**Key Rule:** Distill an abstract core of interfaces and interactions and create a framework that allows diverse implementations of those interfaces to be freely substituted. Likewise, allow any application to use those components, so long as it operates strictly through the interfaces of the abstract core.

**When to use:** Very mature model that is deep and distilled. Usually only comes into play after a few applications have already been implemented in the same domain.

**Problem it solves:** Variety of applications need to interoperate, all based on same abstractions but designed independently. Translations between multiple bounded contexts limit integration.

---

## CRITICAL PROJECT STRUCTURING GUIDANCE

### Module Organization (from the original document)

**Modules are part of the model** - Not just code organization, but conceptual organization:

1. **Choose modules that tell the story of the system** and contain a cohesive set of concepts
2. **Give modules names that become part of ubiquitous language**
3. **Module names should reflect insight into the domain**
4. **Seek low coupling** in the sense of concepts that can be understood and reasoned about independently
5. **Seek high cohesion** - modules should partition according to high-level domain concepts
6. **Refine through refactoring** - don't content yourself with modules conceived early in the project

### File Structure Principles

From the document's guidance on packaging and module design:

- **Segregate by domain concept, not technical concern** - Group by bounded context and subdomain, not by "controllers," "services," "models"
- **Follow the aggregate boundaries** - Keep aggregates together
- **Respect the core domain** - Core domain modules should be clearly distinguished from supporting and generic subdomains
- **Make boundaries obvious** - Module/package structure should make bounded context boundaries visible
- **Align with ubiquitous language** - Directory/module names should use terms from the domain

### Anti-patterns in Project Structure

- ❌ Organizing purely by technical layers (all entities in one place, all repositories in another)
- ❌ Mixing multiple bounded contexts without clear separation
- ❌ Generic subdomains scattered throughout core domain code
- ❌ Module names that don't reflect domain concepts
- ❌ Deeply nested structures that obscure the conceptual model

---

## KEY DISTINCTIONS (Anti-Hallucination Reference)

### Entity vs Value Object
- **Entity:** Identity is primary, has lifecycle, can have changing attributes, needs unique identifier
- **Value Object:** No identity, defined by attributes, immutable, freely shareable, disposable

### Aggregate vs Entity
- **Aggregate:** Cluster of entities/values with defined boundary and root, enforces invariants as a unit
- **Entity:** May be part of an aggregate but isn't necessarily an aggregate root
- **Rule:** External references only to aggregate root, not to internal entities

### Repository vs Factory
- **Repository:** Retrieves existing aggregates (illusion of in-memory collection), query-focused
- **Factory:** Creates new aggregates, construction-focused, may not even store them

### Service vs Entity Method
- **Service:** Operation doesn't naturally belong to an object, typically stateless, named as verb
- **Entity Method:** Operation naturally belongs to the entity, part of its behavior

### Module vs Bounded Context
- **Module:** Code organization within a bounded context, part of the model
- **Bounded Context:** Larger boundary where a model applies, may contain multiple modules

### Upstream vs Downstream
- **Upstream:** Their changes affect you, your changes don't significantly affect them
- **Downstream:** Dependent on upstream, must adapt to upstream changes
- **NOT bidirectional:** If A affects B significantly AND B affects A significantly, they're mutually dependent

---

## COMMON PITFALLS FOR BEGINNERS

1. **Creating entities for everything** - Many concepts should be value objects
2. **Making value objects mutable** - Defeats their purpose and benefits
3. **Exposing aggregate internals** - External code should only reference the root
4. **Transaction spans multiple aggregates** - This violates aggregate boundaries
5. **Anemic domain model** - Entities with only getters/setters, all logic in services
6. **Ubiquitous language only in documentation** - It must be in the code
7. **One model for everything** - Multiple bounded contexts are normal and necessary
8. **Treating all relationships equally** - Context map relationships have specific patterns
9. **Over-engineering the core** - Keep it small and focused
10. **Under-investing in the core** - This is where your best people should work

---

## TEACHING NOTES FOR BEGINNERS

### Start Here (Tactical First)
1. Understand Entities vs Value Objects (foundational distinction)
2. Learn Aggregates (critical for consistency)
3. Understand Repositories (how to retrieve)
4. Learn Services (when objects aren't the answer)

### Then Move To Strategic
1. Bounded Contexts (most important strategic pattern)
2. Context Mapping (understanding relationships)
3. Core Domain (focus your efforts)

### Finally, Refinement
1. Supple Design patterns (make it elegant)
2. Distillation (make core visible)
3. Large-scale Structure (optional, for very large systems)

### Key Mental Models
- **Entities are things with identity** (a specific person, a specific order)
- **Value Objects are measurements/descriptions** (an amount, a date, an address)
- **Aggregates are consistency boundaries** (what must stay consistent together?)
- **Bounded Contexts are language boundaries** (where does this term mean something different?)
- **The Core Domain is your competitive advantage** (what makes your software special?)

---

## QUESTIONS TO ASK WHEN APPLYING DDD

### For Any Object
- Does it have identity that matters? → Entity
- Or is it defined purely by attributes? → Value Object
- Does it belong inside an aggregate boundary?
- What is its ubiquitous language term?

### For Operations
- Is this naturally an object's responsibility? → Method
- Or does it not fit any object? → Service
- Does it have side effects? (try to minimize)
- Does the name reveal intent in domain terms?

### For Boundaries
- What is my bounded context?
- What are the other bounded contexts I integrate with?
- What is the relationship pattern? (Customer/Supplier, Conformist, etc.)
- Do I need an anticorruption layer?

### For Structure
- What is my core domain?
- What are generic subdomains I can extract?
- Are my modules organized by domain concepts?
- Can someone understand the big picture from my structure?

---

## FINAL NOTES

- **DDD is about collaboration** - Not just a technical approach, but a way of working with domain experts
- **Ubiquitous language is non-negotiable** - If it's not in the code, it's not real
- **Start small, evolve continuously** - Don't try to design everything upfront
- **Context is everything** - Same term can mean different things in different bounded contexts
- **The model is the code** - They must stay in sync or you've lost DDD's benefits
- **Focus on the core** - Not everything needs the same level of attention
- **It's okay to have separate ways** - Not all parts of the system need to integrate

**Remember:** This is a reference document. Always verify pattern applicability to your specific context. DDD is a philosophy and set of patterns, not a rigid prescription.

---

*Summary created from: Eric Evans, Domain-Driven Design Reference (2015)*