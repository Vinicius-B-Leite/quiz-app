import styled from "styled-components/native";

export const ConteinerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5% 5%;
    background-color: ${({theme})=> theme.backgroundSecundario};
`

export const Titulo = styled.Text`
    color: ${({theme})=> theme.texto};
    font-size: 20px;
`