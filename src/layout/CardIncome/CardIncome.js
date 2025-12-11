import { useState } from 'react'
import styles from './CardIncome.module.css'
import { useTitleContext } from '../../hooks/useIncomeContext';

import { FaRegTrashCan } from "react-icons/fa6";


export default function CardIncome({type, value}) {

    return (
        <>
            <div className={styles.container}>
                <FaRegTrashCan className={styles.icon}/>
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