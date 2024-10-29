import { FaInstagram,FaTwitter,FaGithub } from "react-icons/fa";


export default function  Footer() {


    return(

    <footer className='footer'>

      <p className="made"> Made By Satolh</p>

        <div className='container-redes'>
          <a  className='a-icon-redes' href='#'><FaInstagram className='icon-redes' /></a>
          <a  className='a-icon-redes' href='#'><FaTwitter className='icon-redes' /></a>
          <a target='_blank' className='a-icon-redes' href='https://github.com/satolh'><FaGithub className='icon-redes'  /></a>
        </div>
      
    </footer>
    )
}