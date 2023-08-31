import './App.css';
import 'fontsource-roboto'
import { Component } from 'react';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';


class App extends Component {
  render(){
    return (
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf}/>
      </Container>
    )
  }
}

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCpf(cpf) {
  if(cpf.length !== 11){
    return {valido:false, texto:'CPF deve conter 11 digitos'}
  }else {
    return {valido:true, texto:''}
  }
}

export default App;
