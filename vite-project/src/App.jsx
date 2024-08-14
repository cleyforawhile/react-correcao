import Perfil from "./components/Perfil/perfil";

function App() {

  const nome = 'Halcer'

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: "Cley"
  }

  let estaDeDia = true;


  return(
    <>
    <Perfil />
    <h1>Olá {pessoa.nome}</h1>
    <h2>Subtitulo</h2>
    {estaDeDia && 'Bom dia'}
    </>
    
  )
}
export default App
