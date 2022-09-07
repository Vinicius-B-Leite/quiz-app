import styled from "styled-components/native";

export const Conteiner = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.backgroundSecundario};
    padding: 12% 5%;
    border-bottom-left-radius: 40px ;
    border-bottom-right-radius: 40px;
`

export const Titulo = styled.Text`
    color: ${({theme})=> theme.texto};
    font-size: 30px;

`