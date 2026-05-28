import {
  KeyboardEvent,
  ClipboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const OTP_LENGTH = 3;

export const OTP = () => {
  const initialOtp = useMemo(() => Array(OTP_LENGTH).fill(""), []);

  const [inputs, setInputs] = useState<string[]>(initialOtp);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
    inputRefs.current[index]?.select();
  };

  const updateOtp = (value: string, index: number) => {
    setInputs((prev) => {
      const updated = [...prev];
      updated[index] = value;

      return updated;
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const { key } = e;

    if (
      ["ArrowLeft", "ArrowRight", "Backspace"].includes(key) ||
      /^\d$/.test(key)
    ) {
      e.preventDefault();
    }

    if (/^\d$/.test(key)) {
      updateOtp(key, index);

      if (index < OTP_LENGTH - 1) {
        focusInput(index + 1);
      }

      return;
    }

    if (key === "Backspace") {
      setInputs((prev) => {
        const updated = [...prev];

        if (updated[index]) {
          updated[index] = "";
          return updated;
        }

        if (index > 0) {
          updated[index - 1] = "";
          focusInput(index - 1);
        }

        return updated;
      });

      return;
    }

    if (key === "ArrowLeft") {
      if (index > 0) {
        focusInput(index - 1);
      }

      return;
    }

    if (key === "ArrowRight") {
      if (index < OTP_LENGTH - 1) {
        focusInput(index + 1);
      }
    }
  };

  const otpValue = inputs.join("");

  return (
    <div className="grid h-screen place-content-center">
      <div className="flex gap-3">
        {inputs.map((item, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            aria-label={`OTP digit ${index + 1}`}
            maxLength={1}
            value={item}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="
              h-12
              w-12
              rounded-md
              border-2
              text-center
              text-xl
              outline-none
              transition-all
              focus:border-blue-600
            "
          />
        ))}
      </div>

      <p className="mt-5 text-center text-lg">OTP: {otpValue}</p>
    </div>
  );
};
