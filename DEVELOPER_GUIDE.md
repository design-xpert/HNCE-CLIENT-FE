# HCNE — Developer Handoff Guide

> **Project:** Heritage Centre for Nursing Excellence — Marketing website + Admin panel
> **Audience:** Any developer joining this project. Read this fully before writing code.
> **Maintained by:** Tech Lead. Keep this updated when you change architecture, add a reusable component, or change a convention.

---

## 1. What this project is

Two products living in **one Next.js app**:

| Product            | Route prefix                     | Audience                      | Purpose                                                    |
| ------------------ | -------------------------------- | ----------------------------- | ---------------------------------------------------------- |
| **Public website** | `/` (everything except `/admin`) | Prospective students, parents | Marketing, programs info, lead capture, online fee payment |
| **Admin panel**    | `/admin/*`                       | HCNE staff                    | Manage content, leads, admissions, fees, settings          |

The whole thing is **front-end only right now.** Every form, table, and setting screen is wired to **mock data and simulated submits** (`setTimeout` + redirect). There is no database and no real backend yet. Section 12 lists exactly what needs to be connected for production.

---

## 2. Tech stack

| Concern       | Choice                                        | Notes                                                                                                 |
| ------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Framework     | **Next.js 16.2.6**, App Router, **Turbopack** | Server Components by default; opt into client with `"use client"`                                     |
| Language      | TypeScript 5.7                                | `strict` on, but `next.config.mjs` has `typescript.ignoreBuildErrors: true` (see Gotchas)             |
| Runtime       | React 19                                      |                                                                                                       |
| Styling       | **Tailwind CSS v4**                           | **CSS-first config** — there is **no `tailwind.config.ts`**. All theme config is in `app/globals.css` |
| UI primitives | **shadcn/ui** (Radix under the hood)          | 56 components in `components/ui/`. "New York" style. Configured in `components.json`                  |
| Icons         | `lucide-react`                                |                                                                                                       |
| Charts        | `recharts`                                    | Used in admin dashboard                                                                               |
| Fonts         | `Geist` + `Geist Mono` (next/font)            |                                                                                                       |
| Analytics     | `@vercel/analytics`                           | Only mounted in production                                                                            |
| Hosting       | **Vercel**                                    | Repo: `github.com/mukundkvt/hcne-homepage-ui`, branch `main` (auto-deploys)                           |

---

## 3. Getting started

```bash
# Install
npm install

npm run dev          # http://localhost:3000
npm run build        # production build (Turbopack)
npm run start        # serve the production build
npm run lint         # eslint
```

### Admin login (local/dev)

Go to `/admin` → you'll be redirected to `/admin/login`.

```
Email:    admin@hcne.edu.in
Password: hcne@2024
```

These come from env vars with hard-coded fallbacks (see `lib/admin/auth.ts`):

```
ADMIN_EMAIL=admin@hcne.edu.in
ADMIN_PASSWORD=hcne@2024
ADMIN_SECRET=hcne-admin-secret-x8k2p9
```

**Set real values in Vercel env vars before going live.** The fallbacks are dev-only.

---

## 4. Project structure

```
app/
├── layout.tsx                 # Root layout: fonts, <FloatingActions/>, Analytics
├── globals.css                # ⭐ ALL design tokens + Tailwind theme live here
├── page.tsx                   # Homepage (hero carousel, programs, lead form, news)
├── not-found.tsx              # 404
│
├── about/  facilities/  faculty/  careers/  research/        # static marketing pages
├── accreditations/  gallery/  contact/
├── programs/
│   ├── page.tsx               # Programs listing
│   ├── bsc-nursing/page.tsx   # B.Sc. detail + enquiry form
│   └── gnm/page.tsx           # GNM detail + enquiry form
├── admissions/
│   ├── page.tsx               # Admission form + eligibility + AdvisorPopup
│   └── payment/               # page.tsx, success/, failure/
├── online-fee-payment/page.tsx
├── news/
│   ├── page.tsx               # Blog listing w/ category filter
│   └── [slug]/page.tsx        # Blog detail (async dynamic route — see Gotchas)
├── policy/                    # privacy, terms, refund, grievance
├── thank-you/page.tsx         # ⭐ Universal post-submit confirmation (query-param driven)
│
├── admin/
│   ├── layout.tsx             # Thin wrapper (metadata: noindex). NO sidebar here.
│   ├── login/page.tsx         # Split-screen login (Suspense-wrapped)
│   ├── forgot-password/page.tsx
│   └── (panel)/               # ⭐ Route group — everything here gets sidebar + topbar
│       ├── layout.tsx         # Sidebar + Topbar + scroll container
│       ├── page.tsx           # Dashboard (stats + charts)
│       ├── sliders/           ├── news/ (+ [id], new, categories, tags, media)
│       ├── programs/ (+ [id], new)
│       ├── fee-payment/ (+ modules)
│       ├── leads/  admissions/  users/  roles/  activity/
│       └── settings/ (payment-gateway, notifications, sms)
│
└── api/admin/
    ├── login/route.ts         # Sets httpOnly cookie
    └── logout/route.ts        # Clears cookie

components/
├── ui/                        # shadcn/ui primitives (56 files) — generally don't edit by hand
├── site-header.tsx            # Public top nav (sticky)
├── site-footer.tsx            # Public footer (shared across ALL public pages)
├── brand-elements.tsx         # <BrandStar/>, <BrandPattern/>
├── prospectus-dialog.tsx      # ⭐ Lead-capture popup w/ math CAPTCHA
├── advisor-popup.tsx          # ⭐ Exit-intent style helper popup (admissions/fee pages)
├── floating-actions.tsx       # Scroll-to-top + chat bubble (global, in root layout)
├── hcne-logo.tsx              # Legacy SVG logo mark (mostly replaced by /images/logo-primary.png)
├── theme-provider.tsx         # next-themes wrapper (dark mode plumbing — not actively used)
└── admin/
    ├── sidebar.tsx            # ⭐ Admin nav (grouped sections, collapsible, mobile sheet)
    ├── topbar.tsx             # Breadcrumbs + NotificationPanel + user menu
    └── notification-panel.tsx # ⭐ Bell dropdown + slide-out sheet

lib/
├── utils.ts                   # cn() — clsx + tailwind-merge
├── blog-data.ts               # Public news/blog posts (typed)
└── admin/
    ├── types.ts               # ⭐ ALL admin domain types
    ├── mock-data.ts           # ⭐ Sliders, posts, programs, payments, leads, applications, users, roles
    ├── notifications.ts       # 30-day notification feed
    ├── activity-data.ts       # 83 audit-log entries
    └── auth.ts                # Token gen/validate + credentials

middleware.ts                  # ⭐ Protects /admin/* — redirects to login if no cookie
next.config.mjs                # images.unoptimized=true, ignoreBuildErrors=true
components.json                # shadcn config
```

⭐ = files you'll touch most / that carry the important logic.

---

## 5. Design system — **read this before styling anything**

### 5.1 There is no `tailwind.config.ts`

Tailwind v4 is configured **CSS-first** inside `app/globals.css`. To understand or change the theme, that's the **only** file you open.

### 5.2 Two layers of tokens

**Layer 1 — Brand palette** (raw colors, 5 shades each, defined as CSS vars in `:root`):

| Family              | Var prefix       | 900 (darkest) | Usage                                      |
| ------------------- | ---------------- | ------------- | ------------------------------------------ |
| Deep Teal (primary) | `--primary-*`    | `#0e5456`     | Brand primary, headers, links              |
| Burnt Terracotta    | `--terracotta-*` | `#8a4b2a`     | **All lead forms & primary CTAs**, accents |
| Olive Green         | `--olive-*`      | `#4a5d23`     | Success states, secondary stats            |
| Neutral Grey        | `--grey-*`       | `#5b6770`     | Muted stats, tertiary info                 |

Shades go `100, 300, 500, 700, 900`.

**Layer 2 — Semantic shadcn tokens** (what components actually consume): `--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--secondary`, `--accent`, `--destructive`, etc.

### 5.3 How to use colors in JSX

The palette is exposed to Tailwind via an `@theme inline { ... }` block in `globals.css`, which maps each CSS var to a utility class. So you can write:

```tsx
className = "bg-terracotta-900 text-white hover:bg-terracotta-700";
className = "bg-primary-100 text-primary-900";
className = "text-olive-700"; /* etc — any family + shade */
```

Semantic tokens work as normal Tailwind classes too: `bg-primary`, `text-muted-foreground`, `border-border`.

### 5.4 Adding a new palette color

1. Add the CSS var in `:root` (and `.dark` if needed) in `globals.css`.
2. Add the mapping line inside `@theme inline`: `--color-myname-500: var(--myname-500);`
3. Now `bg-myname-500` works. **Restart the dev server** — Tailwind v4 picks up `@theme` changes on rebuild.

### 5.5 Color convention (follow it)

- **Primary brand / informational** → teal (`primary`)
- **Anything that captures a lead or is the main CTA** → terracotta (`terracotta-900` bg, `terracotta-700` hover, white text)
- **Success / positive metrics** → olive
- **Neutral / muted metrics** → grey

This is why every lead form header and submit button is terracotta — it's a deliberate visual signal, not random.

---

## 6. Reusable components — what they are & how they're wired

### 6.1 `<SiteHeader />` and `<SiteFooter />`

Public layout. **Not** in a shared layout file — each public page imports and renders them itself (`<SiteHeader/> … <SiteFooter/>`). If you add a public page, import both.

- **Header** (`components/site-header.tsx`): sticky, logo (`/images/logo-primary.png`), `navItems` array drives the nav. Active state handles nested routes (e.g. `/news/*`). Has a mobile sheet.
- **Footer** (`components/site-footer.tsx`): shared everywhere. Link columns (Quick Links, Resources, Contact) are **data arrays** — add/remove links by editing those arrays, not JSX. Policy links + "Made with ♥ by KV TechMedia" in the bottom bar.

> ⚠️ Historical gotcha: `app/page.tsx` (homepage) once had a **second, inline footer** separate from `<SiteFooter/>`. If you change footer links globally, check the homepage isn't carrying a stale copy.

### 6.2 `<ProspectusDialog />` — the lead-capture popup ⭐

**File:** `components/prospectus-dialog.tsx`

This is the pattern to copy if you ever build another gated CTA. It is a **wrapper, not a button.** You pass it the trigger element and it handles the rest.

```tsx
<ProspectusDialog
  defaultProgram="bsc-nursing" // optional: pre-selects the program field
  className="w-full" // optional: applied to the trigger wrapper <span>
  trigger={
    <Button variant="outline" className="...">
      <Download className="h-4 w-4" /> Download Prospectus
    </Button>
  }
/>
```

**How it works:**

