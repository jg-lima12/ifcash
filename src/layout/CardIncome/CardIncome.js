import { useState } from 'react'
import styles from './CardIncome.module.css'

import { FaRegTrashCan } from "react-icons/fa6";


export default function CardIncome({ setVetor, vetor, id, type, value }) {

    function deleteCard() {
        setVetor(() =>
            vetor.filter((item, index) => index !== id)
        )
    }

    return (
        <>
            <div className={styles.container}>
                <FaRegTrashCan onClick={deleteCard} className={styles.icon} />
                <div className={styles.card}>
                    <div className={styles.data}>
                        <span className={styles.titleData}>Fonte de Renda:</span>
                        <span className={styles.fontData}>{type}</span>
                    </div>
                    <div className={styles.value}>
                        <span className={styles.titleValue}>Valor da Renda:</span>
                        <span className={styles.numValue}>R${value}</span>
                    </div>
                </div>
            </div>
        </>
    )
}