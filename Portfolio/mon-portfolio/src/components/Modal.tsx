import type { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
  primaryLabel = "OK",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  primaryLabel?: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-6">
      <button
        aria-label="Fermer"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50"
          >
            Fermer
          </button>
        </div>

        <div className="mt-4 text-gray-700 leading-relaxed">{children}</div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-black text-white px-5 py-2 hover:opacity-80 transition"
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}