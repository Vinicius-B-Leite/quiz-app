import styled from "styled-components/native";


export const ConteinerHome = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.backgroundPrimario};
`
export const Conteiner = styled.View`
    padding: 5% 5%;
    height: 100%;
    
`

export const Status = styled.View`
    flex-direction: row;
    background-color: ${({ theme }) => theme.destaque};
    justify-content: space-around;
    align-items: center;
    padding: 4% 0%;
    border-radius: 8px;
`

export const Info = styled.View`
    justify-content: center;
    align-items: center;
`

export const Descricao = styled.Text`
    color: ${({ theme }) => theme.texto};
`

export const Valor = styled.Text`
        color: ${({ theme }) => theme.texto};
        font-size: 28px;

`


export const Categorias = styled.View`
    justify-content: space-evenly;
`

export const Categoria = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.backgroundSecundario};
    height: 22%;
    align-items: center;
    padding: 4% 0%;
    border-radius: 8px;
    flex-direction: row;
    padding: 5% 10%;
    justify-content: space-around;
`

export const NomeCategoria = styled.Text`
    color: ${({theme}) => theme.texto};
    font-size: 23px;
`