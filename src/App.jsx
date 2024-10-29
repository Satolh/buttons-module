import { useState } from 'react'
import { FaRecycle } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GiShadowFollower,GiButtonFinger} from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import HeaderComponent from './header';
import CssCopied from './JavaScript/MsjCssCopied';
import Footer from './footer';

let title = "Recycle Css Buttons";
let paragraph = "If you need Buttons you came to the right place, click on the Button and copy the Css code"


function App() {


  const [newMessage, setNewMessage] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [copied, setCopied] = useState(false);


  const  handleCloseMessage = ()=>{
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



      const button = document.querySelector(`.btn-${index}`);
      // Crear un clon del botón
      const clone = button.cloneNode(true);
      // Agregar el clon al DOM, pero ocultarlo para evitar interferencias visuales
      clone.style.visibility = 'hidden';
      document.body.appendChild(clone);
      // Obtener los estilos computados del clon en su estado normal
      const computedStyle = window.getComputedStyle(clone);
      // Propiedades de estilo que deseas copiar, incluyendo el estado :hover
      const propertiesToCopy = [
        "display", "outline", "cursor", "border-radius", "font-size",
        "font-weight", "line-height", "padding", "height", "min-width",
        "min-height", "border", "color", "background-color","background-image", "transition"
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
      const hoverStyles = window.getComputedStyle(button);
      const hoverBackgroundColor = hoverStyles.getPropertyValue('background-color');
      const hoverBorderRadius = hoverStyles.getPropertyValue('border-radius');
      const hoverTransform = hoverStyles.getPropertyValue('transform');
      const hoverBorder = hoverStyles.getPropertyValue('border');
      const hoverTextDecoration = hoverStyles.getPropertyValue('text-decoration');
      const hoverBackgroundImage = hoverStyles.getPropertyValue('background-image');
      
      if (hoverTransform) {
        cssText += `h
        :hover {
          background-color: ${hoverBackgroundColor}; 
          border-radius: ${hoverBorderRadius}; 
          transform: ${hoverTransform}; 
          border: ${hoverBorder}; 
          text-decoration: ${hoverTextDecoration}; 
          background-image: ${hoverBackgroundImage}; 
        }
        `;
      }
      // Copiar el texto CSS al portapapeles
      navigator.clipboard.writeText(cssText).then(() => setCopied(true));
    };
  



  const [btn,setBtn] = useState([
    { title: "Netflix Button", description: "Description 1", text: "Click me" },
    { title: "Prime Video Button", description: "Description 2", text: "Click me" },
    { title: "Crunchyroll Button", description: "Description 3", text: "Click me" },
    { title: "MongoDB Button", description: "Description 4", text: "Click me" },
    { title: "Angular Button", description: "Description 5", text: "Click me" },
    { title: "Twitch Button", description: "Description 6", text: "Click me" },
    { title: "Amazon Button", description: "Description 7", text: "Click me" },
    { title: "Figma Button", description: "Description 8", text: "Click me" },
    { title: "Binance Button", description: "Description 9", text: "Click me" },
    { title: "GitHub Button", description: "Description 10", text: "Click me" },
    { title: "RustLang Button", description: "Description 11", text: "Click me" },
    { title: "Docker Button", description: "Description 12", text: "Click me" },
    { title: "HyperX Button", description: "Description 13", text: "Click me" },
    { title: "StarLink Button", description: "Description 14", text: "Click me" },
    { title: "Nasa Button", description: "Description 15", text: "Click me" }
    ])


      return (
        <>

        <HeaderComponent titlePage={title} paragraphPage={paragraph}/> 
      

    <main className='main'>

       { showMessage &&
            <span className="span-copy">Css Copied!! <FaTimes className='icon-close' onClick={handleCloseMessage}/> </span>
        }

      <div className='container-paragraph-buttons'>
        <h3 className='sub-title'> {'<Button/>'} </h3>
        <p className='paragraph-buttons'>The Buttons are essential in any interface, providing users with a clear and direct way to interact. Its design and functionality are essential for a successful user experience.​</p> 
      </div>

      <section className='section-buttons'> 
        {
          btn.map((button,index) => (
            <div className='container-button' key={index}>
              <h2 className='btn-title'> {button.title} </h2>
              <button 
              className={`btn btn-${index}`}
              onClick={() => copyButtonStyle(index)}
              > {button.text} </button>
            </div>
          ))

        }
       </section>

    </main>
     
        <Footer/>

    </>
  )
}


export default App
