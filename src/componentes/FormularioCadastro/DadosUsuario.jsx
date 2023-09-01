import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../context/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const validacoes = useContext(ValidacoesCadastro)    
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return(
        <form onSubmit={(evento) => {
            evento.preventDefault()
            if(possoEnviar()){
                aoEnviar({email, senha})
            }
        }}>
            <TextField 
                value={email}
                onChange={(evento) => {
                    setEmail(evento.target.value)
                }}
                id="email"
                name="email"
                label="Email"
                type="email"
                margin='normal'
                fullWidth 
                required
            />
            <TextField
                value={senha}
                onChange={(evento) => {
                    setSenha(evento.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                margin='normal'
                fullWidth 
                required
            />
            <Button 
                type="submit"
                variant='contained' 
                color='primary'
            >
                Próximo
            </Button>
        </form>
    )
}

export default DadosUsuario