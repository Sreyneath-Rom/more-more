// src/components/ui/Checkbox.tsx
"use client";

import { MouseEvent } from "react";

type CheckboxProps = {
  checked: boolean;
  /**
   * Called when the checkbox is clicked.
   * We pass the event so consumers can call e.stopPropagation() if needed.
   */
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <button
      type="button" // Good practice for buttons that aren't submitting forms
      onClick={onChange}
      className={`
        w-5 h-5 rounded-md border flex items-center justify-center transition-colors
        ${checked ? "bg-black border-black" : "bg-white border-gray-300 hover:border-gray-400"}
      `}
    >
      {checked && <span className="w-2.5 h-2.5 bg-white rounded-sm" />}
    </button>
  );
}