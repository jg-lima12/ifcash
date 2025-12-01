import styles from './Input.module.css'

export default function Input({ styleLabel, styleInput, id, children, value, onChange }) {
    return (
        <><div className={styles.cardInput}>
            <label style={styleLabel} className={styles.label} htmlFor={id}>{children}</label>
            <input value={value} onChange={onChange} style={styleInput} className={styles.input} placeholder='Escreva aqui' type="text" id={id} />
        </div>
        </>
    )
}