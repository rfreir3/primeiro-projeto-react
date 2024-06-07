import { useState } from 'react';

import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/Formulario.js';
import Time from './components/Time/Time.js';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  const times = [
    {
      nome: "Frontend",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Backend",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    }, 
    {
      nome: "Fullstack",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    }, 
    {
      nome: "Mobile",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    }, 
    {
      nome: "DevOps",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    }, 
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    }, 
    {
      nome: "UX e Design",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    }
  ];

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado= {colaborador => aoColaboradorAdicionado(colaborador)}/>

      {times.map((time) => <Time key={time.nome} nome={time.nome} corDoFundo={time.corSecundaria} corDestaque={time.corPrimaria}/>)}
    </div>
  );
}

export default App;
