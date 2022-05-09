import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
 
interface FeedbackTypeStepProp {
  onFeedbackTypechange: (type: feedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypechange,
}: FeedbackTypeStepProp) {
  
  
  return (
    <>
      <header>             
        <span className="text-xl leading-6 ">Deixe seu Feedback</span>

        <CloseButton />
      </header>

      <div className=" flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none "
              onClick={() => onFeedbackTypechange(key as feedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );


}
