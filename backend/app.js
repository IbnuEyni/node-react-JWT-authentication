// app.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const authenticateJWT = require("./middleware/authenticate");
const cors = require("cors");

dotenv.config();
connectDB();

const corsOptions = {
  origin: true, // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true // Allow credentials (if needed)
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Protected Route (example)
app.get("/profile", authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.sendStatus(404);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
