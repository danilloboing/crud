const validaSenha = (password) => {
  return password?.toString().length > 6
}

const validaEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
}

const validaConfirmarSenha = (password, confirmarSenha) => {
  return validaSenha(password) && password === confirmarSenha
}

export {
  validaEmail,
  validaSenha,
  validaConfirmarSenha
}