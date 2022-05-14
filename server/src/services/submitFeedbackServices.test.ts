import { SubmitFeedbackUseCase } from "./submitFeedbackServices"

describe('Subimit feedback', ( ) => {
    it('shoud be able to subimit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}, },
            {sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment'
        })).resolves.not.toThrow();
    })
})