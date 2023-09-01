import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    
    return (
        <form onSubmit={(evento) => {
            evento.preventDefault()
            aoEnviar({cep, endereco, numero, estado, cidade})
        }}>
            <TextField 
                value={cep}
                onChange={(evento) => {
                    setCep(evento.target.value)
                }}
                id="cep"
                label="CEP"
                type="number"
                margin='normal' 
                required
            />

            <TextField 
                value={endereco}
                onChange={(evento) => {
                    setEndereco(evento.target.value)
                }}
                id="endereco"
                label="Endeço"
                type="text"
                margin='normal'
                fullWidth 
                required
            />

            <TextField 
                value={numero}
                onChange={(evento) => {
                    setNumero(evento.target.value)
                }}
                id="numero"
                label="Número"
                type="number"
                margin='normal'
                required
            />

            <TextField 
                value={estado}
                onChange={(evento) => {
                    setEstado(evento.target.value)
                }}
                id="estado"
                label="Estado"
                type="text"
                margin='normal'
                required
            />

            <TextField 
                value={cidade}
                onChange={(evento) => {
                    setCidade(evento.target.value)
                }}
                id="cidade"
                label="Cidade"
                type="text"
                margin='normal'
                required
            />

             <Button 
                type="submit"
                variant='contained' 
                color='primary'
                fullWidth
            >
                Finalizar cadastro
            </Button>
        </form>
    )
}

export default DadosEntrega