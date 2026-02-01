import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema(
  {
    eventDetails: {
      eventName: {
        type: String,
        required: true,
      },
      eventType: {
        type: String,
        required: true,
      },
      eventDate: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      venue: {
        type: String,
      },
    },

    hireType: {
      type: String,
      enum: ["planner", "performer", "crew"],
      required: true,
    },

    plannerDetails: {
      budgetRange: String,
      planningScope: String,
    },

    performerDetails: {
      performerType: String,
      genre: String,
      duration: String,
    },

    crewDetails: {
      crewType: String,
      numberOfPeople: Number,
      equipmentRequired: String,
    },
  },
  {
    timestamps: true,
  }
);

const Requirement = mongoose.model("Requirement", requirementSchema);

export default Requirement;
