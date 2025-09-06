import CrowLogo from "../assets/CrowLogo.png"
import styles from "./Header.module.css"


function Header() {


    return (
        <header className={styles.header}>
            <img src={CrowLogo} alt="Logo" className={styles.headerlogo} />
            <div className={styles.aboutmebox}>
                <h1>Matteo Pizzichemix</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius expedita officiis labore, voluptates similique autem praesentium, optio dicta doloremque provident libero dolore amet exercitationem ipsum impedit, facere laborum. Quam, necessitatibus?</p>
            </div>

            <p className={styles.wifina}>che chifo che chifo :(((</p>
        </header>
    )
}

export default Header