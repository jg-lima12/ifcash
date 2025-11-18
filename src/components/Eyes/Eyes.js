import { useState } from 'react';
import styles from './Eyes.module.css'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import clsx from 'clsx';



export default function Eyes({className}) {

    const [eyes, setEyes] = useState(true)
    const classEyes = clsx(className, styles.eyes)

    return eyes ? <IoEyeOutline className={classEyes} onClick={() => setEyes(false)} /> : <IoEyeOffOutline className={classEyes} onClick={() => setEyes(true)} />
}