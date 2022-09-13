import React, { Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { ConteinerHeader, Titulo } from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native'
import { Dispatch, SetStateAction } from 'react';


interface Props{
    setPontuacao: Dispatch<SetStateAction<number>>
}
export default function Header({setPontuacao} : Props) {

    const theme = useTheme()
    const navigation = useNavigation()

    return (
        <ConteinerHeader>
            <Titulo>História</Titulo>
            <TouchableOpacity onPress={()=>{navigation.goBack();
                 setPontuacao(0)}}>
                <AntDesign name="close" size={30} color={theme.texto} />
            </TouchableOpacity>
        </ConteinerHeader>
    )
}