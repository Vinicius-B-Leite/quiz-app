import React, { Dimensions } from 'react-native'
import { quentoes } from '../../data'
import Header from './header'
import { ProgressBar } from 'react-native-paper';
import { useTheme } from 'styled-components';
import { Botao, Conteiner, ConteinerRespostaSelecionada, ConteinerRespota, Pergunta, QuizConteiner, Resposta, Respostas, RespostaSelecionada, TextoBotao } from './styles';
import { useState } from 'react';
import { IPergunta} from '../../types/IPergunta';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../routes/models';


type ResultsScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Results'>


export default function Quiz() {
    const theme = useTheme()
    const navigation = useNavigation<ResultsScreenProp>()
    const dimensions = Dimensions.get('screen')
    
    var [pontos, setPontos] = useState<number>(1)
    const [perguntaAtual, setPerguntaAtual] = useState<number>(0)
    const [progresso, setProgesso] = useState<number>(0)
    const [respostaSelecionada, setRespostaSelecionada] = useState<string>()
    const [perguntas, setPerguntas] = useState<IPergunta[]>(quentoes)
    

    const proximaPergunta = () => {
        if (respostaSelecionada == perguntas[perguntaAtual].respostaCerta) {
            console.log(pontos)
            setPontos(pontos + 1)
            console.log(pontos)
        }
        if (perguntaAtual == 4) {
            navigation.navigate("Results", {pontuacao: pontos})
            return
        }
        setPerguntaAtual(perguntaAtual + 1)
        setProgesso(progresso + 0.2)
    }
    const selecionaResposta = (resposta: string) => {
        setRespostaSelecionada(resposta)
    }
    return (
        <QuizConteiner>
            <Header setPontuacao={setPontos}/>
            <ProgressBar style={{ marginTop: '5%', borderRadius: 30, height: dimensions.height / 25 }} progress={progresso} color={theme.destaque} />
            <Conteiner>
                <Pergunta>{perguntas[perguntaAtual].pergunta}</Pergunta>
                <Respostas>
                    {
                        perguntas[perguntaAtual].respostas.map(r => {

                            return respostaSelecionada === r ? 
                                <ConteinerRespostaSelecionada key={r}>
                                    <RespostaSelecionada>{r}</RespostaSelecionada>
                                </ConteinerRespostaSelecionada>
                            :(
                                <ConteinerRespota key={r} onPress={()=> selecionaResposta(r)}>
                                    <Resposta>{r}</Resposta>
                                </ConteinerRespota>
                            )
                        })
                    }
                </Respostas>
                <Botao onPress={() => proximaPergunta()}><TextoBotao>Enviar</TextoBotao></Botao>
            </Conteiner>
        </QuizConteiner>
    )
}