import React, { SafeAreaView, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { BotaoVoltar, Card, CompletouQuiz, Conteiner, Pontuação, PorcentagemAcertos, Titulo } from './styles';
import { useTheme } from 'styled-components';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../routes/models';

type ResultsScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Results'>
type Parametros = {
    Results: {
        "pontuacao": number
    }
}

export default function Results() {
    const theme = useTheme()
    const route = useRoute<RouteProp<Parametros, 'Results'>>()
    const pontuacao = route.params.pontuacao
    const navigation = useNavigation<ResultsScreenProp>()

    const calculaPorcentagem = () => {
        let porcentagem = (pontuacao / 5) * 100
        return porcentagem
    }

    return (
        <Conteiner>
            <BotaoVoltar onPress={()=> navigation.navigate("Home")}>
                <AntDesign name="close" size={30} color={theme.texto} />
            </BotaoVoltar>
            <Card>
                <AntDesign name="Trophy" size={60} color={theme.texto} />
                <Titulo>Parabéns</Titulo>
                <PorcentagemAcertos>{calculaPorcentagem()}% Acertos</PorcentagemAcertos>
                <CompletouQuiz>Você completou o quiz</CompletouQuiz>
                <Pontuação>Pontuação {pontuacao}/5</Pontuação>

            </Card>
        </Conteiner>
    )
}