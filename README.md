# 🏨 Hostel Management System

A full-stack Hostel Management System built using:

- ⚛️ Frontend: React
- 🟢 Backend: Node.js + Express
- 🗄️ Database: MongoDB
- 🐳 Containerization: Docker & Docker Compose
- 🌐 Reverse Proxy: Nginx

---

## 📌 Features

- 👩‍🎓 Student Login
- 🧾 Submit Complaints
- 🛠️ Admin Dashboard
- 📊 Complaint Management
- 🔐 Authentication System

---

## 🏗️ Project Structure

```
hostel-management/
│
├── frontend/        # React frontend
├── backend/         # Node.js backend
├── nginx/           # Nginx configuration
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Installation (Without Docker)

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/hostelmanagement-.git
cd hostelmanagement-
```

### 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🐳 Run Using Docker (Recommended)

Make sure Docker is installed.

### 🔹 Build & Start Containers

```
docker compose up --build
```

### 🔹 Stop Containers

```
docker compose down
```

---

## 🌐 Application Ports

| Service   | Port |
|-----------|------|
| Frontend  | 80   |
| Backend   | 5000 |
| MongoDB   | 27017 |

---

## 🗄️ Environment Variables

Backend `.env` file:

```
PORT=5000
MONGO_URI=mongodb://mongo:27017/hostelops
```

---

## 🚀 Technologies Used

- React
- Node.js
- Express
- MongoDB
- Docker
- Nginx

---

## 👩‍💻 Author

Harshitha  
6th Semester Skill Lab Project

---

## 📜 License

This project is for educational purposes.
