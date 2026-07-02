# Task Manager

A full-stack Task Manager application built using React.js, Node.js, Express.js, MongoDB, and JWT Authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- Create Task
- View All Tasks
- Update Task
- Delete Task
- Swagger API Documentation
- Logout

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Swagger UI

---

## Installation

### Clone Repository

```bash
https://github.com/Riyaz01devloper/task_manager.git
cd task-manager
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register User |
| POST | `/api/v1/auth/login` | Login User |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tasks` | Get All Tasks |
| POST | `/api/v1/tasks` | Create Task |
| PUT | `/api/v1/tasks/:id` | Update Task |
| DELETE | `/api/v1/tasks/:id` | Delete Task |

---

## API Documentation

```
http://localhost:5000/api-docs
```

---

## Author

Riyaz Malik
