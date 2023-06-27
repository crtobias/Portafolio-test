import "./nav.css"

const Nav = () =>{
    return(
        <div >

        <header className="nav">
            <h4 className="nav-button"><a href="#h-1">About</a></h4>
            <h4 className="nav-button"><a href="#h-2">Proyects</a></h4>
            <h4 className="nav-button"><a href="#h-3">Skills</a></h4>
        </header>
        <header  className="nav-reponsive">
            <button className="nav-reponsive-button">⭕</button>
            <div className="nav-reponsive-2">
            <button className="nav-reponsive-button-close">❌</button>
            <h4 className="nav-button"><a href="#h-1">About</a></h4>
            <h4 className="nav-button"><a href="#h-2">Proyects</a></h4>
            <h4 className="nav-button"><a href="#h-3">Skills</a></h4>
            </div>
        </header>

        </div>
    )
}

export default Nav