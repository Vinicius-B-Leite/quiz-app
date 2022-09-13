import React, { createContext, useState} from 'react'

type TipoTemaContext = {
    tema: string,
    trocarTema: ()=>void
}

export const TemaContext = createContext({} as TipoTemaContext)

type TemaContextProps = {
    children: React.ReactNode
}

export const TemaProvider = ({children}: TemaContextProps) => {
    const [tema, setTema] = useState<string>('lightMode')

    const trocarTema = () => {
        setTema(tema == 'darkMode' ? 'lighMode' : 'darkMode')
    }

    return(
        <TemaContext.Provider value={{tema, trocarTema}}>
            {children}
        </TemaContext.Provider>
    )
}