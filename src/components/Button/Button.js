import clsx from 'clsx'
import styles from './Button.module.css'

export default function Button({ onClick ,children, version='whiteTrp', size='medium', style}) {

    const classButton = clsx(
        styles.button, styles[version], styles[size]
    )

    return (
        <>
            <button onClick={onClick} className={classButton} style={style} >{children}</button>
        </>
    )
}