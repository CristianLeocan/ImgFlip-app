import './content.css';
import React, {useEffect, useState} from 'react';
import flip from '../../Images/flip.png';

export default function Content() {

    const[meme, setMeme] = useState({
        randomImg: "https://i.imgflip.com/30b1gx.jpg",
        topText: "",
        bottomText: "",             
    })
    
    const[allMemes, setAllMemes] = useState([]) 

    function clicked() {
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomIndex].url        
        setMeme(oldMeme => ({
            ...oldMeme,
            randomImg: url,
        }))
    }
    
    function handleChange(event) {
        const{name, value} = event.target
        setMeme(oldMeme => ({
            ...oldMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(myData => setAllMemes(myData.data.memes))
    }, [])

    return(
        <main className= "meme">
            <input 
                type="text" 
                className='meme--input'
                placeholder='Insert Top Text'
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                >
            </input>
            
            <input 
                type="text" 
                className='meme--input'
                placeholder='Insert Bottom Text'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                >
            </input>

            <button onClick={clicked} className='meme--button'> 
                <span className='button--logo'> 
                    <img src={flip} alt="logoFlip" className='meme--button'/>
                </span>
                <span className='button--text'><h3>Flip Through Images </h3></span>
            </button>

            <img src={meme.randomImg} alt="meme" className='newmeme'/>
            <h2 className="topText">{meme.topText} </h2>
            <h2 className="bottomText"> {meme.bottomText} </h2>            
        </main>
    )
}