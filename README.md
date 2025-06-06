<h1 align="center">
  <img src="https://i.ibb.co/q31b51rD/logo.png" alt="Moot's Logo">
</h1>
<h1 align="center">Moot's – Backend API</h1>
<h3 align="center">Strapi-powered backend for managing moods, stats and user entries</h3>

This is the backend service for the **Moot's** mood-tracking app. Built using **Strapi** and **SQLite**, it provides flexible, fast, and customizable content APIs for the frontend to consume.

---

## ⚙️ Tech Stack

- Strapi v4
- SQLite (default dev database)
- Node.js
- REST API (auto-generated by Strapi)

---

## 📁 Features

- 🗃️ Mood entries management (CRUD)
- 📆 Daily mood logging
- 📊 Statistics endpoints
- 🧠 Admin panel for content management

---

## 🛠 Installation

```bash
# Clone the repo
git clone https://github.com/Moot-s/Moot-s-Back-End

# Navigate to project
cd moots-backend

# Install dependencies
npm install

# Start Strapi server (dev mode)
npm run dev
```

---

## 🔐 Admin Access

Once running, access the admin dashboard at:

```
http://localhost:1337/admin
```

You’ll be prompted to create the first admin user.

---

## 🔌 API Endpoints

Strapi auto-generates RESTful endpoints for each content type. This package includes Swagger installed:

```
http://localhost:1337/documentation/
```

---

## 👤 Author

**Unai González**

- 🌐 [unaigonzalez.es](https://unaigonzalez.es)
- 🐦 [@unaiitxuu](https://twitter.com/unaiitxuu)
- 💻 [GitHub](https://github.com/unaigonzalezz)

---

⭐️ Feel free to fork and contribute!