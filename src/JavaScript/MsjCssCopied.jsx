import { useState } from "react"



export default function CssCopied () {
    

    const [showMessage,setShowMessage] = useState(false);


    const handleCloseMessage = ()=>{
        setShowMessage(false);
      }
    return(
        <>
        { showMessage &&
            <span className="span-copy">Css Copied!! <FaTimes className='icon-close' onClick={handleCloseMessage}/> </span>
        }
        </>
        )
}