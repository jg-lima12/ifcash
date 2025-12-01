import { useState } from 'react'
import styles from './AddRenda.module.css'

import { FaRegPlusSquare } from "react-icons/fa";
import clsx from 'clsx';

import PopUpSpent from '../../layout/PopUpSpent/PopUpSpent';
import PopUpIncome from '../../layout/PopUpIncome/PopUpIncome';

import CardIncome from '../../layout/CardIncome/CardIncome';

export default function AddRenda() {

    const [valueIcome, setValueIcome] = useState(10.99)
    const [valueSpent, setValueSpent] = useState(1.99)


    const [showIncome, setShowIncome] = useState(false)
    const [showOpacityIncome, setShowOpacityIncome] = useState(false)

    const [showSpent, setShowSpent] = useState(false)
    const [showOpacitySpent, setShowOpacitySpent] = useState(false)


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
                                <CardIncome />
                                <CardIncome />
                                <CardIncome />
                                <CardIncome />
                            </div>
                            <div className={styles.buttonListAdd}>
                                <FaRegPlusSquare onClick={() => {
                                    setShowIncome(true)
                                    setTimeout(() => setShowOpacityIncome(true), 100)
                                }} className={clsx('iconPlus', styles.iconPlus)} />
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
                                    setTimeout(() => setShowOpacitySpent(true), 100)
                                }} className={clsx('iconPlus', styles.iconPlus)} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <PopUpIncome opacity={showOpacityIncome} setOpacity={setShowOpacityIncome} setShowIncome={setShowIncome} showIncome={showIncome} />
            <PopUpSpent opacity={showOpacitySpent} setOpacity={setShowOpacitySpent} setShowSpent={setShowSpent} showSpent={showSpent} />
        </>
    )
}