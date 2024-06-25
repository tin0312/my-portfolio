import express, { Router } from "express";
import serverless from "serverless-http";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import "dotenv/config";

//Initialize express app and router for netlify serverless function to be redirected to
const app = express();
const router = Router();

// use middleware to parse form input content
app.use(bodyParser.urlencoded({ extended: true }));
// handle submit contact form route
router.post("/contact", async (req, res) => {
  const { email, textarea } = res.body;
  if (!email || !textarea) {
    return res.status(400).json({ error: "Email and message required!" });
  }

  // create a Nodemailer using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  //define email option
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "Someone reached out!",
    text: `Hi Nhat Truong, you have receieved a new message in your portfolio website from ${email}:\n\n${textarea}`,
  };
  //send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send Email!" });
  }
});

// attach router to app
app.use("/.netlify/function", router);

export const handler = serverless(app);
