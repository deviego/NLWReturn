import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../icons/bug.svg'
import ideaImageUrl from '../../icons/idea.svg'
import thoughtImageUrl from '../../icons/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";



 export const feedbackTypes = {
    BUG:{
        title:"Problema",
        image:{
            source: bugImageUrl,
            alt:'Imagem de um inseto'            
        }

    },
    IDEA:{
        title:"Ideia",
        image:{
            source:ideaImageUrl,
            alt:'imagem de uma lampada '
        }

    },
    OTHER:{
        title:"Outro",
        image:{
            source:thoughtImageUrl,
            alt:'imagem de um balão de pensamento'
        }
    },   
};


export type feedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

    function handleRestartFeedback(){
        setFeedbackType(null)
    }

    return  (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"> 
            

            {!feedbackType ?(
                <FeedbackTypeStep onFeedbackTypechange={setFeedbackType}/>
             
            ) : (
               <FeedbackContentStep feedbackType={feedbackType}
                onFeedbackRestartRequest={handleRestartFeedback}
               />
            ) }

            <footer className="text-xs text-neutral-400">Feito com ♥ pelo <a className="underline underline-offset-2" href="https://github.com/deviego">Deviego</a></footer>
         </div>
    );
}