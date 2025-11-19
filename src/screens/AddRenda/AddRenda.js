import { useState } from 'react'
import styles from './AddRenda.module.css'

export default function AddRenda() {

    const [valueIcome, setValueIcome] = useState(10.99)
    const [valueSpent, setValueSpent] = useState(1.99)


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
                    </div>
                </section>
            </div>
        </>
    )
}