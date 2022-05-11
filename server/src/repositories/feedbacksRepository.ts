export interface FeedbackcreateData{
    type: string,
    comment: string,
    screenshot?:string
}

export interface FeedbacksRepository{
    create: (data:FeedbackcreateData) => Promise<void>

}