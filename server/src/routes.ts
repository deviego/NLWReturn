import express from 'express'
import { nodemailerMail } from '../smtp/nodemailer/nodemailer-mail';

import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase} from './services/submitFeedbackServices';

export const routes = express.Router()


routes.post("/feedback", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new nodemailerMail()
    
    const submitFeedbckUsecase = new SubmitFeedbackUseCase (
      prismaFeedbackRepository, 
      nodemailerMailAdapter
    )
  
      await submitFeedbckUsecase.execute({
        type,
        comment,
        screenshot,

      })
  
  
    return res.status(201).send();
  });
  