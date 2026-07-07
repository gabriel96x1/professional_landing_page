import type { ReactNode } from "react";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";

const mountedRoots: Array<{ container: HTMLDivElement; root: Root }> = [];

export async function render(ui: ReactNode) {
  const container = document.createElement("div");
  const root = createRoot(container);

  document.body.append(container);

  await act(async () => {
    root.render(ui);
  });

  mountedRoots.push({ container, root });

  return container;
}

export async function cleanup() {
  await act(async () => {
    for (const { root } of mountedRoots) {
      root.unmount();
    }
  });

  for (const { container } of mountedRoots) {
    container.remove();
  }

  mountedRoots.length = 0;
}
