import React, { Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Conteiner, Titulo } from './styles';
import { TemaContext } from '../../../context/TemaContext';
import { useContext } from 'react'


export default function Header(){
    const { tema, trocarTema } = useContext(TemaContext)
    return(
        <Conteiner>
            <Entypo name="menu" size={30} color="white" />
            <Titulo>Quiz App</Titulo>
            <TouchableOpacity onPress={()=> {
                trocarTema()
                console.log(tema)
            }}>
                <AntDesign name="user" size={30} color="white" />

            </TouchableOpacity>
        </Conteiner>
    )
}