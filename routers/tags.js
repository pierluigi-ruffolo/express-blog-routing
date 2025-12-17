/* import { tags } from "../arrayPosts"; */
import express from "express";
import { tags } from "../arrayPosts.js";
const router = express.Router();

/* INDEX */
router.get("/", (req, res) => {
  const response = {
    tagsLength: tags.length,
    tags: tags,
  };
  res.json(response);
});
/* SHOW */
router.get("/:id", (req, res) => {});
/* STORE */
router.post("/", (req, res) => {});
/* UPDATE */
router.put("/:id", (req, res) => {});
/* MODIFY */
router.patch("/:id", (req, res) => {});
/* DESTROY */
router.delete("/:id", (req, res) => {});

export default router;
