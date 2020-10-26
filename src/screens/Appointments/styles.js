import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#63C2D1;
`;
export const Scroller = styled.ScrollView`
    flex:1;
    padding: 0px 20px;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top:32px;
`;
export const ListArea = styled.View`
    margin: 16px 0px;
`;
export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top:32px;
    font-size:14px;
    color: white;
`;