"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

// ─── Themed Toast ────────────────────────────────────────────
function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    const original = window.alert;
    window.alert = (msg: string) => {
      const isError =
        typeof msg === "string" &&
        (msg.toLowerCase().includes("failed") || msg.toLowerCase().includes("error"));
      setToast({ message: String(msg), type: isError ? "error" : "success" });
    };
    return () => {
      window.alert = original;
    };
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);
  

  return (
    <>
      {children}

      {/* Toast overlay */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
        {toast && (
          <div
            className={[
              "pointer-events-auto flex items-start gap-3 rounded-2xl border px-4 py-3.5 shadow-lg w-full max-w-sm transition-all duration-300",
              toast.type === "success"
                ? "bg-white border-amber-200 shadow-amber-100"
                : "bg-white border-red-200 shadow-red-100",
            ].join(" ")}
            style={{ animation: "toastSlideIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards" }}
          >
            {/* Icon */}
            <div
              className={[
                "shrink-0 flex items-center justify-center w-9 h-9 rounded-xl mt-0.5",
                toast.type === "success" ? "bg-amber-100" : "bg-red-100",
              ].join(" ")}
            >
              {toast.type === "success" ? (
                <svg className="w-4.5 h-4.5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4.5 h-4.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376a12 12 0 1020.817 0M12 15.75h.007v.008H12v-.008z" />
                </svg>
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col flex-1 min-w-0 pt-0.5">
              <span
                className={[
                  "text-xs font-bold uppercase tracking-wider",
                  toast.type === "success" ? "text-amber-600" : "text-red-600",
                ].join(" ")}
              >
                {toast.type === "success" ? "Success" : "Error"}
              </span>
              <span className="text-sm text-gray-600 mt-0.5 leading-snug">{toast.message}</span>
            </div>

            {/* Close ✕ */}
            <button
              className="shrink-0 text-gray-300 hover:text-gray-500 transition-colors duration-150 mt-0.5 pointer-events-auto"
              onClick={() => setToast(null)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Keyframe injected via style tag */}
      <style>{`
        @keyframes toastSlideIn {
          0% { opacity: 0; transform: translateY(12px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
}

// ─── StepReviewSubmit ────────────────────────────────────────

interface Props {
  formData: any;
}

export default function StepReviewSubmit({ formData }: Props) {
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      
      const res = await fetch("http://localhost:5000/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Submission failed");
      }
      alert("Requirement posted successfully!");
      setTimeout(() => router.push("/"), 1500);
      console.log("Saved Requirement:", data);
    } catch (error) {
      console.error(error);
      alert("Failed to submit requirement");
    }
  };

  // Shared row style
  const Row = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-baseline justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
      <span className="text-sm text-gray-700 font-medium text-right max-w-[60%] truncate">{value}</span>
    </div>
  );

  // Section card
  const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
      <div className="flex items-center gap-2.5 mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-amber-100 text-amber-500">
          {icon}
        </div>
        <span className="text-sm font-semibold text-gray-700">{title}</span>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );

  const calIcon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
  const personIcon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
  const detailIcon = (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  );

  return (
    <ToastProvider>
      <div className="min-h-full bg-amber-50 px-4 py-6 flex flex-col items-center">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-amber-100 p-6 sm:p-8">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 mb-3">
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">Review Your Requirement</h2>
            <p className="text-sm text-gray-400 mt-1">Everything look good? Submit when ready</p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-3 mb-6">

            {/* Event Details */}
            <Section title="Event Details" icon={calIcon}>
              <Row label="Name" value={formData.eventDetails.eventName} />
              <Row label="Type" value={formData.eventDetails.eventType} />
              <Row label="Date" value={formData.eventDetails.eventDate} />
              <Row label="Location" value={formData.eventDetails.location} />
              {formData.eventDetails.venue && <Row label="Venue" value={formData.eventDetails.venue} />}
            </Section>

            {/* Hire Type */}
            <Section title="Hire Type" icon={personIcon}>
              <div className="py-1">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full capitalize">
                  {formData.hireType}
                </span>
              </div>
            </Section>

            {/* Role-specific details */}
            <Section title="Role Details" icon={detailIcon}>
              {formData.hireType === "planner" && (
                <>
                  <Row label="Budget" value={formData.plannerDetails.budgetRange} />
                  <Row label="Scope" value={formData.plannerDetails.planningScope} />
                </>
              )}
              {formData.hireType === "performer" && (
                <>
                  <Row label="Performer Type" value={formData.performerDetails.performerType} />
                  <Row label="Genre" value={formData.performerDetails.genre} />
                  <Row label="Duration" value={formData.performerDetails.duration} />
                </>
              )}
              {formData.hireType === "crew" && (
                <>
                  <Row label="Crew Type" value={formData.crewDetails.crewType} />
                  <Row label="People Needed" value={formData.crewDetails.numberOfPeople} />
                  {formData.crewDetails.equipmentRequired && (
                    <Row label="Equipment" value={formData.crewDetails.equipmentRequired} />
                  )}
                </>
              )}
            </Section>
          </div>

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-semibold px-6 py-3.5 shadow-sm shadow-amber-200 transition-all duration-200"
          >
            Submit Requirement
          </button>
        </div>
      </div>
    </ToastProvider>
  );
}