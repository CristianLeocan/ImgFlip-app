import './footer.css'

export default function Footer(props) {
    return(
        <footer className={props.color ? "footer": "dark--footer"}>
            <hr/>
            <h3 className={props.color ? "footer--title": "dark--title"}>What is the Meme Generator?</h3>            
            <p>It's a free online image maker that lets you add text.</p>
        </footer>
    )
}