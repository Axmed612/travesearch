import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";
import { registerRoutes } from "./routes-simple";

const app = express();
const PORT = process.env.PORT || 5000;

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Railway production static file serving
function serveStaticForRailway(app: express.Express) {
  // Check for built frontend files in the correct Railway directory structure
  const possiblePaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "public"),
    path.resolve(__dirname, "..", "dist", "public"),
    path.resolve(__dirname, "public")
  ];
  
  let publicPath = null;
  
  for (const testPath of possiblePaths) {
    if (fs.existsSync(testPath) && fs.existsSync(path.join(testPath, "index.html"))) {
      publicPath = testPath;
      break;
    }
  }
  
  if (!publicPath) {
    console.error("No built frontend found. Available paths checked:", possiblePaths);
    throw new Error("Frontend build not found - run 'npm run build' first");
  }
  
  console.log(`Serving static files from: ${publicPath}`);
  
  // Serve static files
  app.use(express.static(publicPath));
  
  // Handle client-side routing - serve index.html for all non-API routes
  app.get("*", (req, res) => {
    if (req.path.startsWith("/api/")) {
      return res.status(404).json({ error: "API endpoint not found" });
    }
    res.sendFile(path.join(publicPath!, "index.html"));
  });
}

// Register API routes first
registerRoutes(app).then((server) => {
  // For Railway production deployment
  if (process.env.NODE_ENV === "production" || process.env.RAILWAY_ENVIRONMENT) {
    serveStaticForRailway(app);
  } else {
    // Development mode - this shouldn't run on Railway
    throw new Error("Use development server for local development");
  }

  const port = parseInt(PORT.toString(), 10);
  server.listen(port, "0.0.0.0", () => {
    console.log(`TraveSearch server running on port ${port}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Railway Environment: ${process.env.RAILWAY_ENVIRONMENT || "Not detected"}`);
  });
}).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});