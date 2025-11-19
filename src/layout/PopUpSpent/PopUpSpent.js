import styles from './PopUpSpent.module.css'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input';

import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import clsx from 'clsx';


export default function PopUpSpent({ opacity, setOpacity, setShowSpent, showSpent }) {

    const classContainer = clsx(styles.container, showSpent ? '' : styles.none, opacity ? '' : styles.opacity)


    function offPopUp() {
        setOpacity(false)
        setTimeout(() => setShowSpent(false), 500)
    }

    return (
        <>
            <div className={classContainer}>
                <div className={styles.card}>
                    <div className={styles.containerPopUp}>
                        <IoCloseSharp onClick={offPopUp} />
                        <div className={styles.cardPopUp}>
                            <div className={styles.inputRenda}>
                                <Input>Fonte de Renda:</Input>
                            </div>
                            <div className={styles.saleIncome}>
                                <Input styleLabel={{fontSize: '27px'}}>Ganho Liquido:</Input>
                            </div>
                            <div className={styles.alert}>
                                <div className={styles.alertCorpo}></div>
                            </div>
                            <div className={styles.buttonAdd}>
                                <Button version='greenBck' size='small'>
                                    <FaPlus className='iconPlus' style={{fontSize: '20px'}} />
                                    Adicionar Renda
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}