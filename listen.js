const app = require("./app");
const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  if (err) console.log(err);
  console.log("listening...");
});
