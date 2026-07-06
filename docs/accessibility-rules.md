# Accessibility Rules

This project enforces WCAG 2.2 Level AA for all user-facing UI, content, and
interaction changes. Treat accessibility regressions as blocking defects.

Reference standard:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- How to Meet WCAG 2.2: https://www.w3.org/WAI/WCAG22/quickref/

## Baseline

- Meet every applicable WCAG 2.2 A and AA success criterion before shipping.
- Do not introduce patterns that can only pass at AAA by ignoring A or AA
  requirements.
- Automated checks are required where available, but they are not enough.
  Keyboard, focus, semantics, reflow, and screen-reader-oriented checks must be
  reviewed manually for changed flows.
- If a requested design conflicts with WCAG AA, change the implementation or
  raise the conflict before coding the inaccessible version.

## Semantics

- Use native HTML elements for their intended roles: links for navigation,
  buttons for actions, headings for document structure, lists for grouped list
  content, and form controls for input.
- Add ARIA only when native semantics cannot express the interaction. Invalid,
  redundant, or misleading ARIA is a regression.
- Every interactive control must have an accessible name that matches or
  includes the visible label when there is one.
- Icon-only controls require a localized accessible label from `messages/es.json`
  and `messages/en.json`.
- Images require meaningful `alt` text unless they are purely decorative. For
  decorative images, use empty alt text and keep them out of the accessibility
  tree.

## Keyboard And Focus

- All functionality must work with keyboard alone.
- Preserve a logical focus order that follows the visual and reading order.
- Never create a keyboard trap. Modals, menus, popovers, and overlays must have
  predictable open, close, escape, and focus-return behavior.
- Focus indicators must be visible in both light and dark themes and must not
  rely on color alone.
- Sticky headers, overlays, and scroll positioning must not obscure focused
  controls or anchored section headings.

## Visual Accessibility

- Text and essential UI indicators must meet WCAG AA contrast:
  - Normal text: at least 4.5:1.
  - Large text: at least 3:1.
  - Non-text UI components and meaningful graphics: at least 3:1.
- Do not use color as the only way to communicate state, selection, errors, or
  required information.
- Text must support browser zoom and responsive resizing without clipping,
  overlap, horizontal scrolling, or loss of content.
- Pages and components must reflow cleanly down to common mobile widths.
- Motion, animation, and auto-updating content must respect reduced-motion user
  preferences and must not flash more than allowed by WCAG.

## Forms And Errors

- Every form control needs a visible label or a visible instruction with a
  programmatic association.
- Required fields, validation rules, and errors must be communicated in text and
  programmatically associated with the relevant controls.
- Error messages must identify the problem and provide a useful correction when
  possible.
- Do not depend on placeholder text as the only label or instruction.
- Contact and conversion flows must remain complete without pointer-only
  gestures, drag-only actions, or timed interactions.

## Content And Localization

- Keep accessibility labels, form labels, button text, error text, metadata, and
  image alternatives localized in `messages/es.json` and `messages/en.json`.
- Each page must expose the correct document language through the locale layout.
- Headings must form a meaningful outline. Do not skip levels for visual size;
  use CSS classes for styling instead.
- Link text must describe the destination or action in context. Avoid ambiguous
  labels such as "click here", "more", or "read more" unless surrounding
  programmatic context makes the purpose clear.

## Validation

For UI changes, run the normal project validation:

```bash
bun run lint
bun run build
```

When the change affects interaction, navigation, layout, forms, media, or
theme colors, also perform a manual accessibility pass:

- Navigate the changed flow with keyboard only.
- Confirm visible focus, focus order, escape/close behavior, and focus return.
- Check light and dark theme contrast for changed text, controls, borders, and
  focus indicators.
- Test responsive reflow at mobile width and with browser zoom.
- Confirm localized accessible names and labels in both `/es` and `/en` when
  the changed UI is localized.
- Check that images, icons, status messages, and errors have appropriate text
  alternatives or live semantics.

If an automated accessibility tool is added later, document the command here and
make it part of the required validation for UI changes.
