import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Send from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [desativarA, setDesativarA] = useState(false)
    const [desativarA2, setDesativarA2] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleMouseUpPassword = (event) => event.preventDefault();

    async function handleLogin(){
        if(!email || !senha){
            setDesativarA(true)
            setTimeout(() => { setDesativarA(false) }, 3000)
         
            return;
        }
        const user={
            email: email,
            senha: senha
        }

        try {
            const response=await axios.post('http://localhost:4090/login', user) 
            if(response.status==200){
                localStorage.setItem("usuarioLogado", JSON.stringify(response.data.nome));
                console.log(localStorage.getItem("usuarioLogado"));
                navigate('/')
            }
        } catch (error) {
            setDesativarA2(true)
            setTimeout(() => { setDesativarA2(false) }, 3000)
          
            console.log('Erro ao fazer login', error);
        }
    }

    return (
        <div className="englobAllLogin">
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
                <Slide direction="up" in={desativarA2} mountOnEnter unmountOnExit>
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
                    >Usuário não encontrado</Alert>
                </Slide>
            <div className="englobLogin">
                <div className="login">
                    <h1 id='loginH1'>Login</h1>
                    <div className='attLogin'>
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-multiline-flexible"
                        label="Email"
                        multiline
                        maxRows={4}
                        variant="outlined"
                        sx={{
                            width: '80%',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 2,
                            '& label': {
                                color: 'rgb(192, 179, 179)',
                            },
                            '& label.Mui-focused': {
                                color: '#1976d2',
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                color: 'white',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                '& fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#90caf9',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'purple',
                                },
                                transition: 'background-color 0.3s ease, border-color 0.3s ease',
                            },
                            '& .MuiOutlinedInput-input': {
                                color: 'white',
                            },
                        }}
                    />
                    
                    <FormControl
                    onChange={(e) => setSenha(e.target.value)}
                        variant="outlined"
                        sx={{
                            width: '80%',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: 2,
                            '& label': {
                                color: 'rgb(192, 179, 179)',
                            },
                            '& label.Mui-focused': {
                                color: '#1976d2',
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                color: 'white',
                                '& fieldset': {
                                    borderColor: 'transparent',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#90caf9',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'purple',
                                },
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                transition: 'background-color 0.3s ease, border-color 0.3s ease',
                            },
                            '& input': {
                                color: 'white',
                            },
                        }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Senha
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            label="Password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                        sx={{
                                            color: 'white',
                                        }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    </div>
                    <Link className='linkCadastro' to={'/cadastro'}>Não tem uma conta? Cadatre-se</Link>
                    <Button

                    size="small"
                    onClick={handleLogin}
                   
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
                        marginTop: '20px',
                        '&:hover': {
                            backgroundColor: 'rgb(82, 77, 77)',
                            boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
                        },
                    }}
                >
                    Login
                </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
