import styled from "styled-components/native";

export const Conteiner = styled.SafeAreaView`
    background-color: ${({theme}) => theme.backgroundPrimario};
    flex: 1;
`

export const BotaoVoltar = styled.TouchableOpacity`
    align-self: flex-end;
`

export const Card = styled.View`
    height: 90%;
    
    justify-self: center;
    align-self: center;
    color: white;
    justify-content: center;
    align-items: center;
`

export const Titulo = styled.Text`
    font-size: 25px;
    color: #718582;
`

export const PorcentagemAcertos = styled.Text`
    font-size: 50px;
    color: green;
`

export const CompletouQuiz = styled.Text`
    font-size: 20px;
    color: ${({theme}) => theme.texto};
`

export const Pontuação = styled.Text`
    color: ${({theme}) => theme.destaque};
`