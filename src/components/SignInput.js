import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width:100%;
    height: 60px;
    background-color:#83D6E3;
    flex-direction: row;
    border-radius: 32px;
    padding-left:16px;
    align-items: center;
    margin-bottom: 16px;
`;
const Input = styled.TextInput`
    flex:1;
    font-size:12px;
    color: #268596;
    margin-left: 8px;
`;


export default ({IconSvg, placeholder, value, onChangeText, secury}) => {
    return(
        <InputArea>
            <IconSvg width="24" height="24" fill="#268596" />
            <Input
                placeholder={placeholder}
                placeholderTextColor="#268596"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secury}
            />
        </InputArea>
    );
}