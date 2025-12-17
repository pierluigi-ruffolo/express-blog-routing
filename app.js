import express from "express";
import routerPosts from "./routers/posts.js";
import routerTags from "./routers/tags.js";
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use("/posts", routerPosts);
app.use("/tags", routerTags);
app.listen(port, () => {
  console.log("Server avviato sulla porta" + " " + port);
});
