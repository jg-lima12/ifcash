import styles from './PopUpIncome.module.css'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input';
import Bell from '../../components/Bell/Bell';

import { FaPlus } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";


import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTitleContext } from '../../hooks/useIncomeContext';


export default function PopUpIncome({ vetor, setVetor, setValue, opacity, setOpacity, setShowIncome, showIncome }) {

    const classContainer = clsx(styles.container, !showIncome && styles.none, !opacity && styles.opacity)

    const [valueFont, setValueFont] = useState(99.99)
    const [valueLimit, setValueLimit] = useState(99.99)
    const [valueInput, setValueInput] = useState('')

    const [viewAlert, setViewAlert] = useState(false)

    const [colorGreen, setColorGreen] = useState('#a0a0a0')
    const [colorWhite, setColorWhite] = useState('#a0a0a0')

    function offPopUp() {
        setOpacity(false)
        setTimeout(() => setShowIncome(false), 100)
    }

    function showEditor() {

    }

    function showAlert() {
        setViewAlert(!viewAlert)
    }

    function getData() {
        setVetor([
            ...vetor, {
                type: valueInput
            }])
        setValueInput('')

        setOpacity(false)
        setTimeout(() => setShowIncome(false), 100)
    }

    useEffect((() => {
        if (viewAlert === true) {
            setColorGreen('#3ab914ff')
            setColorWhite('white')
        } else {
            setColorGreen('#a0a0a0')
            setColorWhite('#a0a0a0')
        }
    }), [viewAlert])


    return (
        <>
            <div className={classContainer}>
                <div className={styles.card}>
                    <div className={styles.containerPopUp}>
                        <FaArrowLeft className={styles.arrowIcon} onClick={offPopUp} />
                        <div className={styles.cardPopUp}>
                            <div className={styles.inputRenda}>
                                <Input value={valueInput} onChange={(e) => setValueInput(e.target.value)} >Fonte de Renda:</Input>
                            </div>
                            <div className={styles.saleIncome}>
                                <span>Ganho Líquido:</span>
                                <div className={styles.valueFont}>
                                    <span>R${valueFont}</span>
                                    <LuPencil className={styles.iconPincel} style={{ fontSize: '40px', color: '#3ab914ff' }} onClick={showEditor} />
                                </div>
                            </div>
                            <div className={styles.alert}>
                                <div className={styles.titleAlert}>
                                    <div onClick={showAlert} style={{ display: 'flex' }}><Bell style={{ fontSize: '25px', color: '#3ab914ff' }} /></div>
                                    <span>Alertar</span>
                                </div>
                                <div className={clsx(styles.alertCorpo, viewAlert && styles.viewAlert)}>
                                    <div className={styles.addLimit}>
                                        <span style={{ color: colorWhite }} >Limite Financeiro:</span>
                                        <div className={styles.valueLimit}>
                                            <span style={{ color: colorWhite }} >R${valueLimit}</span>
                                            <LuPencil className={styles.iconPincel} style={{ fontSize: '20px', color: colorGreen, marginBottom: '7px' }} onClick={showEditor} />
                                        </div>
                                    </div>
                                    <Input styleLabel={{ fontSize: '15px', color: colorWhite }} styleInput={{ fontSize: '12px', borderColor: colorGreen, padding: '7px 13px' }} >Mensagem Motivadora</Input>
                                </div>
                            </div>
                            <div className={styles.buttonAdd}>
                                <Button onClick={getData} version='greenBck' size='small'>
                                    <FaPlus style={{ fontSize: '20px' }} />
                                    Adicionar Renda
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {console.log(valueInput)}
        </>
    )
}