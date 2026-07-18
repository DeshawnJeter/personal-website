export const CURSOR_STATE_EVENT = "cathedral:cursor-state";
export const CURSOR_TOGGLE_EVENT = "cathedral:cursor-toggle";

export type TransientCursorState = "loading" | "success" | "error";

export type CursorStateEventDetail = {
  state: TransientCursorState;
  durationMs: number;
};

export function triggerCursorState(
  state: TransientCursorState,
  durationMs = 1200,
): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<CursorStateEventDetail>(CURSOR_STATE_EVENT, {
      detail: { state, durationMs },
    }),
  );
}

export function toggleCursorEngine(enabled: boolean): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<{ enabled: boolean }>(CURSOR_TOGGLE_EVENT, {
      detail: { enabled },
    }),
  );
}
