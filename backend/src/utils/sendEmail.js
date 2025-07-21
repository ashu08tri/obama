const nodemailer = require("nodemailer");
// Setup transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const sendEmailforContactus = async (formData) => {
    let mailOptions = {
        from: formData.email,
        to: process.env.EMAIL_TO,
        subject: "New Message Submission",
        text: `Dear Dixit Support Team,

A new message has been submitted through the "Contact the Dixits" form. Below are the details:

Recipient: ${formData.recipient}
Prefix: ${formData.prefix}
First Name: ${formData.firstName}
Middle Name: ${formData.middleName}
Last Name: ${formData.lastName}
Suffix: ${formData.suffix}

Email: ${formData.email}
Phone: ${formData.phone}

Address:
Street: ${formData.street}
City: ${formData.city}
State: ${formData.state}
Country: ${formData.country}
Postal Code: ${formData.postalCode}

Message:
${formData.message}

Please review this message and take appropriate action.

Kind regards,  
Website Contact Form System`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("Error sending email:", error);
        }
        console.log("Email sent successfully:");
    });
};

const sendEmailForSchedule = async (formData) => {
    const mailOptions = {
        from: formData.contactEmail,
        to:  process.env.EMAIL_TO,
        subject: `New Schedule Request: ${formData.eventTitle}`,
        text: `Dear Admin,

A new schedule request has been submitted. Here are the details:

📌 Invitation For: ${formData.invitationFor}
🏢 Host Organization: ${formData.hostOrganization}
🔗 Website: ${formData.hostWebsite}

🏛️ Organization Description:
${formData.organizationDescription}

👤 Contact Name: ${formData.contactName}
✉️ Contact Email: ${formData.contactEmail}
📞 Contact Phone: ${formData.contactPhone}

📅 Event Title: ${formData.eventTitle}
🗓️ Event Date: ${formData.eventDate}
📰 Media Presence: ${formData.mediaPresence}

📍 Event Location: ${formData.eventLocation}
🛣️ Street: ${formData.street}
🏙️ City: ${formData.city}
🏞️ State: ${formData.state}
🌍 Country: ${formData.country}
📬 PIN Code: ${formData.postalCode}

🎯 Audience Description:
${formData.audienceDescription}

📝 Event Description:
${formData.eventDescription}

Please review this request and take appropriate action.

Kind regards,  
Schedule Submission System`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error("Error sending email:", error);
        }
        console.log("Email sent successfully:");
    });
};

const sendEmailForVolunteer = async (formData) => {
    const mailOptions = {
        from: formData.email,
        to:  process.env.EMAIL_TO,
        subject: `New Volunteer Submission: ${formData.fullName}`,
        text: `A new volunteer form was submitted:

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🎂 Date of Birth: ${formData.dob}

🏠 Address:
${formData.streetAddress}, ${formData.city}, ${formData.state} - ${formData.zip}

🤝 Volunteering Areas: ${formData.volunteeringAreas?.join(", ") || "N/A"}
📝 Other Area: ${formData.otherArea}
📅 Availability: ${formData.availability}
👥 Preferred Volunteer Type: ${formData.preferredVolunteerType}
🛠️ Skills: ${formData.skills}
🌐 Languages: ${formData.languages}
🧾 Additional Details: ${formData.additionalDetails}
📢 Heard About Us From: ${formData.howDidYouHear}

✅ Consent Given: ${formData.consent ? "Yes" : "No"}

-- End of Submission --`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.error("Error sending email:", err);
        }
        console.log("Volunteer email sent successfully.");
    });
};

module.exports = {
    sendEmailforContactus,
    sendEmailForSchedule,
    sendEmailForVolunteer,
}