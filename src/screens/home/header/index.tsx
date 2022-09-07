import React, { Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Conteiner, Titulo } from './styles';


export default function Header(){
    return(
        <Conteiner>
            <Entypo name="menu" size={30} color="white" />
            <Titulo>Quiz App</Titulo>
            <AntDesign name="user" size={28} color="white" />
        </Conteiner>
    )
}