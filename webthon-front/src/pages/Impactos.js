import Menu from "./Menu";
import img from '../img/imgImpactos.jpg';
import th from '../img/thnk.avif';
import golpe from '../img/golpe.png';
import news from '../img/news.png';
import pass from '../img/pass.png';
import time from '../img/time.avif';
import talk from '../img/talk.png';
import teach from '../img/teach.png';
import dos from '../img/do.png';
import flt from '../img/flt.png';
import safe from '../img/safe.png';
import Footer from "./Footer";
function Impactos() {

    return (
        <>
            <div className="englobMask">
                <Menu></Menu>
            </div>
            <h1 id="comoAfeta">Como nos afeta?</h1>
            <div className="engloballContent">

                <img src={img} id="imgImpactos"></img>
                <div className="englobPs">
                    <p>A consciência digital <span style={{ fontWeight: 'bold' }}>transforma</span> a forma como nos relacionamos com a tecnologia, com as pessoas e com o mundo ao nosso redor. Seus impactos vão além do uso <span style={{ fontWeight: 'bold' }}>consciente</span> da internet — eles <span style={{ fontWeight: 'bold' }}>afetam</span> o comportamento individual, a convivência social e até mesmo decisões coletivas em ambientes virtuais.</p>
                    <p>Desenvolver essa consciência <span style={{ fontWeight: 'bold' }}>melhora</span> a qualidade das interações online, ajuda a combater a desinformação, reduz conflitos digitais e promove um ambiente mais seguro e respeitoso. Além disso, <span style={{ fontWeight: 'bold' }}>influencia</span> positivamente o bem-estar digital, estimulando o uso equilibrado da tecnologia.</p>
                </div>

            </div>

            <div className="slaEnglob">
                <h1 id="comoAfeta2">Medidas Gerais</h1>
                <div className="englobMedidasG">

                    <div className="itemM">
                        <div className="eImg">
                            <img src={th} className="imgitem"></img>
                        </div>
                        <p>Avalie se o conteúdo é necessário, verdadeiro e respeitoso</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={golpe} className="imgitem"></img>
                        </div>
                        <p>Desconfie de mensagens com senso de urgência, ofertas milagrosas ou links desconhecidos. Nunca envie códigos recebidos por SMS ou WhatsApp sem verificar a origem</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={news} className="imgitem"></img>
                        </div>

                        <p>Antes de compartilhar notícias, confirme se a fonte é confiável. Use plataformas de checagem</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={pass} className="imgitem"></img>
                        </div>
                        <p>Use senhas fortes e diferentes para cada serviço, ative a verificação em duas etapas e mantenha seus aplicativos atualizados</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={time} className="imgitem"></img>
                        </div>
                        <p>Use ferramentas de controle de tempo nos dispositivos e faça pausas regulares para manter a saúde mental e física</p>
                    </div>
                </div>
                <h1 id="comoAfeta2">Para pais e responsáveis</h1>
                <div className="englobMedidasG">

                    <div className="itemM">
                        <div className="eImg">
                            <img src={talk} className="imgitem"></img>
                        </div>
                        <p>Converse com seus filhos sobre os conteúdos que acessam e ajude a estabelecer limites saudáveis para o uso de dispositivos</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={teach} className="imgitem"></img>
                        </div>
                        <p>Ensine a reconhecer golpes, perfis falsos, desafios perigosos e o valor da privacidade</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={dos} className="imgitem"></img>
                        </div>

                        <p>O comportamento digital dos pais influencia diretamente o dos filhos. Pratique o que ensina</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={flt} className="imgitem"></img>
                        </div>
                        <p>Configure os dispositivos com filtros de conteúdo e acompanhe as atividades digitais das crianças</p>
                    </div>
                    <div className="itemM">
                        <div className="eImg">
                            <img src={safe} className="imgitem"></img>
                        </div>
                        <p>Crie um ambiente de confiança para que crianças e adolescentes se sintam seguros em relatar situações desconfortáveis que vivenciem online</p>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}
export default Impactos;