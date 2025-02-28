import express, { Router } from "express";
import serverless from "serverless-http";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import "dotenv/config";

// Initialize express app and router for netlify serverless function to be redirected to
const app = express();
const router = Router();

// Use middleware to parse form input content
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle submit contact form route
router.post("/contact", async (req, res) => {
  const { email, textarea } = req.body;
  if (!email || !textarea) {
    return res.status(400).json({ error: "Email and message required!" });
  }

  // Create a Nodemailer using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "Someone reached out!",
    text: `Hi Nhat Truong, you have received a new message in your portfolio website from ${email}:\n\n${textarea}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent!" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send Email!" });
  }
});

// Attach router to app
app.use("/api", router);

// Export handler to be used by Netlify
export const handler = serverless(app);
