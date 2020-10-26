import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #63C2D1;
`;

export const Avatar = styled.Image`
    width:64px;
    height:64px;
    border-radius:16px;
    margin:8px;
`;
export const NameUser = styled.Text`
    color: white;
    font-size:16px;
`;
export const UpdateUserButton = styled.TouchableOpacity`
    height: 60px;
    background-color:#268596;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;
export const UpdateUserButtonText = styled.Text`
    color: white;
    font-size:16px;
    font-weight: bold;
`;
export const InputArea = styled.View`
    width: 100%;
    padding:16px 32px;
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
export const LogoutArea = styled.View`
    flex:1;
    margin:0px 16px;
`;