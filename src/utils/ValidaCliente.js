export const VerificarCampos = (dadosCliente) => {
  console.log(dadosCliente);
  
  for (let el in dadosCliente) {
  console.log(el);
    if (dadosCliente[el] == '') {
      throw new Error("Todos os campos devem ser preenchidos");
    }
  }

  if(ValidaCPF(dadosCliente.cpf) == false){
    throw new Error("CPF inválido");
  }

  if(  ValidaEmail(dadosCliente.email)  == false){
    throw new Error("E-mail inválido");
  }

  return true;
}

function ValidaCPF(cpf){
  if (cpf.length !== 11) {
    return false;
  }
  return true;
}

function ValidaEmail(email){
  let result = /\S+@\S+\.\S+/;
  return result.test(email);
}