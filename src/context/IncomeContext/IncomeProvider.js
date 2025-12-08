import { useState } from "react";
import { TitleContext } from "./IncomeContext";


export function TitleProvider({children}){

    const [title, setTitle] = useState('Não definido')

    return(
        <>
        <TitleContext.Provider value={{title, setTitle}}>
            {children}
        </TitleContext.Provider>
        </>
    )
}