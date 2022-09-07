import React, { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { ConteinerHeader, Titulo } from './styles';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native'

export default function Header() {

    const theme = useTheme()
    const navigation = useNavigation()

    return (
        <ConteinerHeader>
            <Titulo>História</Titulo>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <AntDesign name="close" size={30} color={theme.texto} />
            </TouchableOpacity>
        </ConteinerHeader>
    )
}