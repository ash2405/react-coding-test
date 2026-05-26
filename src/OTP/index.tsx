import { useEffect, useRef, useState } from "react";

const OTP_LENGTH = 6;

export const OTP = () => {
  const [otp, setOtp] = useState<string[]>(
    Array(OTP_LENGTH).fill("")
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const randomOtp =
      Math.floor(Math.random() * 900000) + 100000;

    console.log("Generated OTP:", randomOtp);
  }, []);

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const key = e.key;

    const updatedOtp = [...otp];

    // Handle numbers
    if (/^\d$/.test(key)) {
      updatedOtp[index] = key;
      setOtp(updatedOtp);

      // Move focus to next input
      if (index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    // Handle backspace
    if (key === "Backspace") {
      updatedOtp[index] = "";
      setOtp(updatedOtp);

      // Move back if current already empty
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    // Handle paste (Ctrl + V)
    if (e.ctrlKey && key.toLowerCase() === "v") {
      navigator.clipboard.readText().then((text) => {
        const pasted = text
          .replace(/\D/g, "")
          .slice(0, OTP_LENGTH)
          .split("");

        if (!pasted.length) return;

        const filledOtp = Array(OTP_LENGTH)
          .fill("")
          .map((_, i) => pasted[i] || "");

        setOtp(filledOtp);

        const focusIndex =
          pasted.length >= OTP_LENGTH
            ? OTP_LENGTH - 1
            : pasted.length;

        inputRefs.current[focusIndex]?.focus();
      });
    }
  };

  return (
    <div className="grid place-content-center h-screen gap-4">
      <h1 className="text-2xl font-bold text-center">
        OTP Verification
      </h1>

      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            value={digit}
            maxLength={1}
            onKeyUp={(e) => handleKeyUp(e, index)}
            className="w-12 h-12 border-2 rounded-md text-center text-xl focus:outline-none focus:border-blue-500"
          />
        ))}
      </div>

      <p className="text-center">
        OTP: {otp.join("")}
      </p>
    </div>
  );
};