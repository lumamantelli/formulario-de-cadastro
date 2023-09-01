import './App.css';
import 'fontsource-roboto'
import { Component } from 'react';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import { validarCpf, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './context/validacoesCadastro';


class App extends Component {
  render(){
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCpf, senha:validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm}/>
        </ValidacoesCadastro.Provider>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

export default App;
