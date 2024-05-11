import Links from './links/Links';
import styles from './navbar.css';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    );
}

export default NavBar;