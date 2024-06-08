import "./Rodape.css"

function Rodape() {
    return(
        <footer className="footer">
            <section>
            <ul>
                <li>
                    <a href="https://facebook.com" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/fundo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
        </footer>
    );
}

export default Rodape;