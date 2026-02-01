"use client";

import { useState } from "react";
import StepEventDetails from "./components/StepEventDetails";
import StepHireType from "./components/StepHireType";
import StepRoleDetails from "./components/StepRoleDetails";
import StepReviewSubmit from "./components/StepReviewSubmit";

export default function PostRequirementPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    eventDetails: {
      eventName: "",
      eventType: "",
      eventDate: "",
      location: "",
      venue: "",
    },
    hireType: "",
    plannerDetails: {
      budgetRange: "",
      planningScope: "",
    },
    performerDetails: {
      performerType: "",
      genre: "",
      duration: "",
    },
    crewDetails: {
      crewType: "",
      numberOfPeople: "",
      equipmentRequired: "",
    },
  });

  const steps = ["Event Details", "Hire Type", "Role Details", "Review"];

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center px-4 py-8">

      {/* Page header */}
      <div className="w-full max-w-lg text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Post a Requirement</h1>
        <p className="text-sm text-gray-400 mt-1">Find the perfect team for your event</p>
      </div>

      {/* Step progress bar */}
      <div className="w-full max-w-lg mb-6">
        {/* Labels */}
        <div className="flex justify-between mb-2 px-0.5">
          {steps.map((label, i) => (
            <span
              key={label}
              className={[
                "text-xs font-semibold tracking-wider uppercase transition-colors duration-300",
                i + 1 === currentStep ? "text-amber-600" : i + 1 < currentStep ? "text-amber-400" : "text-gray-300",
              ].join(" ")}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Track */}
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => {
            const stepNum = i + 1;
            const isComplete = stepNum < currentStep;
            const isActive = stepNum === currentStep;
            return (
              <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-200">
                <div
                  className={[
                    "h-full rounded-full transition-all duration-500 ease-out",
                    isComplete ? "bg-amber-400 w-full" : isActive ? "bg-amber-400 w-full" : "w-0 bg-amber-400",
                  ].join(" ")}
                />
              </div>
            );
          })}
        </div>

        {/* Step counter pill */}
        <div className="flex justify-center mt-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            Step {currentStep} of 4
          </span>
        </div>
      </div>

      {/* Step content — each child already renders its own card */}
      <div className="w-full max-w-lg">
        {currentStep === 1 && (
          <StepEventDetails
            eventDetails={formData.eventDetails}
            setFormData={setFormData}
          />
        )}

        {currentStep === 2 && (
          <StepHireType
            hireType={formData.hireType}
            setFormData={setFormData}
          />
        )}

        {currentStep === 3 && (
          <StepRoleDetails
            hireType={formData.hireType}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {currentStep === 4 && (
          <StepReviewSubmit formData={formData} />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="w-full max-w-lg flex items-center justify-between mt-5 px-1">
        {/* Back */}
        {currentStep > 1 ? (
          <button
            onClick={() => setCurrentStep((s) => s - 1)}
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <div /> /* spacer to keep Next right-aligned on step 1 */
        )}

        {/* Next */}
        {currentStep < 4 && (
          <button
            onClick={() => setCurrentStep((s) => s + 1)}
            disabled={currentStep === 2 && !formData.hireType}
            className={[
              "flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200",
              currentStep === 2 && !formData.hireType
                ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
                : "bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-amber-200 hover:shadow-md",
            ].join(" ")}
          >
            Next
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}