import styles from './PopUpSpent.module.css'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'


import { FaPlus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import clsx from 'clsx';
import { use, useState } from 'react';


export default function PopUpSpent({ opacity, setOpacity, setShowSpent, showSpent }) {

    const classContainer = clsx(styles.container, !showSpent && styles.none, !opacity && styles.opacity)

    const [valueFont, setValueFont] = useState(99.99)

    function offPopUp() {
        setOpacity(false)
        setTimeout(() => setShowSpent(false), 100)
    }

    function showEditor() {

    }

    return (
        <>
            <div className={classContainer}>
                <div className={styles.card}>
                    <div className={styles.containerPopUp}>
                        <FaArrowLeft className={styles.arrowIcon} onClick={offPopUp} />
                        <div className={styles.cardPopUp}>
                            <div className={styles.inputGasto}>
                                <Input>Fonte de Gasto:</Input>
                            </div>
                            <div className={styles.saleSpent}>
                                <span>Ganho Líquido:</span>
                                <div className={styles.valueFont}>
                                    <span>R${valueFont}</span>
                                    <LuPencil className={styles.iconPincel} style={{ fontSize: '40px', color: '#3ab914ff' }} onClick={showEditor} />
                                </div>
                            </div>
                            <div className={styles.categoria}>
                                <span className={styles.titleCategoria}>Categoria</span>
                                <form className={styles.form}>
                                    <label>
                                        <input type="radio" name='categoria' value='alimentacao' />
                                        Alimentação
                                    </label>
                                    <label>
                                        <input type="radio" name='categoria' value='diversao' />
                                        Diversão
                                    </label>
                                    <label>
                                        <input type="radio" name='categoria' value='transporte' />
                                        Trasporte
                                    </label>
                                </form>

                            </div>
                            <div className={styles.buttonAdd}>
                                <Button version='greenBck' size='small'>
                                    <FaPlus style={{ fontSize: '20px' }} />
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