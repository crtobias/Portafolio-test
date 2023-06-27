import "./proyectos.css"

const Proyectos = () => {
    return(
        <section id="h-2" className="section-2">

            <h2 className="proyectos-title">Proyectos</h2>

            <div className="container-proyectos">
                <div id="proyecto" className="poke"><h6 className="proyecto-title">Poke App</h6></div>
                <div id="proyecto" className="rick"><h6 className="proyecto-title">Rick and Morty App</h6></div>

            </div>
            <div className="img2"></div>
        </section>
    )
}

export default Proyectos