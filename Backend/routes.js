import express from "express";

const app = express();

app.get("/todos", (req, res) => {});

app.post("/addtodo", (req, res) => {});

app.put("/updatetodos", (req, res) => {});

app.delete("/deletetodos", (req, res) => {});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
