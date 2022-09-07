import React, { StatusBar, ToastAndroid} from 'react-native'
import { useTheme } from 'styled-components'
import Header from './header'
import { FontAwesome, Entypo, Fontisto } from '@expo/vector-icons';
import { Categoria, Categorias, Conteiner, Descricao, Info, Status, Valor, ConteinerHome, NomeCategoria } from './styles'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamsList } from '../../routes/models';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>


export default function Home() {
    const theme = useTheme()
    const navigation = useNavigation<HomeScreenProp>()

    const categorias = [
        {
            icon: <FontAwesome name="hourglass-1" size={30} color={theme.texto} />,
            nome: 'História'
        },

        {
            icon: <Fontisto name="world-o" size={30} color={theme.texto} />,
            nome: 'Geografia'
        },
        {
            icon: <Entypo name="calculator" size={30} color={theme.texto} />,
            nome: 'Matemática'
        }
    ]

    return (
        <ConteinerHome>
            <StatusBar backgroundColor={theme.backgroundSecundario} />
            <Header />
            <Conteiner>
                <Status>
                    <Info>
                        <Descricao>Respondidas</Descricao>
                        <Valor>0</Valor>
                    </Info>
                    <Info>
                        <Descricao>Ranking</Descricao>
                        <Valor>1°</Valor>
                    </Info>
                </Status>

                <Categorias>
                    {
                        categorias.map(categoria => {
                            return (
                                <Categoria key={categoria.nome} onPress={() => categoria.nome === 'História' ? navigation.navigate("Quiz") : ToastAndroid.show("Categoria em desenvolvimento", ToastAndroid.LONG)}>
                                    {categoria.icon}
                                    <NomeCategoria>{categoria.nome}</NomeCategoria>
                                </Categoria>
                            )
                        })
                    }

                </Categorias>
            </Conteiner>
        </ConteinerHome>
    )
}