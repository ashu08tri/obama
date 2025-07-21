import { useState, useEffect } from 'react';
import US_STATES from './state';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const areaOptions = ['Mentoring youth', 'Environmental work', 'Event assistance', 'Fundraising', 'Other'];
const availabilityOptions = ['Weekdays', 'Weekends', 'Mornings', 'Afternoons', 'Evenings'];
const volunteerTypes = ['One-time events', 'Weekly commitment', 'Monthly', 'On-call'];
const hearOptions = ['Social media', 'Word of mouth', 'Website', 'Event', 'Other'];

const VolunteerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    volunteeringAreas: [],
    otherArea: '',
    availability: '',
    preferredVolunteerType: '',
    skills: '',
    languages: '',
    additionalDetails: '',
    howDidYouHear: '',
    consent: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (Array.isArray(formData[name])) {
        const updated = checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value);
        setFormData((prev) => ({ ...prev, [name]: updated }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    try{
      await fetch(`${import.meta.env.VITE_API_URL}/volunteer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    alert('Your details were saved.');
    navigate('/invoced');
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <SEO title="Volunteer | Shekhar Dixit" description="Join the movement. Volunteer to support Shekhar Dixit's mission for social justice and farmers' rights." />
      <div className="bg-black min-h-screen py-10">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-white text-center">Volunteer Application Form</h1>
          <p className="text-white pb-10 text-center">
            Thank you for your interest in volunteering with us!
            Please fill out this form to join our mission and make a positive impact in the community.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-xl shadow-md">
            {/* Full Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1">Full Name</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="w-full">
                <label className="block mb-1">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
              </div>
            </div>

            {/* Phone & DOB */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block mb-1">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
              </div>
              <div className="w-full">
                <label className="block mb-1">Date of Birth</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" name="streetAddress" placeholder="Street Address" value={formData.streetAddress} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <select name="state" value={formData.state} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded">
                <option value="">Select State</option>
                {US_STATES.map((state) => (
                  <option key={state.value} value={state.value}>{state.label}</option>
                ))}
              </select>
              <input type="text" name="zip" placeholder="Pin Code" value={formData.zip} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded" />
            </div>

            {/* Areas of Interest */}
            <fieldset className="border border-gray-300 rounded-lg p-4">
              <legend className="mb-2 font-medium">Preferred Volunteering Areas</legend>
              <div className="grid grid-cols-2 gap-3">
                {areaOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="volunteeringAreas"
                      value={option}
                      checked={formData.volunteeringAreas.includes(option)}
                      onChange={handleChange}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
              {formData.volunteeringAreas.includes('Other') && (
                <input
                  type="text"
                  name="otherArea"
                  placeholder="Please specify"
                  value={formData.otherArea}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-300 p-2 rounded"
                />
              )}
            </fieldset>

            {/* Availability & Type */}
            <div className="flex flex-col md:flex-row gap-4">
              <select name="availability" value={formData.availability} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded">
                <option value="">Select Availability</option>
                {availabilityOptions.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>

              <select name="preferredVolunteerType" value={formData.preferredVolunteerType} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded">
                <option value="">Preferred Volunteer Type</option>
                {volunteerTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Skills */}
            <textarea name="skills" value={formData.skills} onChange={handleChange} placeholder="Relevant Skills or Experience" className="w-full border border-gray-300 p-2 rounded" />

            {/* Languages */}
            <input type="text" name="languages" value={formData.languages} onChange={handleChange} placeholder="Languages Spoken" className="w-full border border-gray-300 p-2 rounded" />

            {/* Why Volunteer */}
            <textarea name="additionalDetails" value={formData.additionalDetails} onChange={handleChange} placeholder="Why do you want to volunteer with us?" className="w-full border border-gray-300 p-2 rounded" />

            {/* How Did You Hear */}
            <select name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded">
              <option value="">How did you hear about us?</option>
              {hearOptions.map((source) => (
                <option key={source} value={source}>{source}</option>
              ))}
            </select>

            {/* Consent */}
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
              <span>I agree to the terms and allow you to contact me.</span>
            </label>

            {/* Submit */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-semibold">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VolunteerSignup;
