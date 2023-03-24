// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json(
      [{ id: 0, title: "JavaScript", content: "Lenguaje de programacion" },
      { id: 1, title: "React", content: "Libreria para JavaScript" },
      { id: 2, title: "NextJs", content: "Framework sobre React" }]
    );
}
