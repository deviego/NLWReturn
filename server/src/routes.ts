import express from 'express'
import nodemailer from 'nodemailer'
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase} from './services/submitFeedbackServices';

export const routes = express.Router()


routes.post("/feedback", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const submitFeedbckUsecase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository
    )
  
      await submitFeedbckUsecase.execute({
        type,
        comment,
        screenshot,

      })
  
  
    return res.status(201).send();
  });
  