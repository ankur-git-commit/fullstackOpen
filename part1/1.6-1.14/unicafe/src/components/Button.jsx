export default function Button({feedbackType, onClick}){

    if (Array.isArray(feedbackType)){
        return (
            <>
               {feedbackType.map((action, index) => (
                <button key={index} onClick={(() => onClick(action))}>
                    {action}
                </button>
               ))}
            </>
        )
    } else {
        return (
            
            <button onClick={() => onClick(feedbackType)}>{feedbackType}</button>
        )
    }
}