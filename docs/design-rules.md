# Design Rules

## Theme

Site colors live in `app/theme.css`. To edit the visual identity, change the
semantic tokens and avoid replacing colors directly in components.

## Light Palette

- Background: `#FAFAF5`
- Primary text / name: `#4F6817`
- Secondary text / body: `#5C5B4C`
- Eyebrow / label: `#7C8132`
- Filled tags: background `#ECFC93`, text `#4F6817`
- Outline tag: border `#7C8132`

## Dark Palette

- Background: `#4F6817`
- Primary text / name: `#FAFAF5`
- Secondary text / body: `#D7DCC5`
- Eyebrow / label / line / link: `#ECFC93`
- Filled tags: background `#ECFC93`, text `#4F6817`
- Outline tag: border and text `#ECFC93`

## Component Usage

- Use semantic theme variables, not loose hexadecimal values in JSX.
- Use Tailwind's canonical CSS variable shorthand for theme tokens:
  `text-(--theme-text-secondary)`, not `text-[var(--theme-text-secondary)]`.
- Apply the same shorthand for other utilities: `bg-(--theme-background)`,
  `border-(--theme-border)`, `hover:bg-(--theme-surface-muted)`, and
  `placeholder:text-(--theme-text-secondary)`.
- The global background should use `--theme-background`.
- Headings, the name, and primary links should use `--theme-text-primary`.
- Body copy and secondary text should use `--theme-text-secondary`.
- Eyebrows, labels, lines, and highlighted links should use `--theme-label`.
- Filled tags should use `--theme-tag-background` and `--theme-tag-text`.
- Outline tags should use `--theme-tag-outline`.
- Soft surfaces and borders should derive from the palette in `app/theme.css`.

## Spacing And Sizing

- Use Tailwind's standard scale for layout measurements instead of raw CSS
  units. Prefer utilities like `p-4`, `px-6`, `gap-8`, `space-y-10`,
  `max-w-6xl`, `w-full`, `min-h-screen`, `rounded-lg`, and `text-base`.
- Avoid `rem`, `px`, `em`, percentages, viewport units, and arbitrary Tailwind
  values such as `p-[1.5rem]`, `mt-[32px]`, `text-[1rem]`, or
  `max-w-[72rem]` when a standard Tailwind utility expresses the same intent.
- Use responsive Tailwind variants with standard values for breakpoint-specific
  adjustments, for example `px-4 sm:px-6 lg:px-8` and
  `grid-cols-1 md:grid-cols-2`.
- Arbitrary values are allowed only when the project needs a measurement that
  Tailwind does not provide semantically, such as a browser safe-area inset,
  a third-party embed constraint, or a one-off calculation tied to runtime
  variables.
- If a repeated custom measurement becomes necessary, add or document a named
  token instead of scattering arbitrary values through components.

## Interaction

- The theme switcher should be available in the global navigation.
- The selected theme should persist across future visits.
- Hover and focus states should keep clear contrast in both themes.
