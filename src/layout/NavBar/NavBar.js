import styles from './NavBar.module.css'

import logo from '../../img/ifLogo.png'

import Button from '../../components/Button/Button'
import Eyes from '../../components/Eyes/Eyes';

import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <Link to='/' title='Página Inicial' className={styles.cardLogo}>
                            <img src={logo} alt="Logo IF" />
                            <h1>IfCash</h1>
                        </Link>
                        <div className={styles.options}>
                            <Link to='/help' >
                                <IoIosHelpCircleOutline className={styles.icon} />
                            </Link>
                            <Eyes className={styles.eyes} />
                            <Link to='/login' >
                                <Button size='large' >
                                    <span>USUÁRIO</span>
                                    <FaRegUser />
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}