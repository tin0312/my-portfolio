import nodemailer from "nodemailer";
import "dotenv/config";

// Define the handler function for the Netlify serverless function
export async function handler(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const { email, textarea } = JSON.parse(event.body);
  if (!email || !textarea) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email and message required!" }),
    };
  }

  // Create a Nodemailer transporter using SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: "Someone reached out!",
    text: `Hi Nhat Truong, you have received a new message on your portfolio website from ${email}:\n\n${textarea}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent!" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send Email!" }),
    };
  }
}
