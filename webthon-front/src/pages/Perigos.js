import Menu from './Menu';
import imgI from '../img/perigosInicio.png';
import peixe from '../img/peixe.png';
import ransomware from '../img/ransomware.png';
import engSocial from '../img/engSocial.png';
import malware from '../img/malware.png';
import fbruta from '../img/fbruta.png';
import key from '../img/key.png';
import spoofing from '../img/spoofing.png';
import ddos from '../img/ddos.png';
import spy from '../img/spy.png';
import redes from '../img/redes.png';
import Footer from './Footer'
function Perigos() {

    return (
        <>
            <div className="englobMask">
                <Menu></Menu>
            </div>

            <div className='englobinicioPerigos'>
                <img src={imgI} className='imgPerigosInicio'></img>
                <div className='textsPerigos'>
                    <h1 id='perigosT'>Perigos</h1>
                    <p id='textP'><span style={{ fontWeight: 'bold' }}>Atenção aos riscos:</span> o que pode comprometer sua segurança online</p>
                </div>


            </div>

            <div className='Perigos'>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Phishing</h2>
                    <img src={peixe} className='imgPerigoInfo'></img>
                    <p>Tentativas de enganar o usuário para que ele forneça dados pessoais, como senhas, número de cartão ou códigos bancários. Geralmente ocorre por e-mail, mensagens falsas ou sites que imitam páginas legítimas</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Ransomware</h2>
                    <img src={ransomware} className='imgPerigoInfo'></img>
                    <p>Tipo de vírus que sequestra arquivos do computador ou celular e exige um pagamento (resgate) para devolvê-los. Mesmo com o pagamento, nem sempre os dados são recuperados</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Engenharia Social</h2>
                    <img src={engSocial} className='imgPerigoInfo'></img>
                    <p>Ataque baseado na manipulação psicológica. O criminoso convence a vítima a entregar informações confidenciais ou executar ações que comprometem a segurança do sistema, explorando confiança, medo ou urgência</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Malware (Software Malicioso)</h2>
                    <img src={malware} className='imgPerigoInfo'></img>
                    <p>Categoria geral que inclui vírus, worms, trojans e outros programas desenvolvidos para causar danos, roubar informações ou invadir sistemas sem permissão</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Ataques de Força Bruta</h2>
                    <img src={fbruta} className='imgPerigoInfo'></img>
                    <p>Consiste em testar várias combinações de senhas automaticamente até encontrar a correta. Muito usado para invadir contas com senhas fracas ou previsíveis</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Keylogger</h2>
                    <img src={key} className='imgPerigoInfo'></img>
                    <p>Programa que registra tudo o que é digitado no teclado, como senhas, conversas e dados bancários, e envia essas informações para o invasor</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Spoofing</h2>
                    <img src={spoofing} className='imgPerigoInfo'></img>
                    <p>Técnica que falsifica identidades digitais, como e-mails, números de telefone ou sites, para enganar a vítima e ganhar acesso ou informações</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>DDoS (Ataque de Negação de Serviço Distribuído)</h2>
                    <img src={ddos} className='imgPerigoInfo'></img>
                    <p>Ataque que sobrecarrega um site ou servidor com acessos simultâneos, feitos por milhares de dispositivos, até que ele fique fora do ar</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'>Spyware</h2>
                    <img src={spy} className='imgPerigoInfo'></img>
                    <p>Software espião que se instala silenciosamente no dispositivo para coletar dados do usuário sem consentimento, como histórico de navegação, localização ou credenciais</p>
                </div>
                <div className='infoPerigo'>
                    <h2 id='inPer'> Golpes em Redes Sociais e WhatsApp</h2>
                    <img src={redes} className='imgPerigoInfo'></img>
                    <p>Perfis falsos, links perigosos, clonagem de contas e pedidos de dinheiro por mensagens são formas comuns de golpes que se aproveitam da confiança entre contatos</p>
                </div>
                
            </div>
            <div>
                 <Footer></Footer>
            </div>
           
        </>
    )
}
export default Perigos;