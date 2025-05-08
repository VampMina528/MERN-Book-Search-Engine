# 📚 MERN Book Search Engine

## Description

This full-stack MERN application allows users to search for books using the Google Books API, create an account, log in, and save books to their personal collection. It features a React frontend powered by Apollo Client, a GraphQL/Apollo Server backend, JWT authentication, and MongoDB Atlas for persistent user data.

---

## ✅ Features Completed

* [x] Apollo Server with GraphQL queries and mutations
* [x] JWT authentication middleware adapted for GraphQL
* [x] Apollo Client with `useQuery` and `useMutation`
* [x] Google Books API integration for book searches
* [x] User signup and login via GraphQL
* [x] Save and remove books from user profiles
* [x] Deployed backend and frontend on Render
* [x] Responsive UI styled with React Bootstrap

---

## 🚀 Live Application

🌐 **Frontend & GraphQL API**:
[https://googlebooks-backend.onrender.com](https://googlebooks-backend.onrender.com)

---

## 💻 GitHub Repository

🔗 [https://github.com/VampMina528/MERN-Book-Search-Engine](https://github.com/VampMina528/MERN-Book-Search-Engine)

---

## 🛠️ Technologies Used

* MongoDB + Mongoose
* Express.js
* React (Vite + TypeScript)
* Node.js
* Apollo Server + Apollo Client
* GraphQL
* JWT Authentication
* Google Books API
* React Bootstrap

---

## 📁 Folder Structure

```
client/             # React frontend
server/
  └── src/
      ├── models/          # Mongoose User & Book models
      ├── schemas/         # GraphQL typeDefs and resolvers
      ├── services/        # JWT authentication middleware
      └── server.ts        # Main Express/Apollo server
```

---

## ⚙️ Local Installation

### 1. Clone the repository

```bash
git clone https://github.com/VampMina528/MERN-Book-Search-Engine
cd MERN-Book-Search-Engine
```

### 2. Install all dependencies

```bash
npm run install-all
```

### 3. Set environment variables

Create a `.env` file inside the `server` directory:

```env
JWT_SECRET_KEY=your_secret_key
MONGODB_URI=your_mongodb_connection
```

### 4. Run the app locally

```bash
npm run develop
```

---

## 🚀 Render Deployment

Live backend:
[https://googlebooks-backend.onrender.com](https://googlebooks-backend.onrender.com)

---

## 🎥 Walkthrough Video

[📺 Watch the walkthrough here](https://www.instagram.com/reel/DJYWj6Mt82x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==)
---

## 🗼️ Screenshots

![Search View](./assets/Screenshot%20search%20for%20books.jpg)
![Saved Books View](Screenshot%202025-05-07%20222057.png)

---

## 🧑‍🏫 Credits

University of Kansas Full-Stack Coding Bootcamp

---

## 🙌 Contributors

* Mina Draper-Hammond –
GitHub Link for MERN Book Search Engine: https://github.com/VampMina528/MERN-Book-Search-Engine

---

## 📄 License

This project is licensed under the MIT License.
