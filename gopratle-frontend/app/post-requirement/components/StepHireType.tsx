// ─── StepHireType ────────────────────────────────────────────

interface Props {
  hireType: string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

const HIRE_META = {
  planner: {
    label: "Planner",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    desc: "Full or partial event planning",
  },
  performer: {
    label: "Performer",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-2c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
      </svg>
    ),
    desc: "DJ, singer, band & more",
  },
  crew: {
    label: "Crew",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    desc: "Sound, lighting, camera & more",
  },
};

export default function StepHireType({ hireType, setFormData }: Props) {
  const selectType = (type: string) => {
    setFormData((prev: any) => ({
      ...prev,
      hireType: type,
    }));
  };

  return (
    <div className="min-h-full bg-amber-50 px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-amber-100 p-6 sm:p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 mb-3">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">Who do you want to hire?</h2>
          <p className="text-sm text-gray-400 mt-1">Select the role that fits your event</p>
        </div>

        {/* Hire type cards */}
        <div className="flex flex-col gap-3">
          {(["planner", "performer", "crew"] as const).map((type) => {
            const isActive = hireType === type;
            const meta = HIRE_META[type];
            return (
              <button
                key={type}
                onClick={() => selectType(type)}
                className={[
                  "w-full flex items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-200",
                  isActive
                    ? "bg-amber-50 border-amber-300 shadow-sm"
                    : "bg-gray-50 border-gray-200 hover:border-amber-200 hover:bg-amber-50/50",
                ].join(" ")}
              >
                {/* Icon circle */}
                <div
                  className={[
                    "shrink-0 flex items-center justify-center w-11 h-11 rounded-xl transition-colors duration-200",
                    isActive ? "bg-amber-100 text-amber-600" : "bg-white text-gray-400 border border-gray-200",
                  ].join(" ")}
                >
                  {meta.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className={["text-sm font-semibold transition-colors duration-200", isActive ? "text-amber-700" : "text-gray-700"].join(" ")}>
                    {meta.label}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">{meta.desc}</span>
                </div>

                {/* Check indicator */}
                <div className="ml-auto shrink-0">
                  <div
                    className={[
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                      isActive ? "border-amber-400 bg-amber-400" : "border-gray-300 bg-white",
                    ].join(" ")}
                  >
                    {isActive && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}