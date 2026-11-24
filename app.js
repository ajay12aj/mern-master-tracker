/* MERN Stack Mastery Tracker
   Progress is stored locally in the current browser. Export a JSON backup regularly. */

const STORAGE_KEY = "mernStackMasteryTracker_v1";

const modules = [
  {
    title: "Web Foundations: HTML",
    description: "Build semantic, accessible page structure before styling or adding behaviour.",
    hint: "Build challenge: create a multi-page college or portfolio website using semantic HTML only. Validate the forms and inspect the page with a keyboard.",
    tasks: [
      ["Understand how the web works", "Explain browser, server, HTTP/HTTPS, URL, DNS and request/response."],
      ["Create a valid HTML document", "Use doctype, html, head, metadata, title and body correctly."],
      ["Use headings, paragraphs and text semantics", "Choose heading levels in a logical hierarchy; use strong, em, mark and code appropriately."],
      ["Create links and navigation", "Use relative/absolute paths, target behaviour and meaningful link text."],
      ["Add images and media", "Use alt text, dimensions, responsive image basics, audio and video where relevant."],
      ["Build ordered, unordered and description lists", "Choose the correct list structure for the content."],
      ["Build tables accessibly", "Use caption, thead, tbody, th, scope and avoid tables for page layout."],
      ["Create forms and common input types", "Use labels, name, type, required, min/max, pattern and autocomplete."],
      ["Use semantic layout elements", "Use header, nav, main, section, article, aside and footer correctly."],
      ["Understand block, inline and inline-block behaviour", "Explain how elements participate in normal document flow."],
      ["Use data attributes and global attributes", "Use id, class, title, hidden, data-* and appropriate attributes."],
      ["Embed external content safely", "Understand iframe title, sandbox and permission restrictions."],
      ["Understand accessibility foundations", "Keyboard navigation, labels, focus order, landmarks and accessible names."],
      ["Use HTML validation and browser inspection", "Find and fix invalid nesting, missing labels and console issues."],
      ["Understand SEO-friendly document basics", "Set title, description, canonical concept, language and heading structure."],
      ["Complete an accessible multi-page HTML mini-project", "Create Home, About, Projects and Contact pages without copying a template."]
    ]
  },
  {
    title: "CSS: Layout, Responsive Design & UI",
    description: "Style interfaces that work across phone, tablet and desktop sizes.",
    hint: "Build challenge: recreate a dashboard layout from a screenshot. Make it responsive without using a UI framework.",
    tasks: [
      ["Understand the cascade and specificity", "Explain inheritance, source order, specificity and !important trade-offs."],
      ["Use selectors and pseudo-classes", "Use class, attribute, descendant, :hover, :focus, :nth-child and :not."],
      ["Work with colours, units and typography", "Use hex/RGB/HSL, rem/em, %, vw/vh, line-height and font stacks."],
      ["Master the box model", "Explain content, padding, border, margin and box-sizing."],
      ["Control display and positioning", "Use block, inline, inline-block, relative, absolute, fixed and sticky."],
      ["Use Flexbox confidently", "Build navigation, aligned cards, wrapping rows and flexible layouts."],
      ["Use CSS Grid confidently", "Build two-dimensional layouts with tracks, minmax, auto-fit and areas."],
      ["Create responsive layouts", "Use mobile-first media queries and test multiple viewport widths."],
      ["Use responsive images and containers", "Use max-width, object-fit, aspect-ratio and container constraints."],
      ["Create reusable CSS variables", "Define design tokens for colour, spacing, radius and typography."],
      ["Style forms and interactive states", "Design focus, disabled, invalid, hover and active states."],
      ["Understand stacking contexts and z-index", "Debug overlays, modals, sticky headers and stacking issues."],
      ["Use transitions and transforms", "Create subtle feedback and understand reduced-motion preferences."],
      ["Create keyframe animations responsibly", "Avoid unnecessary motion and respect prefers-reduced-motion."],
      ["Understand CSS architecture", "Organise files and components; avoid uncontrolled global selectors."],
      ["Use a utility framework when appropriate", "Understand Tailwind concepts without becoming dependent on classes."],
      ["Check contrast and accessibility", "Ensure readable contrast, visible focus and usable touch targets."],
      ["Complete a responsive portfolio or admin dashboard", "Build a consistent UI with reusable patterns and no copied template."]
    ]
  },
  {
    title: "JavaScript: Core Language & Browser",
    description: "The most important foundation for React, Node.js and debugging.",
    hint: "Build challenge: make a task manager with validation, filtering, sorting and persistent data using vanilla JavaScript.",
    tasks: [
      ["Understand let, const and var", "Explain scope, reassignment, hoisting and why const is the default choice."],
      ["Know primitive and reference types", "Work with string, number, boolean, null, undefined, bigint, symbol and objects."],
      ["Use type conversion and equality correctly", "Explain == vs ===, truthy/falsy values and implicit coercion."],
      ["Use arithmetic, comparison and logical operators", "Understand short-circuiting, nullish coalescing and optional chaining."],
      ["Write conditions and switch statements", "Handle edge cases and avoid deeply nested conditional logic."],
      ["Use for, while, for...of and for...in", "Choose the correct iteration method for arrays and objects."],
      ["Write functions and understand parameters", "Use declarations, expressions, arrow functions, defaults and return values."],
      ["Understand lexical scope and closures", "Explain how inner functions retain access to outer variables."],
      ["Understand this and binding", "Explain this in methods, normal functions, arrow functions and event handlers."],
      ["Use arrays and array methods", "Practice map, filter, reduce, find, some, every, sort and forEach."],
      ["Work with objects", "Use property access, computed keys, methods, Object.keys/values/entries and copying."],
      ["Use destructuring, spread and rest", "Transform arrays/objects without accidental mutation."],
      ["Understand immutability and reference equality", "Avoid mutating shared state and explain shallow vs deep copies."],
      ["Use template literals and modern syntax", "Write readable modern JavaScript with concise expressions."],
      ["Split code with ES modules", "Use export, named/default imports and understand module boundaries."],
      ["Handle exceptions", "Use try/catch/finally and throw meaningful Error objects."],
      ["Understand synchronous vs asynchronous code", "Explain the call stack, task queue and event loop at a practical level."],
      ["Use callbacks and promises", "Chain promises and handle rejected promises correctly."],
      ["Master async/await", "Use async functions, Promise.all and sequential vs parallel work."],
      ["Use fetch and the HTTP response", "Check response.ok, parse JSON, handle network errors and cancellation basics."],
      ["Understand JSON", "Use JSON.stringify/parse and know what JSON cannot represent."],
      ["Understand the DOM", "Select, create, update and remove elements without unsafe HTML injection."],
      ["Handle browser events", "Use addEventListener, event target, bubbling, delegation and preventDefault."],
      ["Work with forms and validation", "Read FormData, validate inputs and show clear error messages."],
      ["Use localStorage and sessionStorage", "Persist small non-sensitive browser data and handle JSON safely."],
      ["Understand dates, timers and browser APIs", "Use Date, setTimeout, setInterval and clean up timers."],
      ["Debug JavaScript with DevTools", "Use breakpoints, call stack, Network, Console and inspect values."],
      ["Understand basic memory and performance issues", "Avoid unnecessary listeners, retained references and expensive loops."],
      ["Write reusable utility functions", "Use clear names, single responsibilities and handle edge cases."],
      ["Complete a vanilla JavaScript application", "Build a task/expense tracker with search, filters, validation and persistence."]
    ]
  },
  {
    title: "Developer Workflow: Git, GitHub, npm & Tooling",
    description: "Work with code safely, manage dependencies and collaborate like a developer.",
    hint: "Build challenge: create a GitHub repository, use branches, open a pull request and write a useful README.",
    tasks: [
      ["Use the terminal confidently", "Navigate folders, list files, create/remove folders and run commands."],
      ["Understand Git repositories and working tree", "Explain working directory, staging area, commits and remote."],
      ["Use init, status, add and commit", "Make small commits with meaningful messages."],
      ["Use log, diff, show and restore", "Inspect changes and safely undo local work."],
      ["Connect a local project to GitHub", "Create a remote repository and push the first commit."],
      ["Understand branches and merge", "Create feature branches, merge changes and resolve a simple conflict."],
      ["Use pull requests and code review", "Describe changes, review diffs and respond to feedback."],
      ["Use .gitignore correctly", "Exclude node_modules, environment files, build output and local secrets."],
      ["Write a useful README", "Document purpose, features, setup, environment variables, scripts and screenshots."],
      ["Understand npm and package.json", "Install packages, understand scripts, dependencies and devDependencies."],
      ["Use npm scripts and package versions", "Run scripts and understand semantic versioning and lock files."],
      ["Understand Vite and frontend build tooling", "Create a React app, run the dev server and create a production build."],
      ["Configure environment variables", "Keep secrets out of source code and understand client-exposed variables."],
      ["Use a code formatter and linter", "Configure Prettier/ESLint basics and fix warnings rather than hiding them."]
    ]
  },
  {
    title: "React: Components, Hooks & Frontend Architecture",
    description: "Build maintainable, data-driven interfaces with React.",
    hint: "Build challenge: create a multi-page dashboard with reusable components, forms, API data, loading/error states and protected routes.",
    tasks: [
      ["Create a React project with Vite", "Understand the project structure, scripts and development server."],
      ["Understand JSX and rendering", "Use expressions, fragments, attributes and conditional rendering."],
      ["Build functional components", "Split a UI into small, reusable components."],
      ["Pass and validate props", "Pass data and callbacks; avoid changing props inside child components."],
      ["Render lists with stable keys", "Use stable IDs and understand why array indexes can be problematic."],
      ["Manage state with useState", "Update state immutably and understand state snapshots."],
      ["Handle events in React", "Pass event handlers and avoid calling handlers during render."],
      ["Understand controlled forms", "Manage inputs, validation, submit state and user feedback."],
      ["Use useEffect correctly", "Understand dependencies, cleanup, subscriptions and when not to use effects."],
      ["Use useRef", "Reference DOM nodes and store mutable values that do not trigger renders."],
      ["Understand component lifecycle and rendering", "Explain re-rendering, state updates and reconciliation at a practical level."],
      ["Create and use custom hooks", "Extract reusable stateful logic with clear hook rules."],
      ["Use Context API", "Share app-level state without excessive prop drilling."],
      ["Understand state management trade-offs", "Know when local state, Context or a dedicated store is appropriate."],
      ["Learn Redux Toolkit basics", "Create slices, configure a store and dispatch actions when global state warrants it."],
      ["Set up React Router", "Build nested routes, layouts, parameters, navigation and not-found pages."],
      ["Build protected frontend routes", "Handle logged-in UI states while remembering backend authorization is authoritative."],
      ["Fetch API data in React", "Handle loading, empty, success and error states; avoid race conditions."],
      ["Understand server state and caching", "Know the purpose of TanStack Query or a similar data-fetching library."],
      ["Use memoization carefully", "Understand React.memo, useMemo and useCallback; measure before optimising."],
      ["Understand error boundaries", "Show fallback UI for render errors and handle async errors separately."],
      ["Create accessible React interfaces", "Use semantic elements, labels, keyboard support and sensible focus handling."],
      ["Organise a scalable React project", "Separate features, components, hooks, services, routes and utilities."],
      ["Use Tailwind or a component styling approach", "Build consistent responsive UI without mixing unrelated styles."],
      ["Write basic React tests", "Test visible behaviour, forms and user interactions rather than implementation details."],
      ["Complete a React dashboard", "Create a responsive multi-page app with routing, forms and API integration."]
    ]
  },
  {
    title: "Node.js: Runtime & Backend Fundamentals",
    description: "Understand the server-side JavaScript environment before building APIs.",
    hint: "Build challenge: write a small Node server, read/write a file, use environment variables and handle errors.",
    tasks: [
      ["Explain Node.js and its use cases", "Understand the runtime and how it differs from browser JavaScript."],
      ["Use Node.js with npm", "Run scripts, install packages and understand package.json."],
      ["Understand CommonJS and ES modules", "Use require/module.exports and import/export appropriately."],
      ["Understand the Node event loop", "Explain asynchronous I/O and why blocking the event loop is harmful."],
      ["Use core modules", "Work with path, fs, crypto, os and process at a basic level."],
      ["Create and configure a Node server", "Understand ports, listening, request and response lifecycle."],
      ["Read environment variables", "Use process.env and validate required configuration at startup."],
      ["Understand streams and buffers", "Know when to stream files instead of loading everything into memory."],
      ["Use async code safely", "Handle promise rejection and avoid unhandled asynchronous failures."],
      ["Understand process signals and shutdown", "Close server and database connections gracefully."],
      ["Use npm scripts and nodemon/dev tooling", "Separate development commands from production start commands."],
      ["Understand backend logging", "Log useful diagnostic context without exposing passwords or tokens."],
      ["Understand configuration by environment", "Separate development, test and production configuration."],
      ["Create a small Node utility or CLI", "Build a command-line script that validates input and reports errors."],
      ["Understand worker threads and child processes conceptually", "Know when CPU-heavy work should not block request handling."],
      ["Profile a simple Node application", "Inspect memory/CPU and identify an obvious blocking operation."],
      ["Understand package maintenance", "Review package health, update dependencies and investigate vulnerabilities."],
      ["Understand Node production fundamentals", "Know process managers, reverse proxies and runtime version management."]
    ]
  },
  {
    title: "Express.js: REST APIs & Backend Architecture",
    description: "Design predictable APIs with validation, middleware and clear separation of concerns.",
    hint: "Build challenge: implement a versioned REST API with CRUD, pagination, filtering, validation and consistent errors.",
    tasks: [
      ["Create an Express application", "Configure app, server, port and route registration."],
      ["Understand HTTP methods and status codes", "Use GET, POST, PUT, PATCH, DELETE and appropriate status codes."],
      ["Read params, query strings and request bodies", "Validate incoming data instead of trusting client input."],
      ["Create route modules", "Separate routes by resource or feature."],
      ["Build controllers", "Keep request handling separate from database and business logic."],
      ["Write and order middleware", "Understand next(), middleware order and the request lifecycle."],
      ["Create centralized error handling", "Return consistent safe error responses from one error middleware."],
      ["Validate and sanitize input", "Use a schema validator such as Zod, Joi or express-validator."],
      ["Design RESTful resource routes", "Use nouns, consistent naming, nested resources carefully and API versioning."],
      ["Implement pagination, filtering and sorting", "Validate limits and avoid returning unbounded collections."],
      ["Separate controller, service and data layers", "Keep business rules testable and avoid oversized route files."],
      ["Understand MVC and feature-based structure", "Choose a maintainable structure for a growing app."],
      ["Handle file uploads", "Use Multer or a direct-to-storage flow; validate type, size and content."],
      ["Configure CORS correctly", "Allow only intended origins and understand credentials settings."],
      ["Serve static files safely", "Understand file paths, access controls and public vs private assets."],
      ["Document an API", "Write endpoint purpose, auth, request schema, response and error examples."],
      ["Test APIs with Postman", "Create collections and test success, validation and unauthorized cases."],
      ["Write integration tests for endpoints", "Test routes, database interactions and error responses."],
      ["Add request IDs and useful logging", "Trace a request across middleware and services."],
      ["Build a complete REST API", "Create a CRUD API with validation, pagination, tests and documentation."]
    ]
  },
  {
    title: "MongoDB & Mongoose: Data Modelling",
    description: "Design efficient collections and reliable data access for real applications.",
    hint: "Build challenge: design User, Product, Order and Review models; explain embedding vs referencing for each relationship.",
    tasks: [
      ["Understand MongoDB databases, collections and documents", "Explain BSON documents and flexible schemas."],
      ["Use MongoDB Atlas", "Create a cluster/database user and configure secure network access."],
      ["Connect from Node.js securely", "Use a connection string from an environment variable."],
      ["Perform CRUD operations", "Use insert, find, update and delete operations."],
      ["Use query and comparison operators", "Filter documents with logical, comparison and array operators."],
      ["Project, sort and limit results", "Return only required fields and cap result sizes."],
      ["Understand embedding vs referencing", "Choose a model based on access patterns and relationship behaviour."],
      ["Create Mongoose schemas and models", "Define field types, defaults, required rules and schema options."],
      ["Use Mongoose validation", "Validate at schema and request boundaries with clear messages."],
      ["Use references and populate", "Understand populate behaviour and avoid excessive nested population."],
      ["Use timestamps and indexes", "Add useful indexes based on queries rather than guessing."],
      ["Understand compound and unique indexes", "Enforce uniqueness and support common query patterns."],
      ["Use pagination efficiently", "Understand skip/limit trade-offs and cursor-based pagination basics."],
      ["Use aggregation pipelines", "Practice match, project, group, sort, lookup and unwind."],
      ["Use transactions when required", "Understand multi-document transactions and their cost."],
      ["Handle duplicate key and connection errors", "Return useful client-safe errors and monitor connection state."],
      ["Avoid common Mongoose pitfalls", "Understand lean(), validation, middleware and update validators."],
      ["Plan migrations and schema evolution", "Handle changes to existing records safely."],
      ["Secure database access", "Use least-privilege users, network rules and secret rotation."],
      ["Design and document a production-ready data model", "Explain indexes, relations, validation and expected query patterns."]
    ]
  },
  {
    title: "Full MERN Integration: Authentication & Product Features",
    description: "Connect React, Express, Node and MongoDB into one complete application.",
    hint: "Build challenge: complete user registration/login, role-based dashboard and CRUD flows from browser to MongoDB.",
    tasks: [
      ["Plan a MERN project structure", "Separate client/server, config, routes, controllers, services and models."],
      ["Connect the React app to the Express API", "Use a central API client and configurable base URL."],
      ["Understand the full request/response flow", "Trace a click from React through API, service and database back to UI."],
      ["Create registration", "Validate fields on client and server and handle duplicate accounts."],
      ["Hash passwords securely", "Use bcrypt or Argon2; never store plaintext passwords."],
      ["Implement login", "Verify credentials and return a safe response."],
      ["Understand sessions vs JWT", "Know the trade-offs and avoid treating JWT as automatically safer."],
      ["Implement secure cookie-based auth", "Set HttpOnly, Secure and SameSite appropriately for deployment."],
      ["Understand access and refresh tokens", "Handle expiry, rotation, revocation and storage trade-offs."],
      ["Build logout and session expiry", "Clear cookies or invalidate sessions/tokens according to the chosen design."],
      ["Create authentication middleware", "Verify identity on the server for protected API routes."],
      ["Implement role-based authorization", "Enforce permissions on the backend for admin/user resources."],
      ["Protect against insecure direct object access", "Check that a user owns or may access the requested record."],
      ["Build complete CRUD in React", "Create, view, update and delete records with optimistic or confirmed UI feedback."],
      ["Add search, filter, sort and pagination", "Keep URL/query state and API behaviour consistent."],
      ["Handle loading, empty and error states", "Make network and validation feedback understandable."],
      ["Upload and display images/files", "Validate uploads and use object storage or a suitable media provider."],
      ["Send transactional emails", "Implement verification or reset flows with short-lived tokens."],
      ["Build password reset safely", "Use one-time, expiring reset tokens and avoid account enumeration."],
      ["Complete an end-to-end MERN application", "Build auth, roles, dashboard, CRUD, file upload and responsive UI."]
    ]
  },
  {
    title: "Security, Reliability & Performance",
    description: "Move beyond a working demo and learn to protect user data and keep systems reliable.",
    hint: "Build challenge: perform a security review of your own app and document each issue, risk and fix.",
    tasks: [
      ["Understand the OWASP Top 10", "Recognise common web application risks and mitigation strategies."],
      ["Prevent injection and unsafe queries", "Use safe query construction and never trust user-supplied operators."],
      ["Prevent XSS", "Escape output, avoid unsafe HTML and understand Content Security Policy basics."],
      ["Understand CSRF", "Know when cookie-authenticated requests need CSRF protection."],
      ["Use secure headers", "Configure security headers with Helmet and understand their purpose."],
      ["Apply rate limiting", "Limit login, password reset and sensitive endpoints appropriately."],
      ["Protect secrets and credentials", "Never commit .env; rotate leaked keys and restrict access."],
      ["Set secure cookie and HTTPS behaviour", "Understand production TLS, proxy trust and cookie flags."],
      ["Prevent brute-force and account abuse", "Use throttling, monitoring and careful authentication responses."],
      ["Validate file uploads", "Check size, type, file signature and storage permissions."],
      ["Understand authorization boundaries", "Verify roles and resource ownership for every sensitive operation."],
      ["Understand NoSQL injection and mass assignment", "Allowlist updateable fields and validate nested input."],
      ["Use database backups and restore tests", "Create a backup strategy and test that restoration works."],
      ["Improve API performance", "Use indexes, pagination, projection and avoid N+1 data access patterns."],
      ["Understand caching", "Know browser, CDN, application and Redis caching use cases and invalidation risks."],
      ["Understand compression and response size", "Use compression selectively and avoid oversized payloads."],
      ["Understand WebSockets and real-time updates", "Build a small Socket.IO feature and secure room/event access."],
      ["Handle retries and idempotency", "Avoid duplicate orders/payments when clients retry requests."],
      ["Design graceful failure behaviour", "Use timeouts, safe fallbacks and meaningful service errors."],
      ["Complete a security and performance checklist", "Review authentication, access control, inputs, dependencies and slow queries."]
    ]
  },
  {
    title: "Testing, Code Quality & Collaboration",
    description: "Make changes confidently and keep projects maintainable as they grow.",
    hint: "Build challenge: add a test suite and CI check to an existing MERN project; make the pipeline fail on broken tests.",
    tasks: [
      ["Understand unit, integration and end-to-end tests", "Choose the right test level for each behaviour."],
      ["Test utility functions", "Write unit tests for normal, boundary and failure cases."],
      ["Test React components", "Test visible behaviour, keyboard interaction and form errors."],
      ["Test Express routes", "Cover successful, invalid, unauthenticated and forbidden requests."],
      ["Use a test database", "Keep test data isolated and clean it up reliably."],
      ["Mock external services carefully", "Mock email/payment providers while testing your integration boundary."],
      ["Write end-to-end browser tests", "Automate a critical user journey with Playwright or Cypress."],
      ["Use ESLint and Prettier", "Keep rules consistent and format code automatically."],
      ["Refactor duplicated code", "Extract reusable functions/components without overengineering."],
      ["Use clear naming and small functions", "Make intent understandable to another developer."],
      ["Review pull requests", "Inspect correctness, security, readability and test coverage."],
      ["Write useful technical documentation", "Document setup, architecture, environment and API contracts."],
      ["Use issue tracking and task breakdown", "Turn a feature into small testable implementation tasks."],
      ["Understand semantic versioning", "Track breaking changes and dependency updates."],
      ["Audit dependencies", "Review outdated/vulnerable packages and update safely."],
      ["Complete a maintainability review", "Remove dead code, fix warnings and improve project organisation."]
    ]
  },
  {
    title: "Deployment, DevOps & Production Operations",
    description: "Ship a complete application and maintain it after it goes live.",
    hint: "Build challenge: deploy frontend, API and database configuration; verify auth, uploads, CORS and logs on the live site.",
    tasks: [
      ["Create production builds", "Build React assets and run the backend with production settings."],
      ["Configure production environment variables", "Set server secrets and client public variables separately."],
      ["Deploy frontend", "Deploy to Vercel, Netlify or another suitable static/frontend host."],
      ["Deploy backend", "Deploy to Render, Railway, Fly.io or a suitable server host."],
      ["Configure MongoDB Atlas for production", "Restrict network/database access and use a dedicated database user."],
      ["Configure CORS for production domains", "Allow only intended origins and credentials behaviour."],
      ["Configure custom domains and HTTPS", "Understand DNS records, certificates and redirects."],
      ["Configure file/object storage", "Use persistent object storage rather than relying on ephemeral server disks."],
      ["Set up CI checks", "Run linting, tests and build checks on pull requests."],
      ["Understand CI/CD basics", "Deploy through a controlled pipeline and know how to roll back."],
      ["Use Docker fundamentals", "Build and run a container; understand images, ports and environment variables."],
      ["Understand reverse proxies and process management", "Know what Nginx or a platform proxy does and how the app process is kept running."],
      ["Set up application logs", "Record errors and request context without logging secrets or personal data unnecessarily."],
      ["Monitor uptime and errors", "Use health checks and a monitoring/error-reporting service."],
      ["Understand database backup and recovery", "Define retention and practise restoring a backup."],
      ["Create a release checklist", "Test critical flows, migrations, environment and rollback before release."],
      ["Verify production functionality", "Test register, login, permissions, CRUD, upload and logout on the live app."],
      ["Complete a production deployment", "Publish a project with README, environment guide and working public URL."]
    ]
  },
  {
    title: "Advanced Engineering: TypeScript, Architecture & Scale",
    description: "Skills that help you work on larger codebases and collaborate in professional teams.",
    hint: "Build challenge: convert a feature to TypeScript, add a background job and document the architecture trade-offs.",
    tasks: [
      ["Learn TypeScript fundamentals", "Use types, interfaces, unions, generics and type narrowing."],
      ["Add TypeScript to a React application", "Type props, events, hooks, API responses and reusable components."],
      ["Add TypeScript to a Node/Express API", "Type request data, services, configuration and responses."],
      ["Understand layered and modular architecture", "Separate domain rules, application services and infrastructure where useful."],
      ["Understand dependency injection conceptually", "Reduce tight coupling and make services easier to test."],
      ["Design API contracts", "Use OpenAPI/Swagger or a documented schema for stable API interfaces."],
      ["Understand background jobs and queues", "Use a queue for email, reports or long-running work."],
      ["Understand Redis use cases", "Know caching, rate limiting, sessions, queues and pub/sub basics."],
      ["Understand real-time system design", "Plan WebSocket events, reconnect behaviour and authorization."],
      ["Understand horizontal scaling", "Know stateless services, shared sessions, load balancing and shared storage."],
      ["Understand database scaling concepts", "Know replication, sharding trade-offs and query profiling basics."],
      ["Understand event-driven design", "Use events carefully and consider delivery, retries and duplicate handling."],
      ["Understand observability", "Differentiate logs, metrics and traces; follow a request across services."],
      ["Understand accessibility and internationalisation at scale", "Design reusable patterns for keyboard, language and locale support."],
      ["Understand architecture decision records", "Write down important design choices, alternatives and trade-offs."],
      ["Read and navigate an unfamiliar codebase", "Trace a feature end-to-end and make a safe, tested change."],
      ["Perform a technical trade-off review", "Explain why you selected a database model, auth strategy or deployment approach."],
      ["Complete an advanced feature", "Add a tested real-time, queued or analytics feature to an existing MERN app."]
    ]
  },
  {
    title: "Portfolio Projects & Independent Mastery Tests",
    description: "Prove that you can plan, build, test and ship applications without following a tutorial.",
    hint: "Do not tick a project just because it runs. Tick it only after the key user flows work, the code is yours, and you can explain the architecture.",
    tasks: [
      ["Project 1: Notes and Task Manager", "Build CRUD, search, filtering, validation, React UI and MongoDB persistence."],
      ["Project 2: Student Management System", "Build auth, admin/student roles, protected APIs, dashboards and student CRUD."],
      ["Project 3: E-commerce application", "Build catalogue, cart, orders, admin product tools and a payment-provider test flow."],
      ["Project 4: Real-time application", "Build a live queue, chat or notification feature using Socket.IO and authorization."],
      ["Project 5: Original capstone application", "Choose a real problem, write requirements, design the data model, build, test and deploy it."],
      ["Plan a project before coding", "Write user roles, user stories, page list, API list, data model and acceptance criteria."],
      ["Build without copying a tutorial", "Use documentation and references, but independently write and debug the implementation."],
      ["Explain the complete architecture", "Describe the browser-to-API-to-database flow and important design choices."],
      ["Demonstrate secure access control", "Prove that users cannot access another user's private records or admin-only endpoints."],
      ["Demonstrate reliable error handling", "Test invalid input, expired login, unavailable database and failed file upload."],
      ["Demonstrate tests and deployment", "Show automated tests, a live deployment, setup instructions and a backup strategy."],
      ["Create a professional GitHub portfolio", "Pin projects, add screenshots, demos, concise READMEs and meaningful commit history."],
      ["Prepare a technical walkthrough", "Explain database schema, authentication, security, performance and trade-offs."],
      ["Complete a timed build exercise", "Build a small CRUD feature from a blank branch without step-by-step instructions."],
      ["Review and improve an existing project", "Find one security issue, one performance issue and one maintainability issue and fix them."]
    ]
  }
];

