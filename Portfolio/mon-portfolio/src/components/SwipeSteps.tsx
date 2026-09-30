import { useRef, type ReactNode } from "react";

export default function SwipeSteps({ currentStep, totalSteps, onStepChange, children }: {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  children: ReactNode;
}) {
  const gesture = useRef<{ x: number; y: number; vertical: boolean } | null>(null);
  const suppressClickUntil = useRef(0);
  return <div className="touch-pan-y touch-pinch-zoom" data-swipe-steps
    onTouchStart={(event) => {
      gesture.current = null;
      if (event.touches.length !== 1) return;
      if ((event.target as HTMLElement).closest('a, button, input, textarea, select, [contenteditable], [role="slider"], [data-no-swipe]')) return;
      const touch = event.touches[0];
      gesture.current = { x: touch.clientX, y: touch.clientY, vertical: false };
    }}
    onTouchMove={(event) => {
      const start = gesture.current;
      if (!start) return;
      if (event.touches.length !== 1) { gesture.current = null; return; }
      const touch = event.touches[0];
      const dx = Math.abs(touch.clientX - start.x);
      const dy = Math.abs(touch.clientY - start.y);
      if (dy > 12 && dy > dx) start.vertical = true;
    }}
    onTouchCancel={() => { gesture.current = null; }}
    onTouchEnd={(event) => {
      const start = gesture.current;
      gesture.current = null;
      if (!start || start.vertical || event.touches.length || event.changedTouches.length !== 1) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
      suppressClickUntil.current = Date.now() + 400;
      const next = currentStep + (dx < 0 ? 1 : -1);
      if (next >= 0 && next < totalSteps) onStepChange(next);
    }}
    onClickCapture={(event) => {
      if (Date.now() < suppressClickUntil.current) { event.preventDefault(); event.stopPropagation(); }
    }}
  >{children}</div>;
}
