import { useEffect, useState } from 'react'
import styles from './AddRenda.module.css'

import { FaRegPlusSquare } from "react-icons/fa";
import clsx from 'clsx';

import PopUpSpent from '../../layout/PopUpSpent/PopUpSpent';
import PopUpIncome from '../../layout/PopUpIncome/PopUpIncome';

import CardIncome from '../../layout/CardIncome/CardIncome';
import CardSpent from '../../layout/CardSpent/CardSpent';

export default function AddRenda() {

    const [vetorIncome, setVetorIncome] = useState([])
    const [vetorSpent, setVetorSpent] = useState([])

    const [valueIcome, setValueIcome] = useState(10.99)
    const [valueSpent, setValueSpent] = useState(1.99)

    const [showIncome, setShowIncome] = useState(false)
    const [showOpacityIncome, setShowOpacityIncome] = useState(false)

    const [showSpent, setShowSpent] = useState(false)
    const [showOpacitySpent, setShowOpacitySpent] = useState(false)

    useEffect(() => {
        setValueSpent(
            vetorSpent.reduce((acc, item) => acc + Number(item.value), 0
        ))
    }, [vetorSpent])

    useEffect(() => {
        setValueIcome(vetorIncome.reduce((acc, item) => acc + Number(item.value), 0)
    )
    } , [vetorIncome])

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
                                {vetorIncome.map((item, index) => 
                                   (<CardIncome vetor={vetorIncome} setVetor={setVetorIncome} key={index} id={index} type={item.type} value={item.value} /> )
                                )}

                                <PopUpIncome vetor={vetorIncome} setVetor={setVetorIncome} opacity={showOpacityIncome} setOpacity={setShowOpacityIncome} setShowIncome={setShowIncome} showIncome={showIncome} />


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
                                
                                {vetorSpent.map((item, index) => (
                                    <CardSpent key={index} id={index} setVetor={setVetorSpent} vetor={vetorSpent} type={item.type} value={item.value} date={item.date} />
                                ))}

                                <PopUpSpent setVetor={setVetorSpent} vetor={vetorSpent} opacity={showOpacitySpent} setOpacity={setShowOpacitySpent} setShowSpent={setShowSpent} showSpent={showSpent} />
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

        </>
    )
}