import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let reply = "Iron Lady offers programs focused on career growth, leadership, and confidence building.";

  if (userMessage.includes("career")) {
    reply = "I recommend the Career Growth Program, designed to help women advance professionally.";
  } else if (userMessage.includes("leadership")) {
    reply = "The Leadership Accelerator helps women build strong leadership skills.";
  } else if (userMessage.includes("confidence")) {
    reply = "Our Confidence Building Program supports personal growth and mindset development.";
  }

  res.json({ reply });
});

app.listen(5000, () => {
  console.log("Task 1 backend running on port 5000");
});
