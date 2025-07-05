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
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Cadastro() {
    const navigate=useNavigate()
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();
    const handleMouseUpPassword = (event) => event.preventDefault();

    async function handleCadastro() {
        console.log('oi');
        const user={
            nome: nome,
            email: email,
            senha: senha
        }
        try {
            const response= await axios.post('http://localhost:4090/cadastrar', user)
            if (response.status==200){
                alert('Cadastro realizado!')
                navigate('/login')
            }

        } catch (error) {
            alert('Erro ao cadastrar')
            console.log(error);
        }

    }
    return (
        <>
            <div className="englobAllCadastro">
                <div className="englobCadastro">
                    <div className="cadastro">
                        <h1 id='loginH1'>Cadastro</h1>
                        <div className='attCadastro'>
                            <TextField onChange={(e) => setNome(e.target.value)}
                                id="outlined-multiline-flexible"
                                label="Nome"
                                multiline
                                maxRows={4}
                                variant="outlined"
                                sx={{
                                    width: '100%',
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
                            <TextField
                            onChange={(e) => setEmail(e.target.value)}
                                id="outlined-multiline-flexible"
                                label="Email"
                                multiline
                                maxRows={4}
                                variant="outlined"
                                sx={{
                                    width: '100%',
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
                                variant="outlined"
                                onChange={(e) => setSenha(e.target.value)}
                                sx={{
                                    width: '100%',
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
                        <Button
                            size="small"
                            onClick={handleCadastro}
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
                            Cadastrar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cadastro;