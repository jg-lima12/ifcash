import styles from './Input.module.css'

export default function Input({ styleLabel, styleInput, id, children }) {
    return (
        <><div className={styles.cardInput}>
            <label style={styleLabel} className={styles.label} htmlFor={id}>{children}</label>
            <input style={styleInput} className={styles.input} placeholder='Escreva aqui' type="text" id={id} />
        </div>
        </>
    )
}