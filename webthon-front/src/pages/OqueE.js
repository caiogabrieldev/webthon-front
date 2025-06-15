import Menu from "./Menu"
import l1 from '../img/img-oquee.png'
import Footer from "./Footer"
function OQueE(){
    return(
        <>
         <div className="englobMask">
            <Menu></Menu>
        </div>

        <div className="englobOqueE">
            <div className="linhaUm">
                <img src={l1} className="imgrow"></img>
                <h2 className="textoT">O que realmente é?</h2>
            </div>
            <div className="linhaDois">

            </div>
        </div>


        
            <Footer></Footer>
        
        
        </>
    )
}
export default OQueE