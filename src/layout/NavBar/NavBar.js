import styles from './NavBar.module.css'

import logo from '../../img/ifLogo.png'

import Button from '../../components/Button/Button'
import Eyes from '../../components/Eyes/Eyes';

import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";


export default function NavBar() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <div className={styles.cardLogo}>
                            <img src={logo} alt="Logo IF" />
                            <h1>IfCash</h1>
                        </div>
                        <div className={styles.options}>
                            <IoIosHelpCircleOutline className={styles.icon} />
                            <Eyes className={styles.eyes} />
                            <Button size='large'>
                                <span>USUÁRIO</span>
                                <FaRegUser />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}