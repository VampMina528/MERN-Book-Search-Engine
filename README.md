# MERN Book Search Engine

## 📚 Description

This full-stack MERN application allows users to search for books using the Google Books API, create an account, log in, and save books to their personal collection. It demonstrates the integration of a React frontend with a GraphQL/Apollo backend, authentication using JWT, and persistent user data using MongoDB.

## ✅ Completed Requirements Checklist

-

## 🚀 Deployed Application

**Frontend & GraphQL API**: [https://googlebooks-backend.onrender.com](https://googlebooks-backend.onrender.com)

## 💻 GitHub Repository

[https://github.com/VampMina528/MERN-Book-Search-Engine](https://github.com/VampMina528/MERN-Book-Search-Engine)

## 🔧 Technologies Used

- MongoDB + Mongoose
- Express.js
- React + Vite + TypeScript
- Node.js
- Apollo Server + Client
- GraphQL
- JWT Authentication
- Google Books API
- React Bootstrap

## 📂 Folder Structure

```
client/           # Frontend React app
server/           # Backend Node/Express/GraphQL API
  └── src/
        ├── models/        # Mongoose models (User, Book)
        ├── schemas/       # GraphQL typeDefs & resolvers
        ├── services/      # Authentication middleware
        └── server.ts     # Main server file
```

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/VampMina528/MERN-Book-Search-Engine
cd MERN-Book-Search-Engine
```

2. Install dependencies:

```bash
npm run install-all
```

3. Set environment variables: Create a `.env` file in the `server` directory:

```env
JWT_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection
```

4. Run the app locally:

```bash
npm run develop
```
## Screenshot
![Screenshot](<assets/Screenshot search for books.jpg>)

## 🤝 Credits

University of Kansas

## 📄 License

This project is licensed under the MIT License.

