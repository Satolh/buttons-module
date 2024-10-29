import { useState,useEffect } from "react";
import ColorPalletePage from "../routes/ColorPalettesPage";
import { GrCopy } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";


const  arrayColors = [
  [ 
    '#fff8e1',
    '#ffecb3',
    '#ffe082',
    '#ffd54f',
    '#ffca28',
    '#ffc107',
    '#ffb300',
    '#ffa000',
    '#ff8f00',
    '#ff6f00',
  ],
      
	[
		  '#ECEFF1',
		  '#CFD8DC',
		  '#B0BEC5',
		  '#90A4AE',
		  '#78909C',
		  '#607D8B',
		  '#546E7A',
		  '#455A64',
		  '#37474F',
		  '#263238',
	],
	[
		  '#E3F2FD',
		  '#BBDEFB',
		  '#90CAF9',
		  '#64B5F6',
		  '#42A5F5',
		  '#2196F3',
		  '#1E88E5',
		  '#1976D2',
		  '#1565C0',
		  '#0D47A1',
	],
	[
		  '#EFEBE9',
		  '#D7CCC8',
		  '#BCAAA4',
		  '#A1887F',
		  '#8D6E63',
		  '#795548',
		  '#6D4C41',
		  '#5D4037',
		  '#4E342E',
		  '#3E2723',
	],
	[
		  '#E0F7FA',
		  '#B2EBF2',
		  '#80DEEA',
		  '#4DD0E1',
		  '#26C6DA',
		  '#00BCD4',
		  '#00ACC1',
		  '#0097A7',
		  '#00838F',
		  '#006064',
	],
	[
		  '#FBE9E7',
		  '#FFCCBC',
		  '#FFAB91',
		  '#FF8A65',
		  '#FF7043',
		  '#FF5722',
		  '#F4511E',
		  '#E64A19',
		  '#D84315',
		  '#BF360C',
	],
	[
		  '#EDE7F6',
		  '#D1C4E9',
		  '#B39DDB',
		  '#9575CD',
		  '#7E57C2',
		  '#673AB7',
		  '#5E35B1',
		  '#512DA8',
		  '#4527A0',
		  '#311B92',
	],
	[
		  '#E8F5E9',
		  '#C8E6C9',
		  '#A5D6A7',
		  '#81C784',
		  '#66BB6A',
		  '#4CAF50',
		  '#43A047',
		  '#388E3C',
		  '#2E7D32',
		  '#1B5E20',
	],
	[
		  '#FAFAFA',
		  '#F5F5F5',
		  '#EEEEEE',
		  '#E0E0E0',
		  '#BDBDBD',
		  '#9E9E9E',
		  '#757575',
		  '#616161',
		  '#424242',
		  '#212121',
	],
	[
		  '#E8EAF6',
		  '#C5CAE9',
		  '#9FA8DA',
		  '#7986CB',
		  '#5C6BC0',
		  '#3F51B5',
		  '#3949AB',
		  '#303F9F',
		  '#283593',
		  '#1A237E',
	],
	[
		  '#E1F5FE',
		  '#B3E5FC',
		  '#81D4FA',
		  '#4FC3F7',
		  '#29B6F6',
		  '#03A9F4',
		  '#039BE5',
		  '#0288D1',
		  '#0277BD',
		  '#01579B',
	],
	[
		  '#F1F8E9',
		  '#DCEDC8',
		  '#C5E1A5',
		  '#AED581',
		  '#9CCC65',
		  '#8BC34A',
		  '#7CB342',
		  '#689F38',
		  '#558B2F',
		  '#33691E',
	],
	[
		  '#F9FBE7',
		  '#F0F4C3',
		  '#E6EE9C',
		  '#DCE775',
		  '#D4E157',
		  '#CDDC39',
		  '#C0CA33',
		  '#AFB42B',
		  '#9E9D24',
		  '#827717',
	],
	[
		  '#FFF3E0',
		  '#FFE0B2',
		  '#FFCC80',
		  '#FFB74D',
		  '#FFA726',
		  '#FF9800',
		  '#FB8C00',
		  '#F57C00',
		  '#EF6C00',
		  '#E65100',
	],
	[
		  '#FCE4EC',
		  '#F8BBD0',
		  '#F48FB1',
		  '#F06292',
		  '#EC407A',
		  '#E91E63',
		  '#D81B60',
		  '#C2185B',
		  '#AD1457',
		  '#880E4F',
	],
	[
		  '#F3E5F5',
		  '#E1BEE7',
		  '#CE93D8',
		  '#BA68C8',
		  '#AB47BC',
		  '#9C27B0',
		  '#8E24AA',
		  '#7B1FA2',
		  '#6A1B9A',
		  '#4A148C',
	],
	[
		  '#FFEBEE',
		  '#FFCDD2',
		  '#EF9A9A',
		  '#E57373',
		  '#F44336',
		  '#E53935',
		  '#D32F2F',
		  '#C62828',
		  '#B71C1C',
      "#A10A1A",
	],
	[
		  '#E0F2F1',
		  '#B2DFDB',
		  '#80CBC4',
		  '#4DB6AC',
		  '#26A69A',
		  '#009688',
		  '#00897B',
		  '#00796B',
		  '#00695C',
		  '#004D40',
	],
	[
		  '#FFFDE7',
		  '#FFF9C4',
		  '#FFF59D',
		  '#FFF176',
		  '#FFEE58',
		  '#FFEB3B',
		  '#FDD835',
		  '#FBC02D',
		  '#F9A825',
		  '#F57F17',
]
]
for (let i = 0; i < arrayColors.length; i++) {
   arrayColors[i].reverse()
   arrayColors[i].pop()
}

