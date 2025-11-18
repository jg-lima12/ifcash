import clsx from 'clsx'
import styles from './Button.module.css'

export default function Button({children, version='whiteTrp', size='medium', style}) {

    const classButton = clsx(
        styles.button, styles[version], styles[size]
    )

    return (
        <>
            <button className={classButton} style={style} >{children}</button>
        </>
    )
}