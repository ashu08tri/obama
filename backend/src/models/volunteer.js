const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dob: String,
  streetAddress: String,
  city: String,
  state: String,
  zip: String,
  volunteeringAreas: [String],
  otherArea: String,
  availability: String,
  preferredVolunteerType: String,
  skills: String,
  languages: String,
  additionalDetails: String,
  howDidYouHear: String,
  consent: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Volunteer", volunteerSchema);
