"use client";

import { useRef, KeyboardEvent, ChangeEvent } from "react";

interface OtpInputProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export function OtpInput({ value, onChange }: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    const newOtp = [...value];
    newOtp[index] = val;
    onChange(newOtp);
    if (val && index < 5) refs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newOtp = [...value];
    pasted.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    onChange(newOtp);
    refs.current[Math.min(pasted.length, 5)]?.focus();
  };

  return (
    <div className="flex justify-between gap-2 md:gap-3">
      {value.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            refs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          aria-label={`Digit ${index + 1}`}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-14 md:w-14 md:h-16 text-center text-xl font-bold bg-[#1e293b] border border-slate-700 text-white rounded-lg focus:outline-none focus:border-border transition-all"
          style={{
            boxShadow: digit ? "0 0 20px rgba(13, 89, 242, 0.2)" : undefined,
          }}
        />
      ))}
    </div>
  );
}
