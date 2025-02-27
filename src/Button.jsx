import './Button.css';


export default function Button ({clickFunc, label = 'New Quote', colour}){
    return(
        <button style={{backgroundColor:colour, color: 'white'
        }} onClick={clickFunc} className='Button' id='new-quote'>{label}</button>
    )
}