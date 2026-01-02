// =======================
// IMPORTS
// =======================
const express = require("express");
const cors = require("cors");

const app = express();

// =======================
// MIDDLEWARE
// =======================
app.use(cors());            // 👈 CORS ADDED HERE
app.use(express.json());    // middleware to read JSON body

// =======================
// In-memory data (database)
// =======================
let users = [
  {
    id: 1,
    name: "Naveen",
    age: 25,
    company: "TCS",
    role: "Employee"
  },
  {
    id: 2,
    name: "Kumar",
    age: 40,
    company: "Infosys",
    role: "Manager"
  },
  {
    id: 3,
    name: "Rajesh",
    age: 45,
    company: "IBM",
    role: "Assistant Manager"
  }
];

// Next ID
let nextId = 4;

// =======================
// TEST ROUTE
// =======================
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀");
});

// =======================
// READ (GET all users)
// =======================
app.get("/users", (req, res) => {
  res.json(users);
});

// =======================
// CREATE (POST user)
// =======================
app.post("/users", (req, res) => {
  const newUser = {
    id: nextId++,
    name: req.body.name,
    age: req.body.age,
    company: req.body.company,
    role: req.body.role
  };

  users.push(newUser);

  // Return UPDATED users list
  res.status(201).json(users);
});

// =======================
// UPDATE (PUT user)
// =======================
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  user.age = req.body.age;
  user.company = req.body.company;
  user.role = req.body.role;

  // Return UPDATED users list
  res.json(users);
});

// =======================
// DELETE (DELETE user)
// =======================
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter(u => u.id !== userId);

  // Return UPDATED users list
  res.json(users);
});

// =======================
// START SERVER
// =======================
app.listen(3000, () => {
  console.log("✅ Server running on http://localhost:3000");
});
