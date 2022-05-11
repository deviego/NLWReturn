// imports
import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";

let app = express();
app.use(express.json());
// code

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4314c7dfdaa24d",
    pass: "0b6951cbe9f75c",
  },
});

// Rotas

app.post("/feedback", async (req, res) => {
  const { type, comment, screenshot } = req.body;
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  })

  await transport.sendMail({
    from: "Equipe Feeget <oi@feedget.com>",
    to: "Deviego <diegodomingues266@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do Feedback: ${type}</p>`,
      `<p> Comentário: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3000, () => console.log("server is running"));

// SQlite
//prisma