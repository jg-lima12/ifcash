import { useState } from 'react';
import styles from './Bell.module.css'

import { FaRegBell as TrpBell} from "react-icons/fa";
import { FaBell as BckBell } from "react-icons/fa6";


export default function Bell({style}){

    const [show, setShow] = useState(false)

    return show ? <BckBell style={style} className={styles.bellBck} onClick={() => setShow(false)} /> : <TrpBell style={style} className={styles.bellTrp} onClick={() => setShow(true)}/>  
}