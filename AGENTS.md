<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context

This is a Next.js (App Router) project with a few specific architectural choices.

## Frameworks & Tooling
- **React Compiler:** Enabled in `next.config.ts`. You generally don't need to manually use `useMemo` or `useCallback`.
- **Tailwind CSS v4:** We are using Tailwind v4. There is no `tailwind.config.ts`. Configuration and theme variables are defined directly in CSS using `@theme` in `src/app/[locale]/globals.css`.
- **UI Components:** Shadcn UI is configured (`components.json`). Components are placed in `src/components/ui` and use `@/lib/utils`. Icons come from `lucide-react`.
- **i18n:** Routing and translations are handled by `next-intl`.
  - The App Router entrypoint is `src/app/[locale]`.
  - Locale strings are located at the repository root in `messages/`.
- **Animations:** GSAP (`@gsap/react`, `gsap`) and `motion` are available for animations.

## Workflow Commands
- `npm run dev`: Start development server.
- `npm run build`: Build production application.
- `npm run lint`: Run ESLint checks.

*(Note: There are currently no test suites configured. Rely on typechecking and ESLint for verification.)*
