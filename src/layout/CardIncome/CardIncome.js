import { useState } from 'react'
import styles from './CardIncome.module.css'

import { FaRegTrashCan } from "react-icons/fa6";


export default function CardIncome() {

    const [number, setNumber] = useState(999.99)
    const [title, setTitle] = useState('Não declarado')


    return (
        <>
            <div className={styles.container}>
                <FaRegTrashCan className={styles.icon}/>
                <div className={styles.card}>
                    <div className={styles.data}>
                        <span className={styles.titleData}>Fonte de Renda:</span>
                        <span className={styles.fontData}>{title}</span>
                    </div>
                    <div className={styles.value}>
                        <span className={styles.titleValue}>Valor da Renda:</span>
                        <span className={styles.numValue}>R${number}</span>
                    </div>
                </div>
            </div>
        </>
    )
}