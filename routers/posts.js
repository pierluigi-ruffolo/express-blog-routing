import express from "express";

const router = express.Router();

/* INDEX (tutti i post)*/
router.get("/", (req, res) => {
  res.send("tutti i post");
});

/* SHOW (singolo post)*/
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send("Restituirte Singolo post" + " " + id);
});

/* STORE (aggiungere un post)*/
router.post("/", (req, res) => {
  res.send("Aggiungere un post");
});

/* UPDATE (cambiare l'intero post) */
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send("cambiare l'intero post " + " " + id);
});

/* MODIFY (cambiare solo qualcosa del post) */
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send("cambiare qualcosa del post " + " " + id);
});

/* DESTROY (cancella post ) */
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send("eliminare post" + " " + id);
});

export default router;
