import "./Time.css";

function Time(props) {
  return (
    <section className="time" style={{
        backgroundColor: props.corDoFundo
        
        
    }}>
        <h3 style={{
            borderColor: props.corDestaque
        }}>
            {props.nome}
        </h3>
    </section>
  );
}

export default Time;