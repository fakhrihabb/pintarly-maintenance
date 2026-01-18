# Pintarly Design System Guide

## 1. Design Principles & System Architecture

- **Token-Based Design:** Do not use hardcoded hex values. Utilize the global CSS variables/Design Tokens defined in the system (e.g., `var(--blue-500)`, `var(--white-arctic)`).
- **Clean & Ethereal Clarity:** 60% of the UI must utilize `var(--white-arctic)` (#F9FAFB) as the primary canvas to provide a professional, airy workspace.
- **Personalized Depth:** 30% of the UI uses "Mesh" grainy gradients. Combine `var(--blue-500)` and `var(--green-500)` with a 10-15% noise texture overlay.
- **Action-Oriented Fun:** 10% of the UI is reserved for `var(--yellow-500)` (#FFE16F) for primary CTAs and gamification elements.

---

## 2. Color Library Reference

Map these values to the global CSS variable system:

| Shade          | Blue (Sky)  | Yellow (Butter) | Green (Chartreuse) | Neutrals                     |
| :------------- | :---------- | :-------------- | :----------------- | :--------------------------- |
| **50**         | #f5fcff     | #fffcf1         | #fafef2            | **#F9FAFB (White Arctic)**   |
| **100**        | #dff6fe     | #fff6d2         | #f1fad6            | #f3f4f6                      |
| **200**        | #d0f2fe     | #fff1bd         | #eaf8c2            | #e5e7eb                      |
| **300**        | #baecfe     | #ffeb9f         | #e0f5a7            | #d1d5db                      |
| **400**        | #ade8fd     | #ffe78c         | #daf395            | #9ca3af                      |
| **500 (Main)** | **#98e2fd** | **#ffe16f**     | **#d1f07b**        | #6b7280                      |
| **600**        | #8acee6     | #e8cd65         | #beda70            | #4b5563                      |
| **700**        | #6ca0b4     | #b5a04f         | #94aa57            | #374151                      |
| **800**        | #547c8b     | #8c7c3d         | #738444            | #1f2937                      |
| **900**        | #405f6a     | #6b5f2f         | #586534            | **#1A1A1B (Black Charcoal)** |

---

## 3. Secondary Palette Logic (Interaction States)

Utilize the color library following these functional rules:

- **Lighter Tints (-50 to -200):** Use for subtle card backgrounds, input field fills, or soft glowing effects behind icons.
- **Main Tones (-500):** Standard use for brand icons, primary button backgrounds, and active navigation states.
- **Darker Shades (-700 to -900):** Reserved for hover states, active button presses, or high-contrast data visualization.

---

## 4. Typography Scale (Mobile-First)

- **H1 (Hero):** `Outfit` | Bold | 28px | Line-Height: 34px | Color: `var(--black-charcoal)`.
- **H2 (Section):** `Outfit` | Semi-Bold | 22px | Line-Height: 26px | Color: `var(--black-charcoal)`.
- **Body (Main):** `Plus Jakarta Sans` | Regular | 16px | Line-Height: 24px | Color: `var(--black-charcoal)`.
- **Secondary:** `Plus Jakarta Sans` | Size: 14px | Color: `var(--neutral-600)` (#4B5563).
- **Button Text:** `Outfit` | Semi-Bold | 16px | Color: `var(--black-charcoal)`.

---

## 5. Key Component Implementation

- **Cards/Containers:** Background: #FFFFFF | Border: 1px solid `var(--neutral-200)` | Radius: `24px` (mobile: `16px-24px`).
- **Primary Buttons:** Background: `var(--yellow-500)` | Text: `var(--black-charcoal)` | Hover: `var(--yellow-700)` | Radius: 100px.
- **Grainy Texture:** Apply noise filter exclusively to mesh gradients to maintain the "Tactile Digital" brand pillar.

---

## 6. Texture Implementation (Grainy Gradient)

- **Global Grain:** Implement a fixed-position overlay `div` with `pointer-events: none`.
- **Blend Mode:** Use `mix-blend-mode: soft-light` with an opacity between `0.05` and `0.08`.
- **Gradient Blobs:** For the 30% secondary colors (#98E2FD and #D1F07B), use high-blur CSS backgrounds or Mesh Gradients to achieve the "Ethereal" effect.
- **Text Clarity:** Ensure all Deep Charcoal (#1A1A1B) text is rendered on a layer above the grain or ensures the grain opacity is low enough to not affect WCAG legibility.

---

## 7. Responsiveness Guide

### 7.1 Breakpoints

Use Tailwind CSS responsive prefixes:

| Prefix | Min Width | Usage                    |
| :----- | :-------- | :----------------------- |
| (none) | 0px       | Mobile-first base styles |
| `sm:`  | 640px     | Large phones             |
| `md:`  | 768px     | Tablets                  |
| `lg:`  | 1024px    | Desktop                  |
| `xl:`  | 1280px    | Large desktop            |

### 7.2 Spacing & Layout

Apply compact spacing on mobile, expand on larger screens:

| Property          | Mobile           | Desktop (md:)                                |
| :---------------- | :--------------- | :------------------------------------------- |
| Container padding | `px-4`           | `sm:px-6 lg:px-8`                            |
| Section gap       | `space-y-6`      | `md:space-y-10`                              |
| Top padding       | `pt-6`           | `md:pt-12`                                   |
| Bottom padding    | `pb-12`          | `md:pb-20`                                   |
| Card padding      | `p-4`            | `md:p-6` or `md:p-8`                         |
| Card radius       | `rounded-[24px]` | `md:rounded-[32px]`                          |
| Item gap          | `gap-2`          | `md:gap-4`                                   |
| Item gap          | `gap-2`          | `md:gap-4`                                   |
| **Max Width**     | `w-full`         | `max-w-7xl` (App) / `max-w-[1920px]` (Admin) |

### 7.3 Section Header Pattern

Use consistent section headers across pages:

```tsx
<h2 className="text-base md:text-lg font-semibold text-[var(--black-charcoal)] flex items-center">
  <Icon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
  Section Title
</h2>
```

Pattern for section with card content:

```tsx
<div className="space-y-3 md:space-y-6">
  {/* Section Header - Outside card */}
  <h2 className="text-base md:text-lg font-semibold text-[var(--black-charcoal)] flex items-center">
    <Icon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
    Section Title
  </h2>

  {/* Card Content */}
  <div className="bg-white rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-[var(--neutral-200)] shadow-sm">
    {/* Card contents */}
  </div>
</div>
```

### 7.4 Grid Patterns

| Component       | Mobile Grid   | Tablet+ Grid                    |
| :-------------- | :------------ | :------------------------------ |
| Quick Nav cards | `grid-cols-2` | `lg:grid-cols-4`                |
| Activity items  | `grid-cols-1` | `md:grid-cols-2`                |
| Feature cards   | `grid-cols-1` | `md:grid-cols-2 lg:grid-cols-3` |

### 7.5 Typography Scaling

| Element         | Mobile                 | Desktop                            |
| :-------------- | :--------------------- | :--------------------------------- |
| Section heading | `text-base`            | `md:text-lg`                       |
| Card title      | `text-sm`              | `md:text-base`                     |
| Body text       | `text-xs`              | `md:text-sm`                       |
| Icon size       | `w-4 h-4` or `w-5 h-5` | `md:w-5 md:h-5` or `md:w-6 md:h-6` |

### 7.6 Mobile-Specific Rules

- **Hide non-essential elements:** Use `hidden md:block` for secondary info (descriptions, chevrons)
- **Compact interactions:** Reduce touch target padding while maintaining 44px minimum
- **Simplify visuals:** Hide decorative elements on small screens when needed
- **Stack layouts:** Use vertical flex/stack on mobile, horizontal on desktop

---

## 8. Icons & Mascot Usage

- **Lucide Icons:** Use for most UI icons (consistent stroke width, clean aesthetic)
- **Aily Mascot:** Use for personalized sections like "Aktivitas Terakhir" - located at `/images/logo/aily.svg`
- **Icon sizing:** Follow responsive pattern `w-4 h-4 md:w-5 md:h-5`

---

## 9. Modal Component Behavior

Ensure all modals follow this consistent styling and behavior:

- **Backdrop:** `bg-black/50 backdrop-blur-sm z-50`
- **Container:** `bg-white rounded-2xl shadow-xl`
- **Animation:** `animate-in zoom-in-95 fade-in duration-200`
- **Close Behavior:** Clicking the backdrop must close the modal.
- **Paywall Integration:** Paywalls should **replace** the current modal (close current -> open paywall -> on paywall close -> re-open current). Do not stack modals.

---

## 10. Skeleton Loader Component

Use the `Skeleton` component for all loading states to maintain consistency.

### 10.1 Import & Basic Usage

```tsx
import { Skeleton } from "@/components/ui/Skeleton";

// Basic usage - just specify dimensions
<Skeleton className="h-6 w-32" />

// With border radius
<Skeleton className="h-11 w-full rounded-xl" />

// Circle (for avatars)
<Skeleton className="w-24 h-24 rounded-full" />

// With custom background (for buttons)
<Skeleton className="h-11 w-40 rounded-full bg-[var(--yellow-200)]" />
```

### 10.2 Common Skeleton Patterns

| Element         | Skeleton Classes                      |
| :-------------- | :------------------------------------ |
| Page title (H1) | `h-9 w-48 rounded-lg`                 |
| Subtitle        | `h-5 w-72`                            |
| Section title   | `h-6 w-32`                            |
| Input label     | `h-4 w-28`                            |
| Input field     | `h-11 w-full rounded-xl`              |
| Button          | `h-11 w-40 rounded-full`              |
| Avatar          | `w-24 h-24 rounded-full`              |
| Sidebar tab     | `h-12 w-full rounded-xl`              |
| Card            | Match actual card dimensions & radius |

### 10.3 Skeleton Layout Pattern

Match the skeleton structure to the actual content layout:

```tsx
if (loading) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 md:pt-12 sm:px-6 lg:px-8 space-y-6 md:space-y-10">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-48 rounded-lg" />
        <Skeleton className="h-5 w-72" />
      </div>

      {/* Content Card Skeleton */}
      <div className="bg-white rounded-[var(--card-radius)] border border-[var(--neutral-200)] p-6 space-y-4">
        <Skeleton className="h-6 w-32" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-11 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}
```

### 10.4 Best Practices

- **Match layout:** Skeleton should mirror the actual content structure
- **Use consistent spacing:** Apply same `space-y-*` and `gap-*` as actual content
- **Container padding:** Match container padding between skeleton and content
- **Default rounded:** Component uses `rounded-md` by default, override with specific radius as needed
- **Dark mode support:** Component automatically handles dark mode via CSS variables

### 10.5 loading.tsx vs Inline Skeleton

| Approach        | Use Case                                         | Location                                |
| :-------------- | :----------------------------------------------- | :-------------------------------------- |
| `loading.tsx`   | Server Components, route-level suspense          | `app/{route}/loading.tsx`               |
| Inline skeleton | Client Components with `useEffect` data fetching | Inside component's `if (loading)` block |

**loading.tsx** (Next.js Suspense boundary):

```
app/(protected)/tryout/
├── loading.tsx   ← Auto-shown during server component fetch
└── page.tsx      ← Server component
```

**Inline skeleton** (Client component loading state):

```tsx
// page.tsx - Client Component
"use client";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* fetch data */
  }, []);

  if (loading) {
    return <SettingsSkeleton />; // Inline skeleton
  }

  return <ActualContent />;
}
```
