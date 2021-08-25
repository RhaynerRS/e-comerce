import styles from '../styles/login.module.scss'
import isNode from 'is-node'
export default function Login() {
    if (!isNode) {
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");
        const overlay = document.getElementById("overlay")

        signUpButton.addEventListener("click", () => {
            container.classList.add("login_rightPanelActive__9nmqD");
            overlay.classList.add("login_right__3DOUR");
        });

        signInButton.addEventListener("click", () => { container.classList.remove("login_rightPanelActive__9nmqD"); overlay.classList.remove("login_right__3DOUR"); })
    }

    return (
        <div className={styles.body}>
            <div className={styles.container} id="container">
                <div className={styles.formContainer, styles.signUpContainer}>
                    <form method="post" name="formCadastro" action="includes/registro.php">
                        <h1>Registre-se</h1>

                        <input type="text" placeholder="Nome" name="nome" />
                        <input type="email" placeholder="E-mail" name="email" />
                        <input type="password" placeholder="Senha" name="senha" />
                        <input type="password" placeholder="confirme a Senha" name="senha2" />
                        <input type="date" placeholder="Data de Nascimento" name="nascimento" />
                        <button>Registre-se</button>
                    </form>
                </div>
                <div className={styles.formContainer, styles.signInContainer}>
                    <form method="post" name="formLogin" action="includes/login.php">
                        <h1>Login</h1>
                        <input type="email" placeholder="E-mail" name="email" />
                        <input type="password" placeholder="Senha" name="senha" />
                        <a href="#">Esqueceu sua senha?</a>
                        <button>Login</button>
                    </form>
                </div>
                <div className={styles.overlayContainer} id="overlay">
                    <div className={styles.overlay}>
                        <div className={styles.overlayLeft}>
                            <h1>Opa, você voltou!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className={styles.ghost} id="signIn">Login</button>
                        </div>
                        <div className={styles.overlayRight}>
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className={styles.ghost} id="signUp">Registre-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}