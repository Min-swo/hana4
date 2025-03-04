import express from "express";
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get("/hello/:id", (req, res) => {
  const { id } = req.params;
  const { q } = req.query;
  res.send({ message: "Ok", id, q });
});

let USERS = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
];

app.get("/users", (req, res) => {
  res.send(USERS);
});

app.post("/users", (req, res) => {
  console.log("body>>", req.body);
  const { name } = req.body;
  const id = Math.max(...USERS.map(({ id }) => id)) + 1;
  USERS.push({ id, name });
  res.status(200).send({ id, message: "OK" });
});

app.patch("/users/:userId", (req, res) => {
  const { userId } = req.params;
  const user = USERS.find(({ id }) => id === +userId);
  if (!user) {
    return res.status(400).send({ message: "Not Found User" });
  }
  user.name = req.body.name;
  res.send({ message: "OK" });
});

app.delete("/users/:userId", (req, res) => {
  const { userId } = req.params;
  USERS = USERS.filter(({ id }) => id !== +userId);
  res.send({ message: "OK" });
});

app.listen(3500, () => {
  console.log("Server started 3500 port...");
});
