import styled from "styled-components/native";


export const QuizConteiner = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundPrimario};
`

export const Conteiner = styled.View`
    padding: 5% 4%;
    height: 80%;
    justify-content: space-between;
`

export const Pergunta = styled.Text`
    color: ${({ theme }) => theme.texto};
    font-size: 20px;
    text-align: justify;
    height: 20%;
`

export const Respostas = styled.View`
    justify-content: space-between;
    height: 65%;
`


export const ConteinerRespota = styled.TouchableOpacity`
    background-color: ${ ({theme}) => theme.botaoInativo};
    padding: 2% 5%;
    height: 22%;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`
export const Resposta = styled.Text`
    font-size: 15px;
    text-align: justify;
    color: 'blakc';
`

export const ConteinerRespostaSelecionada = styled(ConteinerRespota)`
    background-color: ${({theme}) => theme.destaque};
`
export const RespostaSelecionada = styled(Resposta)`
    color: ${({theme}) => theme.texto};
`
export const Botao = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.destaque};
    padding: 2%;
    border-radius: 10px;
`

export const TextoBotao = styled.Text`
    color: ${({ theme }) => theme.texto};
    font-size: 18px;
`