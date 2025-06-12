import Menu from "./Menu"
import inicio1 from '../img/aviso-de-perigo-seguranca-digital-1.jpg'
import inicio2 from '../img/9Democracia em Risco.jpg'
import Footer from "./Footer"
function Inicio(){

    return(
        <>
        <div className="englobMask">
            <Menu></Menu>
        </div>
            

            <div className="englobinicio">
                <div className="infosInicio">
                    <h1>CONSCIÊNCIA <br></br>DIGITAL</h1>
                    <p className="legenda">Aprenda a navegar com segurança, ética e responsabilidade.</p>
                </div>
                <div className="imgsInicio">
                    <img className="imgInicio" src={inicio1}></img>
                    <img id="slaImg" className="imgInicio" src={inicio2}></img>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Inicio