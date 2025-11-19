import { useState } from 'react'
import styles from './AddRenda.module.css'

import { FaRegPlusSquare } from "react-icons/fa";
import clsx from 'clsx';

import PopUpSpent from '../../layout/PopUpSpent/PopUpSpent';
import PopUpIncome from '../../layout/PopUpIncome/PopUpIncome';

export default function AddRenda() {

    const [valueIcome, setValueIcome] = useState(10.99)
    const [valueSpent, setValueSpent] = useState(1.99)


    const [showIncome, setShowIncome] = useState(true)
    const [showSpent, setShowSpent] = useState(true)
    const [showOpacity, setShowOpacity] = useState(true)

    return (
        <>
            <div className={styles.containerShowIcome}>
                <section className={styles.sectionAddIcome}>
                    <div className={styles.containerAddIcome}>
                        <div className={styles.showIcome}>
                            <div className={styles.cardShowIcome}>
                                <span className={styles.spanName}>Renda Mensal:</span>
                                <span className={styles.green}>R${valueIcome}</span>
                            </div>
                        </div>
                        <div className={styles.listIcome}>
                            <div className={styles.listAddIcome}>

                            </div>
                            <div className={styles.buttonListAdd}>
                                <FaRegPlusSquare onClick={() => setShowIncome(true)} className={clsx('iconPlus', styles.iconPlus)} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.sectionAddIcome}>
                    <div className={styles.containerAddIcome}>
                        <div className={styles.showIcome}>
                            <div className={styles.cardShowIcome}>
                                <span className={styles.spanName}>Gasto Mensal:</span>
                                <span className={styles.red}>R${valueSpent}</span>
                            </div>
                        </div>
                        <div className={styles.listIcome}>
                            <div className={styles.listAddIcome}>

                            </div>
                            <div className={styles.buttonListAdd}>
                                <FaRegPlusSquare onClick={() => {
                                    setShowSpent(true)
                                    setTimeout(() => setShowOpacity(true), 100)
                                }} className={clsx('iconPlus', styles.iconPlus)} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <PopUpIncome setShowIncome={setShowIncome} showIcome={showIncome} />
            <PopUpSpent opacity={showOpacity} setOpacity={setShowOpacity} setShowSpent={setShowSpent} showSpent={showSpent} />
        </>
    )
}