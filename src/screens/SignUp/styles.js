import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color:#63C2D1;
    flex:1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View`
    width: 100%;
    padding:32px;
`;
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #268596;
    border-radius:32px;
    align-items: center;
    justify-content: center;
`;
export const CustomButtonText = styled.Text`
    font-size:18px;
    color: white;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 64px;
    margin-bottom:16px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 12px;
    color: #268596;
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 12px;
    color: #268596;
    font-weight: bold;
    margin-left:8px;
`;
