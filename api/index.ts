import express from "express";
import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

const USERS_FILE = path.join(process.cwd(), "users.json");

// Helper to read users
const getUsers = () => {
  if (!fs.existsSync(USERS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
  } catch (e) {
    return [];
  }
};

// API Routes
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();
  const user = users.find((u: any) => u.username === username && u.password === password);

  if (user) {
    // Set a simple cookie for session
    res.cookie("auth_token", "logged_in_user_" + username, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });
    return res.json({ success: true, username });
  }

  res.status(401).json({ success: false, message: "ناڤ یان کۆد خەلەتە" });
});

app.get("/api/check-auth", (req, res) => {
  const token = req.cookies.auth_token;
  if (token && token.startsWith("logged_in_user_")) {
    const username = token.replace("logged_in_user_", "");
    return res.json({ authenticated: true, username });
  }
  res.json({ authenticated: false });
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.json({ success: true });
});

// For Vercel, we don't call app.listen()
// We export the app instead
export default app;
