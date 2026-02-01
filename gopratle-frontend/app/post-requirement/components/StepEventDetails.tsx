interface Props {
  eventDetails: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepEventDetails({ eventDetails, setFormData }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      eventDetails: {
        ...prev.eventDetails,
        [name]: value,
      },
    }));
  };

  return (
    <div className="min-h-full bg-amber-50 px-4 py-6 flex flex-col items-center">
      {/* Card wrapper */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-sm border border-amber-100 p-6 sm:p-8">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 mb-3">
            <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">Event Details</h2>
          <p className="text-sm text-gray-400 mt-1">Fill in the information below to get started</p>
        </div>

        {/* Form fields */}
        <div className="flex flex-col gap-4">

          {/* Event Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Name</label>
            <input
              name="eventName"
              placeholder="e.g. Summer Gala"
              value={eventDetails.eventName}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent focus:bg-white"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Type</label>
            <input
              name="eventType"
              placeholder="e.g. Conference, Wedding"
              value={eventDetails.eventType}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent focus:bg-white"
            />
          </div>

          {/* Event Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Date</label>
            <input
              name="eventDate"
              placeholder="MM / DD / YYYY"
              value={eventDetails.eventDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent focus:bg-white"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
            <input
              name="location"
              placeholder="City, Country"
              value={eventDetails.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent focus:bg-white"
            />
          </div>

          {/* Venue (Optional) */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Venue</label>
              <span className="text-xs font-medium text-amber-400 bg-amber-50 px-2 py-0.5 rounded-full">Optional</span>
            </div>
            <input
              name="venue"
              placeholder="e.g. Grand Ballroom"
              value={eventDetails.venue}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent focus:bg-white"
            />
          </div>

        </div>
      </div>
    </div>
  );
}