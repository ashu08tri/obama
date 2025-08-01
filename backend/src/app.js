const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;
const dotenv = require("dotenv");
dotenv.config();
const contactRoute = require("./routes/contact.route");
const scheduleRoute = require("./routes/schedule.route");
const volunteerRoute = require("./routes/volunteer.route");
app.use(cors({ origin: ["https://ptshekhardixit.com","https://obama-clone.netlify.app", 'http://localhost:5173'], credentials: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.json("done");
})

app.use("/contact",contactRoute);
app.use("/schedule",scheduleRoute);
app.use("/volunteer", volunteerRoute);


app.listen(port,()=>{
    console.log(`listning on port ${port}`);
})
