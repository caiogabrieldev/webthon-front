import insta from '../img/icons8-instagram-500(1).png'
import face from '../img/icons8-facebook-500(1).png'
import tiktok from '../img/icons8-tiktok-500.png'


function Footer() {
    return (
        <>
            <div className="englobFooter">
                <div className="englobImages">
                    <img className='imgFooter' src={insta}></img>
                    <img className='imgFooter' src={face}></img>
                    <img className='imgFooter' src={tiktok}></img>
                </div>
                <hr id="linhaFooter"></hr>
                <div className='infosInferior'>
                    <div className='englobLinksInf'>
                        <p>Brasil</p>
                        <p>Política de privacidade</p>
                        <p>Política de cookies</p>
                        <p>Termos de uso</p>
                    </div>


                    <p>@ 2025 CD. Todos os direitos reservados. Conscientização Digital LTDA.</p>
                </div>



            </div>

        </>
    )
}
export default Footer