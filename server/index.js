//CLI: npm install express body-parser mongoose --save
const express = require("express");
const mongoose = require("mongoose");
const MyConstants = require("./utils/MyConstants");
const Models = require("./models/Models");
const app = express();
const PORT = process.env.PORT || 3000;

// Connect DB
mongoose
  .connect(
    `mongodb+srv://${MyConstants.DB_USER}:${MyConstants.DB_PASS}@${MyConstants.DB_SERVER}/${MyConstants.DB_DATABASE}`,
  )
  .then(async () => {
    console.log("Connected to MongoDB");
    // Tạo default admin nếu chưa có
    const adminCount = await Models.Admin.countDocuments();
    if (adminCount === 0) {
      const admin = new Models.Admin({
        username: "admin",
        password: "admin123",
      });
      await admin.save();
      console.log("Default admin created: username=admin, password=admin123");
    } else {
      console.log("Admin users already exist");
    }
  })
  .catch((err) => console.error("DB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
// middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
// apis
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// apis
app.use("/api/customer", require("./api/customer.js"));
app.use("/api/admin", require("./api/admin.js"));

const path = require("path");
app.use(
  "/admin",
  express.static(path.resolve(__dirname, "../client-admin/build")),
);
app.get("admin/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client-admin/build", "index.html"));
});
app.use(
  "/",
  express.static(path.resolve(__dirname, "../client-customer/build")),
);
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../client-customer/build", "index.html"),
  );
});
