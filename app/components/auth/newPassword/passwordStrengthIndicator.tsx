"use client";

interface PasswordStrengthIndicatorProps {
  password: string;
}

function getStrength(password: string) {
  const checks = {
    length: password.length >= 8,
    number: /\d/.test(password),
    special: /[^a-zA-Z0-9]/.test(password),
    uppercase: /[A-Z]/.test(password),
  };
  const score = Object.values(checks).filter(Boolean).length;
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  return { checks, score, label: labels[score] || "" };
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const { checks, score, label } = getStrength(password);

  const strengthColors = ["", "bg-red-500", "bg-orange-400", "bg-yellow-400", "bg-[#0d59f2]"];
  const labelColors = ["", "text-red-400", "text-orange-400", "text-yellow-400", "text-[#b5c4ff]"];

  if (!password) return null;

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          Strength
        </span>
        <span className={`text-[10px] font-bold uppercase tracking-widest ${labelColors[score]}`}>
          {label}
        </span>
      </div>

      {/* Bar */}
      <div className="flex gap-1 h-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 rounded-full transition-all duration-300 ${
              i <= score ? strengthColors[score] : "bg-slate-700"
            }`}
          />
        ))}
      </div>

      {/* Checklist */}
      <ul className="grid grid-cols-2 gap-y-2">
        {[
          { key: "length", label: "8+ characters" },
          { key: "number", label: "One number" },
          { key: "special", label: "Special character" },
          { key: "uppercase", label: "Uppercase letter" },
        ].map(({ key, label }) => {
          const passed = checks[key as keyof typeof checks];
          return (
            <li key={key} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400">
              {passed ? (
                <svg className="size-3.5 text-[#b5c4ff] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              ) : (
                <svg className="size-3.5 text-slate-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              )}
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}