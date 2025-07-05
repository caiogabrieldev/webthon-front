import { Link } from "react-router-dom"
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { use, useEffect, useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
function Menu() {
    const [user, setUser] = useState(null);
    const [mostrarNome, setMostrarNome] = useState(false);
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [op,setOp]=useState(1);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const nomeUser = JSON.parse(localStorage.getItem("usuarioLogado"))
      
        setUser(nomeUser)
        if (nomeUser) {
            setMostrarNome(true);
            setMostrarLogin(false);
        } else {
            setMostrarNome(false);
            setMostrarLogin(true);
        }

    }, [])
    return (
        <>
            <div className="englobMenu">
                <div style={{ width: '8%' }}>
                    {
                        mostrarNome &&
                        <div style={{ width: '100%', color: 'white' }}>
                            <p style={{ color: 'white', width: '100%' }}><span style={{ fontWeight: 'bold' }}>Olá,</span> {user}</p>
                        </div>
                    }
                </div>


                <div className="menu">
                    <Link className='linkMenu' to={'/'}>Início</Link>
                    <Link className='linkMenu' to={'/o-que-e'}>Definição</Link>
                    <Link className='linkMenu' to={'/impactos'}>Impactos</Link>
                    <Link className='linkMenu' to={'/perigos'}>Perigos</Link>
                    <Link className='linkMenu' to={'/feedback'}>Receba um feedback</Link>

                </div>
                <div style={{ width: '8%' }}>

                    <div className="loginBotao">
                        {
                            mostrarLogin &&
                            <div style={{ width:'70%',display: 'flex', alignItems: 'center', justifyContent: "space-around" }}
                            onClick={() => {
                                setMostrarLogin(false);
                                navigate('/login');
                            }}
                            >
                                <p>Login</p>
                                <LoginIcon
                                    sx={{
                                        color: 'white',
                                        fontSize: '33px',
                                    }}
                                    
                                ></LoginIcon>
                            </div>

                        }
                        {
                            mostrarNome &&
                            <div className="logout" onClick={() => {
                                localStorage.removeItem("usuarioLogado");
                                setUser(null);
                               
                                window.location.reload(); 
                            }}>
                                <p>Logout</p>
                                <LogoutIcon
                                    sx={{
                                        color: 'white',
                                        fontSize: '33px',
                                    }}

                                ></LogoutIcon>
                            </div>
                        }
                    </div>
                </div>



            </div>
        </>
    )
}
export default Menu