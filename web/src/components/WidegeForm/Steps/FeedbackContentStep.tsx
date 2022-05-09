import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes} from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps { 
    feedbackType: feedbackType;
    onFeedbackRestartRequest : () => void;
}

export function FeedbackContentStep({feedbackType, onFeedbackRestartRequest}: FeedbackContentStepProps){
    const feedBackTypeInfo = feedbackTypes[feedbackType]
    return (
        <>
          <header>
          <button
            onClick={onFeedbackRestartRequest}
            type="button"
            className="top-5 left-3 absolute text-zinc-400 hover:text-zinc-100 "> 
            <ArrowLeft weight="bold" className="w-4 h-4"/>
          </button>

            <span className="text-xl  leading-6 flex items-center gap-2">
                <img src={feedBackTypeInfo.image.source} alt={feedBackTypeInfo.image.alt} className="w-6 h-6" />
                {feedBackTypeInfo.title}
            </span>

    
            <CloseButton />
          </header>
    
          <div className=" flex py-8 gap-2 w-full">

          </div>
        </>
      );
}