const resources = [
  {
    title: "HTML & CSS",
    description: "Start with the web structure and responsive styling.",
    links: [
      ["Kevin Powell – HTML & CSS beginners", "https://www.youtube.com/playlist?list=PL4-IK0AVhVjOJs_UjdQeyEZ_cmEV3uJvx"],
      ["MDN HTML", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
      ["MDN CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"]
    ]
  },
  {
    title: "JavaScript",
    description: "Use one primary course, then practise each concept yourself.",
    links: [
      ["Hitesh Choudhary – JavaScript in Hindi", "https://www.youtube.com/watch?v=sscX432bMZo"],
      ["Dave Gray – JavaScript full course", "https://www.youtube.com/watch?v=EfAl9bwzVZk"],
      ["MDN JavaScript Guide", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"]
    ]
  },
  {
    title: "Git & GitHub",
    description: "Version control and collaboration fundamentals.",
    links: [
      ["Net Ninja – Git & GitHub", "https://www.youtube.com/playlist?list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR"],
      ["Git documentation", "https://git-scm.com/doc"],
      ["GitHub Skills", "https://skills.github.com/"]
    ]
  },
  {
    title: "React",
    description: "Learn components, hooks, routing and application structure.",
    links: [
      ["Hitesh – Chai aur React", "https://www.youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige"],
      ["Dave Gray – React full course", "https://www.youtube.com/watch?v=RVFAyFWO4go"],
      ["Official React Learn", "https://react.dev/learn"]
    ]
  },
  {
    title: "Node.js & Express.js",
    description: "Build server-side applications and REST APIs.",
    links: [
      ["Hitesh – Chai aur Backend", "https://www.youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW"],
      ["Node.js Learn", "https://nodejs.org/en/learn"],
      ["Express documentation", "https://expressjs.com/"]
    ]
  },
  {
    title: "MongoDB & Mongoose",
    description: "Study data modelling, queries, indexes and schema validation.",
    links: [
      ["Net Ninja – MongoDB", "https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA"],
      ["MongoDB documentation", "https://www.mongodb.com/docs/"],
      ["Mongoose documentation", "https://mongoosejs.com/docs/"]
    ]
  },
  {
    title: "Complete MERN project",
    description: "Combine React, Express, Node and MongoDB in one application.",
    links: [
      ["freeCodeCamp – MERN tutorial with deployment", "https://www.youtube.com/watch?v=F9gB5b4jgOI"],
      ["Postman Learning Center", "https://learning.postman.com/"]
    ]
  },
  {
    title: "Security, testing & production",
    description: "Use these references when hardening and shipping your projects.",
    links: [
      ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
      ["Vitest documentation", "https://vitest.dev/guide/"],
      ["Playwright documentation", "https://playwright.dev/docs/intro"],
      ["Docker Get Started", "https://docs.docker.com/get-started/"]
    ]
  }
];

let progress = loadProgress();
let currentFilter = "all";
let searchTerm = "";
let toastTimer;

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      completed: saved.completed && typeof saved.completed === "object" ? saved.completed : {},
      notes: saved.notes && typeof saved.notes === "object" ? saved.notes : {}
    };
  } catch (error) {
    console.warn("Could not read saved progress:", error);
    return { completed: {}, notes: {} };
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    showToast("Could not save progress. Export a backup and check browser storage settings.");
    console.error(error);
  }
  updateOverview();
}