- The `trigger` is rendered inside a `<span onClick={open}>` — clicking anywhere on it opens the dialog. (We do **not** use shadcn's `DialogTrigger` because we want to wrap arbitrary buttons.)
- Collects: Full Name, Phone, Email, Program (select).
- **CAPTCHA is a client-side math question** (`useCaptcha` hook): two random numbers, user types the sum. Wrong answer regenerates the question and shows an error; correct shows a green tick. Submit is disabled until all fields are valid **and** the captcha is solved. This is a lightweight bot deterrent — **for production, swap in a real CAPTCHA** (reCAPTCHA/hCaptcha/Turnstile) and verify server-side.
- On submit: `setTimeout(900ms)` to simulate an API call, then **redirects to** `/thank-you?type=prospectus&name=<name>`.
- The shadcn `DialogContent` default close "X" is suppressed via `showCloseButton={false}` because the component renders its own white X on the terracotta header. **If you build dialogs with a custom colored header, do the same** or you get two X buttons.

**Where it's wired:** homepage (hero + admissions CTA), about, programs listing, BSc (hero + sidebar), GNM (hero + sidebar), admissions (hero + sidebar). Every "Download Prospectus / Brochure" button on the site is one of these.

### 6.3 `<AdvisorPopup />` — engagement popup

**File:** `components/advisor-popup.tsx`

- Auto-opens after **3 seconds** on the page it's mounted on, via `useEffect` + `setTimeout`.
- Once dismissed (X, backdrop click, or "I'll continue on my own"), it won't reappear **for that page load** (`dismissed` state — not persisted to storage, so it returns on reload).
- Currently mounted on `/admissions` and `/online-fee-payment` (rendered just before `<SiteFooter/>`).
- To add it to another page: import and render `<AdvisorPopup />`.

### 6.4 `<FloatingActions />`

**File:** `components/floating-actions.tsx`. Mounted **globally** in `app/layout.tsx`, so it's on every page (public and admin). Scroll-to-top button + animated terracotta chat bubble, fixed bottom-right.

### 6.5 Brand elements

**File:** `components/brand-elements.tsx`

- `<BrandStar size={} variant="outline|solid" className="" />` — decorative star motif.
- `<BrandPattern className="" />` — repeating background pattern (`/images/brand-pattern.png`) with `mix-blend-mode: soft-light` so it shows on dark teal. Used as an absolute-positioned overlay (e.g. footer). It's faint by design (`opacity-[0.18]`).

### 6.6 shadcn/ui (`components/ui/`)

56 primitives. Treat them as a vendored library — prefer composing over editing. Two we've intentionally customized:

- **`button.tsx`** — `outline` variant: we set an explicit `text-foreground` default and **removed** `hover:text-accent-foreground`. That hover override was clobbering custom text colors (white-text outline buttons on dark backgrounds turned invisible on hover). If you re-pull shadcn, re-apply this.
- **`dialog.tsx`** — supports `showCloseButton={false}` (used by ProspectusDialog).

---

## 7. The Lead Capture → Thank-You flow ⭐

Every lead form on the public site follows the **same pattern**, and you should keep it consistent:

1. Form is a client component (`"use client"`), submit handler calls `e.preventDefault()` then `router.push("/thank-you?type=...")`.
2. There is no real submit yet — the redirect _is_ the success behavior.

The redirect target carries a `type` (and optional `name`) query param. `app/thank-you/page.tsx` reads it and renders a tailored confirmation:

| `?type=`             | Used by               | Message theme                                |
| -------------------- | --------------------- | -------------------------------------------- |
| `prospectus`         | ProspectusDialog      | "Your prospectus is on its way" (terracotta) |
| `admissions`         | BSc/GNM enquiry forms | "Application received" (olive)               |
| `contact`            | Contact form          | "Message received" (teal)                    |
| `lead` / _(default)_ | Homepage lead form    | Generic "Thank you"                          |

`?name=Anjali` → personalizes the headline ("Thank you, Anjali!").

**To add a new form:** wire its submit to `router.push("/thank-you?type=<existing-or-new>")`. If you need a new variant, add a `case` to `getContent()` in `app/thank-you/page.tsx`.

> The page uses `useSearchParams`, so it's split into an inner component wrapped in `<Suspense>` and marked `export const dynamic = "force-dynamic"`. See Gotchas — this is mandatory in Next 16.

---

## 8. Admin panel architecture ⭐

### 8.1 Route groups give two different chromes

```
app/admin/
├── layout.tsx          ← applies to ALL /admin/* — only sets metadata (noindex), no UI
├── login/              ← NO sidebar (full-screen split layout)
├── forgot-password/    ← NO sidebar
└── (panel)/            ← the (panel) route GROUP — folder name in parens, NOT in the URL
    └── layout.tsx      ← renders <AdminSidebar/> + <AdminTopbar/> + scrollable <main>
```

`(panel)` is a **route group**: the parentheses mean it does **not** appear in the URL. So `app/admin/(panel)/leads/page.tsx` serves `/admin/leads`. This is how login/forgot-password escape the sidebar while every real screen gets it. **Put new admin screens inside `(panel)/`.**

### 8.2 Navigation

`components/admin/sidebar.tsx` holds a `nav` array of grouped sections (Dashboard / Content / Academic / Finance / People / System). Items can be flat links or have `children` (collapsible). **Add a screen → add an entry here**, and add its label to the `routeLabels` map in `topbar.tsx` so breadcrumbs render nicely.

### 8.3 The 7 modules

| Module          | Route(s)                                                         | What it does                                                                                               |
| --------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Dashboard**   | `/admin`                                                         | Stat cards, recharts area+bar charts, recent payments/applications                                         |
| **Sliders**     | `/admin/sliders`                                                 | Homepage hero CRUD, reorder, active toggle                                                                 |
| **News**        | `/admin/news`, `/[id]`, `/new`, `/categories`, `/tags`, `/media` | WordPress-style posts: editor w/ slug, SEO, tags, sidebar widget toggles, media library                    |
| **Programs**    | `/admin/programs`, `/[id]`, `/new`                               | Card list w/ Active + Show-on-menu toggles, **Duplicate**, full editor                                     |
| **Fee Payment** | `/admin/fee-payment`, `/modules`                                 | Collections table + filters + **printable receipt modal** + CSV export; per-program/year fee module editor |
| **People**      | `/admin/leads`, `/admissions`, `/users`                          | Leads (source/status filters, detail drawer), Applications (status workflow, docs), Admin users            |
| **System**      | `/admin/roles`, `/activity`, `/settings/*`                       | Roles & permission matrix, Activity audit log, Settings (Payment gateway, SMTP, SMS)                       |

### 8.4 Notifications & Activity log

- **`components/admin/notification-panel.tsx`** — the bell in the topbar. Popover shows latest 5; "View all" opens a right-side **Sheet** with the full 30-day feed grouped by day, with filter tabs (All/Payments/Admissions/Leads/System). Data: `lib/admin/notifications.ts`. Unread state is local component state.
- **`/admin/activity`** — full audit log. 83 entries in `lib/admin/activity-data.ts`. Search + module/action/user/status filters + date range, expandable rows (IP, user agent parsed to browser/OS), pagination (20/page), CSV export.

### 8.5 Settings screens are credential UIs

`/admin/settings/payment-gateway` (Razorpay test/live), `/notifications` (SMTP + editable email templates), `/sms` (provider switch: Fast2SMS / Twilio / MSG91 + DLT templates). They have show/hide secret toggles and "Test connection" buttons that **simulate** success. **None of these persist or actually connect** — they're the UI layer waiting for a backend.

---

## 9. Authentication & middleware

> This is **demo-grade auth**, fine for a gated preview, **not production-secure.**

- **`lib/admin/auth.ts`** — validates email+password against env vars; the "token" is a SHA-256 of `email::SECRET`. Same value every time (not a real signed/expiring session token).
- **`app/api/admin/login/route.ts`** — on valid creds, sets an **httpOnly cookie** `admin-token` (7-day maxAge, `secure` in prod, `sameSite: lax`).
- **`app/api/admin/logout/route.ts`** — deletes the cookie.
- **`middleware.ts`** — matches `/admin/:path*`. If the path isn't `/admin/login` or `/admin/forgot-password` and there's no `admin-token` cookie, redirect to login (preserving `?from=`). It only checks **presence** of the cookie, not validity.

**For production:** replace with real auth (NextAuth/Auth.js, or your SSO), signed+expiring sessions, server-side token validation in middleware, password hashing, rate limiting on login. Forgot-password currently just simulates sending an email.

---

## 10. Data layer — everything is mock

| Domain                                                                                                                             | Mock source                  | Types                |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| Blog/news (public)                                                                                                                 | `lib/blog-data.ts`           | in-file              |
| Sliders, posts, categories, tags, media, programs, fee payments, fee modules, leads, applications, admin users, roles, permissions | `lib/admin/mock-data.ts`     | `lib/admin/types.ts` |
| Notifications                                                                                                                      | `lib/admin/notifications.ts` | in-file              |
| Activity log                                                                                                                       | `lib/admin/activity-data.ts` | in-file              |

Admin tables import these arrays into `useState` and mutate **in memory** — create/edit/delete work in the UI but **reset on refresh.** When wiring a backend, replace the `useState(mockArray)` seed with a fetch, and replace the local mutate calls with API calls. `lib/admin/types.ts` is your contract — align API responses to those types.

The public blog detail page (`app/news/[slug]`) and admin both have their own data sources today; consolidate when you add a CMS/DB.

---

## 11. Conventions & gotchas — **the stuff that will bite you**

1. **Next.js 16 dynamic route params are async.** In `[slug]`/`[id]` pages, `params` is a `Promise`:

   ```tsx
   export default async function Page({
     params,
   }: {
     params: Promise<{ slug: string }>;
   }) {
     const { slug } = await params;
   }
   ```

   (Client component admin detail pages use the `useParams()` hook instead.)

2. **`useSearchParams()` must be inside `<Suspense>`** or the production build fails ("missing-suspense-with-csr-bailout"). Pattern: split the hook into an inner component, wrap it in `<Suspense>`, and add `export const dynamic = "force-dynamic"` at the top of the page. See `app/thank-you/page.tsx` and `app/admin/login/page.tsx`. **`force-dynamic` alone is NOT enough — you need the Suspense boundary.**

3. **Outline button hover** — fixed in `components/ui/button.tsx`. Don't reintroduce `hover:text-accent-foreground` on the outline variant; it makes custom-colored text invisible on hover.

4. **Custom dialog headers** — pass `showCloseButton={false}` to `DialogContent` if you render your own close button, or you get two.

5. **Images are unoptimized** (`next.config.mjs`) and many use remote Unsplash URLs / `unoptimized` prop. That's intentional for now. When adding `next/image` with remote hosts you don't need to configure `remotePatterns` because optimization is off — but revisit this for production performance.

6. **`typescript.ignoreBuildErrors: true`** — the build won't fail on type errors. **Do not rely on this.** Run `npx tsc --noEmit` yourself before pushing. There are 1–2 known pre-existing type errors in `app/admissions/payment/page.tsx` and `app/online-fee-payment/page.tsx` (unrelated to admin work) — don't let them mask new ones.

7. **Tailwind v4 `@theme` changes need a dev-server restart** to take effect.

8. **No shared public layout** — public pages each render `<SiteHeader/>`/`<SiteFooter/>` themselves. Admin pages get chrome from `(panel)/layout.tsx`. Don't add header/footer to admin or sidebar to public.

9. **Forms don't validate server-side or persist.** Submit = redirect. Keep that in mind when testing "did it save" — it didn't.

---

## 12. Production-readiness checklist (what's mocked → needs real wiring)

- [ ] **Auth**: replace demo cookie auth with real sessions; hash passwords; validate token in middleware; implement real forgot-password email.
- [ ] **Database/API**: back every `lib/admin/*` mock with real endpoints; keep `types.ts` as the contract.
- [ ] **Lead forms**: actually POST submissions (homepage, BSc, GNM, contact, ProspectusDialog) before redirecting to `/thank-you`.
- [ ] **Prospectus**: send the real PDF by email; replace math CAPTCHA with reCAPTCHA/Turnstile + server verification.
- [ ] **Payments**: wire Razorpay (keys live in the settings screen UI but aren't used); real order creation + webhook at `/api/webhooks/razorpay`; generate real receipts (currently a print modal).
- [ ] **Notifications/SMTP/SMS**: connect SMTP + chosen SMS provider; the settings UIs only simulate "test" success.
- [ ] **Activity log + notifications**: emit real events from server actions instead of static arrays.
- [ ] **Env vars in Vercel**: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_SECRET` (+ future DB/payment/SMTP/SMS secrets).
- [ ] **Re-enable type checking** (`ignoreBuildErrors`) once the pre-existing errors are fixed.
- [ ] **Images**: reconsider `unoptimized` and move off Unsplash hotlinks for production.

---

## 13. Deployment

- Push to `main` on `github.com/mukundkvt/hcne-homepage-ui` → Vercel auto-deploys.
- Build command: `next build` (Turbopack). `vercel.json` pins it.
- Commit messages on this project end with a `Co-Authored-By` trailer; PR bodies note generation. Branch off `main` for non-trivial work.
- Before pushing: `npx tsc --noEmit` (because the build ignores type errors) and a local `npm run build` to catch Suspense/prerender issues that only surface in production builds.

---

_Questions this doc didn't answer? Ask the Tech Lead and then add the answer here._
