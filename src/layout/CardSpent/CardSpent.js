import styles from './CardSpent.module.css'

import { FaRegTrashCan } from "react-icons/fa6";


export default function CardSpent({ type, value, date }) {
    return (
        <>
            <div className={styles.container}>
                <FaRegTrashCan className={styles.icon} />
                <div className={styles.card}>
                    <div className={styles.data}>
                        <div className={styles.title}>
                            <span className={styles.titleData}>Fonte do Gasto:</span>
                            <span className={styles.fontData}>{type}</span>
                        </div>
                        <div className={styles.title}>
                            <span className={styles.titleData}>Data do Gasto:</span>
                            <span className={styles.fontData}>{date}</span>
                        </div>

                    </div>
                    <div className={styles.value}>
                        <span className={styles.titleValue}>Valor do Gasto:</span>
                        <span className={styles.numValue}>R${value}</span>
                    </div>
                </div>
            </div>
        </>
    )
}