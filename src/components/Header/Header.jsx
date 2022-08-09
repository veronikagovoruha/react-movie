import { NavLink } from "react-router-dom"
import styles from "./header.module.css"

const Header = () => {
    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <NavLink to={"/"}
                className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.link}`
              }
                >
                    Home
                </NavLink>
                <NavLink to={"/movies"}
                className={({ isActive }) =>
                  isActive ? `${styles.activeLink}` : `${styles.link}`
                }
                >
                    Movies
                </NavLink>
            </nav>
            
        </header>
    )
}

export default Header;