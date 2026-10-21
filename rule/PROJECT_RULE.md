# ReactJS Project Rules

## 1. Formatting

- Follow existing `ESLint` and `Prettier configurations`.

## 2. Project Structure

``` text
src/
    assets/
    styles/
    layouts/
    pages/
    components/
    routes/
    services/
    hooks/
    contexts/
    types/
    utils/
    constants/
```

- pages/ defines page-level components, organized by route or feature.
- components/ contains reusable UI components.
- layouts/ defines shared page layouts using components such as Header, Footer, and Outlet.
- routes/ defines all application routes in one place and contains route protection logic.
- services/ handles API requests and communication with the backend.
- hooks/ contains reusable React logic using custom hooks.
- contexts/ manages shared application state using React Context.
- types/ defines shared TypeScript types and interfaces.
- utils/ contains reusable utility functions, not business logic tied to specific features.
- constants/ contains shared static values.
- assets/ stores images, icons, and fonts.
- styles/ contains global styles and CSS variables.

## 3. Components and Logic

- Components focus on UI rendering and user interactions.
- Pages compose components to build complete screens.
- Reuse components and logic when beneficial; avoid unnecessary abstractions.
- Do not duplicate logic across components.

## 4. State Management

- Use local state for component-specific data.
- Avoid duplicated state and unnecessary global state.

## 5. API and Data Handling

- Services handle all backend API communication.
- Do not make API requests directly inside reusable UI components.
- Keep API configuration and shared request logic in apiClient.ts.
- Handle loading, error, and empty states appropriately.
- Do not hardcode API URLs or environment-specific values.

## 6. Routing

- Define application routes in one place.
- Use layouts to share common page structures.
- Use ProtectedRoute for routes that require authentication.
- Use React Router navigation APIs instead of manually changing window.location when client-side navigation is appropriate.

## 7. Configuration

- No hardcoded environment-specific configuration.
- Read configuration from environment variables.

## 8. Code Quality

- Follow clean code principles and existing project conventions.
- Read and understand the existing codebase before making changes.