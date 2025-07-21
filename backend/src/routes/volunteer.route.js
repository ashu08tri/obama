const express = require("express");
const Volunteer = require("../models/volunteer");
const main = require("../initdb/connectDb");
const { sendEmailForVolunteer } = require("../utils/sendEmail");

const volunteerRoute = express.Router();

volunteerRoute.post("/", async (req, res) => {
  try {
    main();
    const data = await Volunteer.create(req.body);
    await sendEmailForVolunteer(data);
    res.status(200).json({ message: "Volunteer data saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save volunteer data." });
  }
});

module.exports = volunteerRoute;
