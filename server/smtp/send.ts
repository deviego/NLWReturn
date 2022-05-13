export interface sendMailData {
    subject: string,
    body: string


}

export interface MailAdapter{
    sendMail: () => void
}