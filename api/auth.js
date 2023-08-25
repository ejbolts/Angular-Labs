// auth.js

const users = [
  {
    username: "user1",
    birthdate: "01/01/1990",
    age: 30,
    email: "user1@example.com",
    password: "password123",
    valid: true,
  },
  // ... add more users as needed
];

module.exports = function (app, path) {
  app.post("/api/auth", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Don't send password back
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } else {
      res.status(400).json({ error: "Invalid login credentials" });
    }
  });
};