const colorValues = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const PALETTE_SIZE = ["","","","","","","","","","","",""];

export default function ColorGenerator ()  {
	
	
	const [cont,setCont] = useState(0)
	const [colorBtn,setColorBtn] = useState()
    const [colorHexa, setColorHexa] = useState([]);
	const [enabledGenerator, setEnabledGenerator] = useState(false);
	const [showMessage, setShowMessage] = useState(false);

    const generateRandomHexColor = () => {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];
        color += randomElement;
      }
      return color;
    };

    useEffect(() => {
      handleButtonClick();
    },[]);
  
    const handleButtonClick = () => {
      const newColors = Array(12).fill().map(generateRandomHexColor);
      setColorHexa(newColors);
    };

	const CopyColor = (color) => {
		if(showMessage == false){
            const timeClassCopy = () => {
                setShowMessage(true);
                setTimeout(() => {
                    setShowMessage(false);
                }, 2000);
            };
            timeClassCopy()
        }
    

		navigator.clipboard.writeText(` ${color}`);
	}

	const handleCloseMessage = ()=>{
		setShowMessage(false);
	}
	const openGeneratorColor =()=>{
		setEnabledGenerator(!enabledGenerator)
	}


	useEffect(() => {
		const idIntervalo = setInterval(() => {
		  setCont((prevCont) => {
			const nuevoCont = prevCont >= colorHexa.length - 1 ? 0 : prevCont + 1;
			setColorBtn(colorHexa[nuevoCont]);
			return nuevoCont;
		  });
		}, 3000);
	
		return () => clearInterval(idIntervalo);
	  }, [colorHexa]);
      
    return(
    <>
     <section className="section-all-page">

	 { showMessage &&
            <span className="span-copy">Css Copied!! <FaTimes className='icon-close' onClick={handleCloseMessage}/> </span>
        }

		<button className="btn-generator" onClick={openGeneratorColor}>Generator Colors</button>

		{ enabledGenerator &&

			<div className="container-color-generator">
				<FaTimes className='icon-close-generator' onClick={openGeneratorColor}/>
				<h3 className="title-generator">Generator of random colors</h3>
				<div className="container-random-color">
        		{
					PALETTE_SIZE.map((color,index)=>(
						<div className="container-box-color" key={index} onClick={()=> CopyColor(colorHexa[index])}>
            	    	<span className="color-box"style={{ backgroundColor: colorHexa[index]}}> {colorHexa[index]} </span>
            	    	{/* <span className="name-color"> {colorHexa[index]} </span> */}
            	  	</div>
            	   	 ))
					}
				</div>
            	<button className="btn-color-change" style={{backgroundColor: colorBtn, color: "#000" }} onClick={handleButtonClick}> Change Colors </button>
			</div>
		}

          <section className="container-color-palettes">

            <div className="grid-color-palettes">

              {
               arrayColors.map((colors, arrayIndex) => (
                 <div key={arrayIndex} className="grid-colors" >
                    {colors.map((color, index) => (
                      <div className="container-box-color" key={index} onClick={()=> CopyColor(color)}>
                       <span className={`span-box span-box-${index} ` } style={{ backgroundColor: color }}></span>
                        <span className="name-color">{color}</span>
                      </div>
                    ))}
					<GrCopy className="icon-copy" onClick={()=>CopyColor(colors)}/>
                 </div>
                ))
              }
            </div>
           </section>

    </section>

    </>
    )
}