function taskId(moduleIndex, taskIndex) {
  return `m${moduleIndex + 1}-t${taskIndex + 1}`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderModules() {
  const container = document.getElementById("modulesContainer");
  const matchingModules = [];

  modules.forEach((module, moduleIndex) => {
    const visibleTasks = module.tasks.map((task, taskIndex) => ({
      task,
      taskIndex,
      id: taskId(moduleIndex, taskIndex),
      done: Boolean(progress.completed[taskId(moduleIndex, taskIndex)])
    })).filter(item => {
      const matchesSearch = !searchTerm || `${item.task[0]} ${item.task[1]} ${module.title}`.toLowerCase().includes(searchTerm);
      const matchesFilter = currentFilter === "all" || (currentFilter === "completed" ? item.done : !item.done);
      return matchesSearch && matchesFilter;
    });

    if (!visibleTasks.length) return;
    matchingModules.push({ module, moduleIndex, visibleTasks });
  });

  if (!matchingModules.length) {
    container.innerHTML = '<div class="no-results">No skills match your search/filter. Try another keyword or select “All”.</div>';
    return;
  }

  container.innerHTML = matchingModules.map(({ module, moduleIndex, visibleTasks }) => {
    const total = module.tasks.length;
    const done = module.tasks.reduce((count, task, taskIndex) => count + (progress.completed[taskId(moduleIndex, taskIndex)] ? 1 : 0), 0);
    const percent = Math.round((done / total) * 100);
    const isOpen = searchTerm || currentFilter !== "all" ? "open" : "";
    const tasksHTML = visibleTasks.map(({ task, id, done: isDone }) => `
      <label class="task-item ${isDone ? "is-done" : ""}" for="${id}">
        <input id="${id}" type="checkbox" data-task-id="${id}" ${isDone ? "checked" : ""} />
        <span class="task-copy">
          <span class="task-title">${escapeHTML(task[0])}</span>
          <span class="task-detail">${escapeHTML(task[1])}</span>
        </span>
      </label>
    `).join("");

    return `
      <details class="module" ${isOpen}>
        <summary>
          <span class="module-number">${String(moduleIndex + 1).padStart(2, "0")}</span>
          <span class="module-title-wrap">
            <span class="module-title">${escapeHTML(module.title)}</span>
            <span class="module-description">${escapeHTML(module.description)}</span>
          </span>
          <span class="module-progress-wrap">
            <span class="module-progress-text">${done}/${total}</span>
            <span class="mini-track"><span class="mini-fill" style="display:block;width:${percent}%"></span></span>
          </span>
        </summary>
        <div class="module-body">
          <p class="module-hint"><strong>Practice challenge:</strong> ${escapeHTML(module.hint.replace("Build challenge: ", ""))}</p>
          <div class="task-list">${tasksHTML}</div>
        </div>
      </details>
    `;
  }).join("");

  container.querySelectorAll("[data-task-id]").forEach(input => {
    input.addEventListener("change", event => {
      const id = event.currentTarget.dataset.taskId;
      const isChecked = event.currentTarget.checked;
      if (isChecked) progress.completed[id] = true;
      else delete progress.completed[id];
      saveProgress();
      renderModules();
      showToast(isChecked ? "Skill marked complete." : "Skill moved back to remaining.");
    });
  });
}

function updateOverview() {
  const totalTasks = modules.reduce((sum, module) => sum + module.tasks.length, 0);
  const completedTasks = Object.keys(progress.completed).filter(id => progress.completed[id]).length;
  const remainingTasks = Math.max(0, totalTasks - completedTasks);
  const completedModuleCount = modules.reduce((count, module, moduleIndex) => {
    const allDone = module.tasks.every((task, taskIndex) => progress.completed[taskId(moduleIndex, taskIndex)]);
    return count + (allDone ? 1 : 0);
  }, 0);
  const projectModuleIndex = modules.length - 1;
  const projectTasks = modules[projectModuleIndex].tasks.slice(0, 5);
  const completedProjects = projectTasks.reduce((count, task, index) => count + (progress.completed[taskId(projectModuleIndex, index)] ? 1 : 0), 0);
  const percent = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  document.getElementById("overallPercent").textContent = `${percent}%`;
  document.getElementById("overallProgressFill").style.width = `${percent}%`;
  document.getElementById("overallProgressBar").setAttribute("aria-valuenow", String(percent));
  document.getElementById("completedCount").textContent = completedTasks;
  document.getElementById("remainingCount").textContent = remainingTasks;
  document.getElementById("completedModules").textContent = `${completedModuleCount} / ${modules.length}`;
  document.getElementById("projectCount").textContent = `${completedProjects} / 5`;
}

function renderResources() {
  const container = document.getElementById("resourcesContainer");
  container.innerHTML = resources.map(resource => `
    <article class="resource-card">
      <h3>${escapeHTML(resource.title)}</h3>
      <p>${escapeHTML(resource.description)}</p>
      <div class="resource-links">
        ${resource.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHTML(label)} ↗</a>`).join("")}
      </div>
    </article>
  `).join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function exportProgress() {
  const backup = {
    app: "MERN Stack Mastery Tracker",
    version: 1,
    exportedAt: new Date().toISOString(),
    completed: progress.completed,
    notes: progress.notes
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mern-mastery-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Progress backup exported.");
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed || typeof parsed.completed !== "object" || parsed.completed === null) {
        throw new Error("This file does not look like a tracker backup.");
      }
      const validIds = new Set(modules.flatMap((module, moduleIndex) => module.tasks.map((task, taskIndex) => taskId(moduleIndex, taskIndex))));
      const completed = {};
      Object.entries(parsed.completed).forEach(([id, value]) => {
        if (validIds.has(id) && value === true) completed[id] = true;
      });
      progress = { completed, notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {} };
      saveProgress();
      renderModules();
      showToast("Backup imported successfully.");
    } catch (error) {
      showToast("Could not import this file. Please choose a valid tracker JSON backup.");
      console.error(error);
    }
    document.getElementById("importFile").value = "";
  };
  reader.onerror = () => showToast("Could not read the selected file.");
  reader.readAsText(file);
}

function setupControls() {
  document.getElementById("searchInput").addEventListener("input", event => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderModules();
  });

  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
      renderModules();
    });
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    const confirmed = window.confirm("Reset all MERN tracker progress in this browser? Export a backup first if you want to keep it.");
    if (!confirmed) return;
    progress = { completed: {}, notes: {} };
    saveProgress();
    renderModules();
    showToast("All progress has been reset.");
  });

  document.getElementById("exportBtn").addEventListener("click", exportProgress);
  document.getElementById("importFile").addEventListener("change", event => importProgress(event.target.files[0]));
}

function init() {
  renderResources();
  renderModules();
  updateOverview();
  setupControls();
}

init();
