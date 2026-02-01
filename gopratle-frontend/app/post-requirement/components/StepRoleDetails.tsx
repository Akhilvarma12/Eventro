// ─── StepRoleDetails ─────────────────────────────────────────

interface Props {
  hireType: string;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepRoleDetails({
  hireType,
  formData,
  setFormData,
}: Props) {
  const handlePlannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      plannerDetails: {
        ...prev.plannerDetails,
        [name]: value,
      },
    }));
  };

  const handlePerformerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      performerDetails: {
        ...prev.performerDetails,
        [name]: value,
      },
    }));
  };

  const handleCrewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      crewDetails: {
        ...prev.crewDetails,
        [name]: value,
      },
    }));
  };

  const inputCls = "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent focus:bg-white";
  const labelCls = "text-xs font-semibold text-gray-500 uppercase tracking-wider";

  // Icon + colour keyed to hire type
  const headerMeta = {
    planner: {
      color: "text-amber-500",
      bg: "bg-amber-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    performer: {
      color: "text-amber-500",
      bg: "bg-amber-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-2v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-2c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
    },
    crew: {
      color: "text-amber-500",
      bg: "bg-amber-100",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  };

  const meta = headerMeta[hireType as keyof typeof headerMeta];

  return (
    <div className="min-h-full bg-amber-50 px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-amber-100 p-6 sm:p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${meta?.bg || "bg-amber-100"} ${meta?.color || "text-amber-500"} mb-3`}>
            {meta?.icon}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">Requirement Details</h2>
          <p className="text-sm text-gray-400 mt-1">
            {hireType === "planner" && "Tell us about your planning needs"}
            {hireType === "performer" && "Describe the performance you're looking for"}
            {hireType === "crew" && "Specify your crew requirements"}
          </p>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4">

          {/* PLANNER */}
          {hireType === "planner" && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Budget Range</label>
                <input
                  name="budgetRange"
                  placeholder="e.g. ₹50,000 – ₹1,00,000"
                  value={formData.plannerDetails.budgetRange}
                  onChange={handlePlannerChange}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Planning Scope</label>
                <input
                  name="planningScope"
                  placeholder="Full / Partial"
                  value={formData.plannerDetails.planningScope}
                  onChange={handlePlannerChange}
                  className={inputCls}
                />
              </div>
            </>
          )}

          {/* PERFORMER */}
          {hireType === "performer" && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Performer Type</label>
                <input
                  name="performerType"
                  placeholder="DJ, Singer, Band…"
                  value={formData.performerDetails.performerType}
                  onChange={handlePerformerChange}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Genre</label>
                <input
                  name="genre"
                  placeholder="e.g. Jazz, Hip-hop, Classical"
                  value={formData.performerDetails.genre}
                  onChange={handlePerformerChange}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Performance Duration</label>
                <input
                  name="duration"
                  placeholder="e.g. 2 hours"
                  value={formData.performerDetails.duration}
                  onChange={handlePerformerChange}
                  className={inputCls}
                />
              </div>
            </>
          )}

          {/* CREW */}
          {hireType === "crew" && (
            <>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Crew Type</label>
                <input
                  name="crewType"
                  placeholder="Sound, Lighting, Camera…"
                  value={formData.crewDetails.crewType}
                  onChange={handleCrewChange}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Number of People</label>
                <input
                  type="number"
                  name="numberOfPeople"
                  placeholder="e.g. 4"
                  value={formData.crewDetails.numberOfPeople}
                  onChange={handleCrewChange}
                  className={inputCls}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <label className={labelCls}>Equipment Required</label>
                  <span className="text-xs font-medium text-amber-400 bg-amber-50 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <input
                  name="equipmentRequired"
                  placeholder="e.g. PA system, fog machine"
                  value={formData.crewDetails.equipmentRequired}
                  onChange={handleCrewChange}
                  className={inputCls}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}