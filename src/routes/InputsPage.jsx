import HeaderComponent from "../header"
import Footer from "../footer";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

let title = "Recycle Css Shadows";
let paragraph = "If you need Inputs you came to the right place, click on the input and copy the Css code"

const arrayInput = [
    {name:"Input Biteable ",content:""}, {name:"Input Twitch",content:""},
    {name:"Input Amazon ",content:""}, {name:"Input Bootstrap ",content:""},
    {name:"Input ",content:""}, {name:"Input Material ",content:""},
    {name:"Input Netflix ",content:""}, {name:"Input Prime Video ",content:""},
    {name:"Input GitHub ",content:""}, {name:"Input Binance ",content:""},
    {name:"Input Crunchyroll ",content:""}, {name:"Input Docker ",content:""},
    {name:"Input Python ",content:""}, {name:"Input Stripe ",content:""},
    {name:"Input Mailchimp ",content:""}, {name:"Input Algolia ",content:""},
];

export default function InputsPage () {

    const [showMessage, setShowMessage] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCloseMessage = ()=>{
        setShowMessage(false)
    }


    const copyButtonStyle = (index) => {
        if(showMessage == false){
            const timeClassCopy = () => {
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                }, 2000);
            };
            timeClassCopy()
        }
    
          const input = document.querySelector(`.input-${index}`);
          // Crear un clon del botón
          const clone = input.cloneNode(true);
          // Agregar el clon al DOM, pero ocultarlo para evitar interferencias visuales
          clone.style.visibility = 'hidden';
          document.body.appendChild(clone);
          // Obtener los estilos computados del clon en su estado normal
          const computedStyle = window.getComputedStyle(clone);
          // Propiedades de estilo que deseas copiar, incluyendo el estado :hover
          const propertiesToCopy = ["outline", "border-radius","padding","border", "background-color", "transition"
          ];
          const styleObject = {};
          // Iterar sobre las propiedades y copiar sus valores, incluyendo los estilos de :hover
          propertiesToCopy.forEach(property => {
            // Copiar el valor de la propiedad sin verificar si es un estilo de :hover
            styleObject[property] = computedStyle.getPropertyValue(property);
          });
          // Eliminar el clon del DOM
          document.body.removeChild(clone);
          // Construir el texto CSS a partir del objeto de estilos
          let cssText = Object.keys(styleObject)
          .map((key) => `${key}: ${styleObject[key]};`)
          .join('\n');
          
          // Obtener los estilos de :hover específicos para el botón
          const focusStyle = window.getComputedStyle(input);
          const focusBackgroundColor = focusStyle.getPropertyValue('background-color');
          const focusBorderRadius = focusStyle.getPropertyValue('border-radius');
          const focusTransform = focusStyle.getPropertyValue('transform');
          const focusBorder = focusStyle.getPropertyValue('border');
          const focusBoxShadow = focusStyle.getPropertyValue("box-shadow");
          const focusBorderColor= focusStyle.getPropertyValue("border-color");
          if (focusTransform) {
            cssText += `h
            :focus {
              background-color: ${focusBackgroundColor}; 
              border-radius: ${focusBorderRadius}; 
              border: ${focusBorder}; 
              box-shadow: ${focusBoxShadow} ;
              border-color: ${focusBorderColor} ;
            }
            `;
          }
          // Copiar el texto CSS al portapapeles
          navigator.clipboard.writeText(cssText).then(() => setCopied(true));
        };





    return(
        <>
        <HeaderComponent titlePage={title} paragraphPage={paragraph}/>



        <div className="container-inputs">

        { showMessage &&
            <span className="span-copy">Css Copied!! <FaTimes className='icon-close' onClick={handleCloseMessage}/> </span>
        }
            {
                arrayInput.map((input,index)=>(
                    <div className={`box-input box-input-${index}`} key={index}>
                        <span className="span-name-input"> {input.name} </span>
                        <input placeholder="Click me..." type="text" className={`input input-${index}`} onClick={()=> copyButtonStyle(index)}/>
                    </div>
                ))
            }
        </div>

        <Footer/>
        
        </>
    )
}

