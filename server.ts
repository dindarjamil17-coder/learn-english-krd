import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";

async function startServer() {
  const app = express();
  const PORT = 3000;

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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started successfully on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

startServer();
