import Menu from "./Menu"
import l1 from '../img/img-oquee.png'
import l2Cri from '../img/img-criancaComendo.png'
import l3Cri from '../img/criancaImgSla.webp'
import Footer from "./Footer"
import finalImg from '../img/no-deve-fazer-celular-1920x1080 (2).png'
function OQueE() {
    return (
        <>
            <div className="englobMask">
                <Menu></Menu>
            </div>

            <div className="englobOqueE">
                <div className="linhaUm">
                    <img src={l1} className="imgrow"></img>
                    <h2 className="textoT">O que realmente é?</h2>
                </div>

            </div>
            <div className="linhaDois">
                <div className="linhaDef">
                    <div className="englobP">
                        <p><span style={{fontWeight:'bold'}}>Consciência digital</span> é a capacidade de compreender de forma crítica o uso das tecnologias no mundo conectado em que vivemos. Mais do que apenas saber usar a internet, redes sociais ou aplicativos, ela <span style={{fontWeight:'bold'}}>envolve</span> perceber como nossas ações no ambiente digital impactam a nós mesmos, outras pessoas e a sociedade.</p>
                    </div>
                    <div className="englobImgs">
                        <img className="imgLinhaDef" src={l2Cri}></img>
                    </div>
                    
                </div>
                <div className="linhaDef">
                    <div className="englobImgs">
                        <img src={l3Cri} className="imgLinhaDef"></img>
                    </div>
                    
                    <div className="englobP">
                        <p>Ter consciência digital significa <span style={{fontWeight:'bold'}}>entender</span> que o espaço virtual é uma extensão do mundo real. Cada clique, comentário ou compartilhamento carrega <span style={{fontWeight:'bold'}}>consequências</span>. Por isso, agir com atenção, responsabilidade e reflexão se torna <span style={{fontWeight:'bold'}}>essencial</span> para uma convivência saudável e segura na era digital.</p>
                    </div>
                    
                    
                </div>
            </div>


            <Footer></Footer>


        </>
    )
}
export default OQueE