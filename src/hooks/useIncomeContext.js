import { useContext } from 'react'
import {TitleContext, ValueContext} from '../context/IncomeContext/IncomeContext'

export function useTitleContext(){
    const context = useContext(TitleContext)

    if (context === undefined){
        throw new Error('Contexto é undefined')
    }

    return context
}

export function useValueContext(){
    const context = useContext(ValueContext)

    if (context === undefined){
        throw new Error('Contexto é undefined')
    }

    return context
}