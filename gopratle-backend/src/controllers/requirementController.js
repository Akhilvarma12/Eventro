import Requirement from "../models/Requirement.js";

export const createRequirement = async (req, res) => {
  try {
    const { eventDetails, hireType, plannerDetails, performerDetails, crewDetails } = req.body;

    if (!eventDetails || !hireType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const requirement = new Requirement({
      eventDetails,
      hireType,
      plannerDetails: hireType === "planner" ? plannerDetails : undefined,
      performerDetails: hireType === "performer" ? performerDetails : undefined,
      crewDetails: hireType === "crew" ? crewDetails : undefined,
    });

    const savedRequirement = await requirement.save();

    res.status(201).json({
      message: "Requirement created successfully",
      data: savedRequirement,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
