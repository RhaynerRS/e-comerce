import StyledBox from '../components/StyledBox'
import styles from '../styles/cart.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faTrashAlt,faMinus,faPlus } from '@fortawesome/free-solid-svg-icons'
import { Image } from 'react-bootstrap'
import Minus from '../utils/minus.js';
import Plus from '../utils/plus.js';

export default function Cart() {
    return (
        <section className={styles.container}>
            <div className={styles.part}>
                <div className={styles.title}><h1>Carrinho</h1><span>(2 items)</span></div>
                <StyledBox>
                    <div><h3>Calcule frete e prazo</h3></div>
                    <div className={styles.frete}>
                        <form>
                            <input placeholder="Digite seu CEP aqui" />
                            <button >Aplicar</button>
                        </form>
                        <a href="https://achacep.com.br">Não sei meu CEP</a>
                    </div>
                </StyledBox>

                <StyledBox>
                    <div><h3>Pedido</h3></div>
                    <hr />
                    <div className={styles.produto}>
                        <Image src="/produto.png" width="80px" height="80px" objectFit="cover" />
                        <div>
                            <h3>VESTIDO MIDI FEMININO EVASÊ MANGA</h3>
                            <div><a>tamanho:P</a><a>Cor:Bege</a></div>
                            <strong>R$ 119,90</strong>
                        </div>
                        <div className={styles.quantidade}>
                            <a>qtd:</a>
                            <div>
                                <button onClick={()=>Minus("qtd")}><FontAwesomeIcon icon={faMinus} /></button>
                                <input type="number" value="1" id="qtd" disabled></input>
                                <button onClick={()=>Plus("qtd")}><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                        </div>
                        <a className={styles.delete}><FontAwesomeIcon icon={faTrashAlt} /></a>
                    </div>
                    <hr />
                </StyledBox>
            </div>
            <div className={styles.part}>
                <StyledBox>
                    <h3>Resumo do Pedido</h3>
                    <div className={styles.subTotal}>
                        <div><a>Subtotal de itens</a><a>R$ 299,80</a></div>
                        <hr />
                        <div><a>Total:</a><a>R$ 299,80</a></div>
                    </div>
                    <button>Ir Para Pagamento</button>
                </StyledBox>
                <a href="/pecas" className={styles.back}><FontAwesomeIcon icon={faChevronLeft} /> Continuar comprando</a>
            </div>
        </section>
    )
}