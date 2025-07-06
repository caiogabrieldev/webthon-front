import Menu from "./Menu"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Footer from "./Footer"
import SendIcon from '@mui/icons-material/Send'
import Fade from '@mui/material/Fade';

import Alert from "@mui/material/Alert"
import Slide from "@mui/material/Slide"
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
function Feedback() {
    const resref = useRef(null)
    const [carregando,setCarregando] = useState(false)
    const [desativar, setDesativar] = useState(false)
    const [desativarA, setDesativarA] = useState(false)
    const pRes = document.getElementById('Ph3')
    const [p1, setP1] = useState('')
    const [p2, setP2] = useState('')
    const [p3, setP3] = useState('')
    const [p4, setP4] = useState('')
    const [p5, setP5] = useState('')
    const [p6, setP6] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    function irParaARes() {
        resref.current.scrollIntoView({ behavior: 'smooth' });
    }
    async function handleEnviarPergunta() {
        if (p1 === '' || p2 === '' || p3 === '' || p4 === '' || p5 === '' || p6 === '') {
            setDesativarA(true)
            setTimeout(() => { setDesativarA(false) }, 3000)
            return
        }
        setCarregando(true)
        
        const resParaFeeedback = {
            'Como você administra o tempo que passa em frente às telas todos os dias?': p1,
            'Que tipo de conteúdo digital você consome com mais frequência e por quê?': p2,
            'Você costuma se desconectar da internet em algum momento do dia? Quando e por qual motivo?': p3,
            'Que cuidados você tem ao instalar novos aplicativos ou criar contas em sites?': p4,
            'Como as redes sociais influenciam suas emoções e seu comportamento diário?': p5,
            'O que você faz quando percebe que a tecnologia está afetando sua concentração ou produtividade?': p6
        }
        try {
            const response = await axios.post('http://localhost:4090/feedback', resParaFeeedback)
            console.log(response.data)
            pRes.innerText = response.data.msg
            pRes.style.opacity = '0'
            pRes.style.transform = 'translateX(-40px)'
            pRes.style.animation = 'textos 1s forwards'
            irParaARes()
            setDesativar(true)
            setCarregando(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="englobMask">
                <Menu></Menu>
            </div>
            <div className="englobPerguntas">

                <Slide direction="up" in={desativarA} mountOnEnter unmountOnExit>
                    <Alert severity="error"
                        sx={{
                            position: 'fixed',
                            top: '88%',
                            left: '5%',
                            transform: 'translateX(-50%)',
                            width: '20%',
                            zIndex: 1000,
                            backgroundColor: '#37383a',
                            fontFamily: 'Arial, sans-serif',
                            color: 'red',
                            fontSize: '1.2rem',
                            textAlign: 'center',
                            padding: '10px',
                            transition: 'all 0.3s ease-in-out',
                        }
                        }
                    >Preencha todos os campos</Alert>
                </Slide>



                <h1 id="Ph1">Responda ao questionário e receba um feedback do nosso assistente virtual</h1>
                <TextField
                    disabled={desativar}
                    onChange={(e) => setP1(e.target.value)}
                    id="filled-textarea"
                    name="pergunta1"
                    label="Como você administra o tempo que passa em frente às telas todos os dias?"
                    placeholder="Digite aqui"
                    multiline
                    variant="filled"
                    sx={{
                        width: "70vw",
                        transition: 'all 1s ease',
                        '& .MuiFilledInput-root': {
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '',
                                boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: '',
                                borderBottom: '2px solid purple',
                            },
                        },
                        '& .MuiFilledInput-input': {
                            color: 'white',
                            fontSize: 16,

                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#1976d2',
                        },
                        '& .MuiFilledInput-input::placeholder': {
                            color: 'white',
                        },
                    }}
                />
                <TextField
                    onChange={(e) => setP2(e.target.value)}
                    disabled={desativar}
                    id="filled-textarea"
                    label="Que tipo de conteúdo digital você consome com mais frequência e por quê?"
                    placeholder="Digite aqui"
                    multiline
                    variant="filled"
                    sx={{
                        width: "70vw",
                        transition: 'all 1s ease',
                        '& .MuiFilledInput-root': {
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '',
                                boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: '',
                                borderBottom: '2px solid purple',
                            },
                        },
                        '& .MuiFilledInput-input': {
                            color: 'white',
                            fontSize: 16,

                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#1976d2',
                        },
                        '& .MuiFilledInput-input::placeholder': {
                            color: 'white',
                        },
                    }}
                />
                <TextField
                    onChange={(e) => setP3(e.target.value)}
                    disabled={desativar}
                    id="filled-textarea"
                    label="Você costuma se desconectar da internet em algum momento do dia? Quando e por qual motivo?"
                    placeholder="Digite aqui"
                    multiline
                    variant="filled"
                    sx={{
                        width: "70vw",
                        transition: 'all 1s ease',
                        '& .MuiFilledInput-root': {
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '',
                                boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: '',
                                borderBottom: '2px solid purple',
                            },
                        },
                        '& .MuiFilledInput-input': {
                            color: 'white',
                            fontSize: 16,

                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#1976d2',
                        },
                        '& .MuiFilledInput-input::placeholder': {
                            color: 'white',
                        },
                    }}
                />
                <TextField
                    onChange={(e) => setP4(e.target.value)}
                    disabled={desativar}
                    id="filled-textarea"
                    label="Que cuidados você tem ao instalar novos aplicativos ou criar contas em sites?"
                    placeholder="Digite aqui"
                    multiline
                    variant="filled"
                    sx={{
                        width: "70vw",
                        transition: 'all 1s ease',
                        '& .MuiFilledInput-root': {
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '',
                                boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: '',
                                borderBottom: '2px solid purple',
                            },
                        },
                        '& .MuiFilledInput-input': {
                            color: 'white',
                            fontSize: 16,

                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#1976d2',
                        },
                        '& .MuiFilledInput-input::placeholder': {
                            color: 'white',
                        },
                    }}
                />
                <TextField
                    onChange={(e) => setP5(e.target.value)}
                    disabled={desativar}
                    id="filled-textarea"
                    label="Como as redes sociais influenciam suas emoções e seu comportamento diário?"
                    placeholder="Digite aqui"
                    multiline
                    variant="filled"
                    sx={{
                        width: "70vw",
                        transition: 'all 1s ease',
                        '& .MuiFilledInput-root': {
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '',
                                boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: '',
                                borderBottom: '2px solid purple',
                            },
                        },
                        '& .MuiFilledInput-input': {
                            color: 'white',
                            fontSize: 16,
                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#1976d2',
                        },
                        '& .MuiFilledInput-input::placeholder': {
                            color: 'white',
                        },
                    }}
                />
                <TextField
                    onChange={(e) => setP6(e.target.value)}
                    disabled={desativar}
                    id="filled-textarea"
                    label="O que você faz quando percebe que a tecnologia está afetando sua concentração ou produtividade?"
                    placeholder="Digite aqui"
                    multiline
                    variant="filled"
                    sx={{
                        width: "70vw",
                        transition: 'all 1s ease',
                        '& .MuiFilledInput-root': {
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '',
                                boxShadow: '0 0 7px rgba(0, 0, 0, 0.2)',
                            },
                            '&.Mui-focused': {
                                backgroundColor: '',
                                borderBottom: '2px solid purple',
                            },
                        },
                        '& .MuiFilledInput-input': {
                            color: 'white',
                            fontSize: 16,

                        },
                        '& .MuiInputLabel-root': {
                            color: 'gray',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#1976d2',
                        },
                        '& .MuiFilledInput-input::placeholder': {
                            color: 'white',
                        },
                    }}
                />
                <Button

                    size="small"
                    onClick={handleEnviarPergunta}
                    endIcon={<SendIcon />}
                    loading={carregando}
                    disabled={desativar}
                    loadingPosition="end"
                    variant="contained"
                    sx={{
                        backgroundColor: 'rgb(29, 26, 26)',
                        color: 'white',
                        width: '20vw',
                        padding: '10px 24px',
                        borderRadius: 5,
                        fontSize: '16px',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: 'rgb(82, 77, 77)',
                            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                        },
                    }}
                >
                    Enviar
                </Button>


            </div>
            <div className="resPerg" ref={resref}>
                <h1 id="Ph2">Feedback</h1>

                <p id="Ph3">Os resultados serão exibidos aqui após o envio!</p>

            </div>
            <Footer></Footer>
        </>
    )
}
export default Feedback;