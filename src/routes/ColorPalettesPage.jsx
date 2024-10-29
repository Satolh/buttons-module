import HeaderComponent from "../header"
import ColorGenerator from "../JavaScript/ColorGenerator";
import Footer from "../footer";

let title = "Recycle Css Color Palettes";
let paragraph = "If you need Color Palettes you came to the right place, click on the Color and copy the Css code"


export default function ColorPalletePage () {
    return(
        <>
            <HeaderComponent titlePage={title} paragraphPage={paragraph}/>
                <ColorGenerator/>
            <Footer/>
        </>

    )
} 