import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../context/validacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return(
        <form onSubmit={(evento) => {
            evento.preventDefault()
            if(possoEnviar()) {
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
            }
        }}>
            <TextField
                value={nome}
                onChange={(evento) => {
                    setNome(evento.target.value)
                }} 
                id="nome" 
                name='nome'
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
                name='sobrenome'
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
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                name='cpf'
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
                    Próximo
            </Button>
        </form>
    )
}
 
export default DadosPessoais;