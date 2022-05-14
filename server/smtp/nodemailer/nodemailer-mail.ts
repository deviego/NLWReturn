import nodemailer from 'nodemailer'
import { MailAdapter, sendMailData } from "../send";



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4314c7dfdaa24d",
      pass: "0b6951cbe9f75c",
    },
  });

  
export class nodemailerMail implements MailAdapter {
  async sendMail({subject, body}: sendMailData) {
    await transport.sendMail({
      from: "Equipe Feeget <oi@feedget.com>",
      to: "Deviego <diegodomingues266@gmail.com>",
      subject,
      html:body
    });
  }
}
