import './header.css'
import logo from '../../Images/logoMeme.png'

export default function Header(props) {
    return(
        <div className={props.color ? "header": "dark"}>
            <img src={logo} alt="logo" className='header--logo'/>
            <h1 className='header--text'>Meme Generator</h1>                         
            <button className='switch' onClick={props.changeColor}> Change color </button>
        </div>
    )
}