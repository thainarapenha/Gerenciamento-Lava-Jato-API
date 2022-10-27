export const VerificarCamposServico = (dadosAtendimento) => {
  console.log(dadosAtendimento);
  
  for (let el in dadosAtendimento) {
  console.log(el);
    if (dadosAtendimento[el] == '') {
      throw new Error("Todos os campos devem ser preenchidos");
    }
  }

  return true;
}