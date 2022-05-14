import { MailAdapter } from "../../smtp/send";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";


interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase{
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ){
    }
    async execute(request: SubmitFeedbackUseCaseRequest ){
    
        const { type, comment, screenshot } = request
        await this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        })
        
        await this.mailAdapter.sendMail({
            subject: 'Novo feddback',
            body:[
                `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do Feedback: ${type}</p>`,
                `<p> Comentário: ${comment}</p>`,
                `</div>`,
              ].join("\n"),
        })
    }

}