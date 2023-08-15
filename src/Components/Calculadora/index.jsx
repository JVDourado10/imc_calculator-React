import { useState } from "react"

const Calculadora = () => {
  let [altura, setAltura] = useState(0)
  let [peso, setPeso] = useState(0)
  
  const resultado = () => {
    let imc = peso/(altura*altura)
    if(imc > 0){
      return (
        <h1>{ imc }</h1>
      )
    }
  }
  const classificacao = () => {   
    let imc = peso/(altura*altura)
    if(imc > 0){
      if(imc < 18.5) {
        return(
          <p className="baixo">Baixo Peso</p>
        )
      } else if(imc < 24.9) {
        return(
          <p className="eutrofia">Eutrofia</p>
        )
      } else if(imc < 29.9) {
        return(
          <p className="sobrepeso">Sobrepeso</p>
        )
      } else {
        return(
          <p className="obesidade">Obesidade</p>
        )
      }
    }
  }
  


  return (
    <div className="container calculadora">
      <div>
        <label>Altura</label>
        <input onChange={event => setAltura(parseFloat(event.target.value))} type="number" />
      </div>
      <div>
        <label>Peso</label>
        <input onChange={event => setPeso(parseFloat(event.target.value))} type="number" />
      </div>
      <div className="result">
        <h2>Resultado:</h2> 
        <p>{ resultado() } </p>
      </div>
      <div className="resultado">
        <p>{ classificacao() } </p>
      </div>
      
     
    </div>
  )
}

export default Calculadora