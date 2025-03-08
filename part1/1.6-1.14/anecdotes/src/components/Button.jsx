export default function Button( {onClick, btnName}){
    return (
        <button onClick={onClick}>{btnName}</button>
    )
}