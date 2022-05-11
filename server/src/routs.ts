import express from 'express'
import nodemailer from 'nodemailer'

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4314c7dfdaa24d",
      pass: "0b6951cbe9f75c",
    },
  });

routes.post("/feedback", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const feedback = 
  
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
  