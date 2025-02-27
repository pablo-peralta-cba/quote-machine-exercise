
import { useEffect, useState } from "react";
import Button from "./Button";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher(){
    const [quote, setQuote] = useState({text: "", author: ""});
    const [randoColor, setRandoColor] = useState(""); // Estado para el color aleatorio

    useEffect(() => { 
        fetchQuote();
    }, []); // Solo se ejecuta al montar el componente

    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
        
        // Generar color aleatorio después de obtener la cita
        const color_list = [
            "tomato",
            "blueviolet",
            "cornflowerblue",
            "indianred",
            "MediumAquaMarine",
            "MediumPurple",
            "Rebeccapurple",
            "sandybrown",
            "seagreen",
            "palevioletred",
            "lightsteelblue",
            "teal",
        ];
        const color = color_list[Math.floor(Math.random() * color_list.length)];
        setRandoColor(color); // Actualiza el color aleatorio en el estado
    }

    // Usamos useEffect para actualizar el color del body cada vez que randoColor cambia
    useEffect(() => {
        if (randoColor) {
            document.body.style.backgroundColor = randoColor; // Cambia el color de fondo del body
        }
    }, [randoColor]); // Esto solo se ejecuta cuando randoColor cambia

    return (
        <div id='wrapper' style={{backgroundColor: randoColor}}>
            <div id='quote-box'>
              <div className="quote-text">
                <i style={{color: randoColor}} className="fa fa-quote-left"></i>
                <span style={{color: randoColor}} id="text">{quote.text}</span>
              </div>
              <div className="quote-author">
                <h3 id="author" style={{color: randoColor}}><i>{quote.author}</i></h3>
              </div>
              <div className="buttons">
                <a className="button" style={{backgroundColor: randoColor}} id="tweet-quote" title="Tweet this quote!" target="blank" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text}${quote.author}`}>
                  <i className="fa fa-twitter"></i>
                </a>
                <Button colour={randoColor} clickFunc={fetchQuote} id="newQuote"/>
              </div>
            </div>
        </div>
    );
}
        