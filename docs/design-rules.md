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

## Interaction

- The theme switcher should be available in the global navigation.
- The selected theme should persist across future visits.
- Hover and focus states should keep clear contrast in both themes.
