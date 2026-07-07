import { act } from "react";

export async function interact(action: () => Promise<void> | void) {
  await act(async () => {
    await action();
  });
}
