import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

function Formulario() {

    const times = ["Frontend", "Backend", "Fullstack", "Mobile", "DevOps", "Inovação e Gestão", "UX e Design"];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Salvando dados do formulário");
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario;