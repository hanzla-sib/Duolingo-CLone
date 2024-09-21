import Image from "next/image"

type Props={
    question:string
}

export const QuestionBubble=({question}:Props)=>{
    return(
        <div className="flex items-center justify-center">
            <Image src={question} alt="question" width={100} height={100}/>
        </div>
    )
}
