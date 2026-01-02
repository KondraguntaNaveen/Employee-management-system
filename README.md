 # Employee Management System

A full-stack CRUD web application developed using Node.js, Express.js, and Vanilla JavaScript.
This project allows users to Create, Read, Update, and Delete (CRUD) employee records with real-time updates between frontend and backend.

# 📌 Features

Add new employees

View all employees

Update employee details

Delete employee records

Frontend and backend integration

RESTful API design

In-memory data storage (for learning purposes)

# 🛠️ Technologies Used
Backend

Node.js

Express.js

CORS

JavaScript

Frontend

HTML

CSS

JavaScript (Fetch API)

Tools

VS Code

Postman / Thunder Client

GitHub

# 📁 Project Structure
employee-management-system
│
├── server.js
├── package.json
├── node_modules
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

# 🚀 How to Run the Project
1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd employee-management-system

2️⃣ Install Dependencies
npm install

3️⃣ Start the Backend Server
node server.js


Backend will run at:

http://localhost:3000

4️⃣ Run the Frontend

Open frontend/index.html in a browser
OR

Use Live Server extension in VS Code

# 🔗 API Endpoints
Method	Endpoint	Description
GET	/users	Fetch all employees
POST	/users	Add new employee
PUT	/users/:id	Update employee
DELETE	/users/:id	Delete employee
# 🧪 Sample POST Request
{
  "name": "Rahul",
  "age": 23,
  "company": "Wipro",
  "role": "HR"
}

# 🧠 How It Works

Frontend sends HTTP requests using Fetch API

Backend processes requests using Express.js

Employee data is stored in an in-memory array

Any CRUD operation updates the data immediately

GET request always returns the latest updated data


# 📈 Future Enhancements

MongoDB database integration

Authentication & Authorization

Role-based access control

React frontend

Deployment to cloud platforms

