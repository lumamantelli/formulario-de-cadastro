import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useState } from 'react';

function FormularioCadastro({aoEnviar, validarCpf}) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const [erros, setErros] = useState({cpf:{valido:true, texto:''}})

    return(
        <form onSubmit={(evento) => {
            evento.preventDefault()
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
        }}>
            <TextField
                value={nome}
                onChange={(evento) => {
                    setNome(evento.target.value)
                }} 
                id="nome" 
                label="Nome" 
                type="text" 
                margin='normal'
                fullWidth 
                required
            />

            <TextField 
                value={sobrenome}
                onChange={(evento) => {
                setSobrenome(evento.target.value)
            }}
                id="sobrenome" 
                label="Sobrenome" 
                type="text" 
                margin='normal' 
                fullWidth 
                required
            />

            <TextField 
                 value={cpf}
                 onChange={(evento) => {
                 setCpf(evento.target.value)
                }}
                onBlur={(evento) => {
                    const ehValido = validarCpf(cpf)
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                type="text" 
                margin='normal'
                fullWidth 
                required
            />

            <FormControlLabel 
                label='Promoções' 
                control={<Switch 
                    checked={promocoes}
                    onChange={(evento) => {
                        setPromocoes(evento.target.checked)
                    }}
                    name='Promoções' 
                    defaultChecked={promocoes} 
                    color='primary'
                    />}
            />
            
            <FormControlLabel 
                label='Novidades' 
                control={<Switch 
                    checked={novidades}
                    onChange={(evento) => {
                        setNovidades(evento.target.checked)
                    }}
                    name='Novidades' 
                    defaultChecked={novidades} 
                    color='primary'
                    />}
            />

            <Button 
                variant='contained' 
                color='primary' 
                type='submit'>
                    Cadastrar
            </Button>
        </form>
    )
}
 
export default FormularioCadastro;