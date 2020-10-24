import React from 'react';
import styled from 'styled-components/native';

import Stars from './Stars';

const Area = styled.TouchableOpacity`
    background-color: white;
    margin-bottom: 16px;
    border-radius: 20px;
    padding: 16px;
    flex-direction: row;
`;
const Avatar = styled.Image`
    width: 88px;
    height:88px;
    border-radius:20px;
`;
const InfoArea = styled.View`
    margin-left: 16px;
    justify-content: space-between;
`;
const UserName = styled.Text`
    font-size:16px;
    font-weight: bold;
`;
const SeeProfileButton = styled.View`
    width:85px;
    height:26px; 
    border: 1px solid #4EADBE;
    border-radius:10px;
    justify-content: center;
    align-items: center;
`;
const SeeProfileButtonText = styled.Text`
    font-size:12px;
    color:#268596;
`;


export default ({data}) => {
    return (
        <Area>
            <Avatar source={{uri: data.avatar}} />

            <InfoArea>
                <UserName>{data.name}</UserName>

                <Stars stars={data.stars} showNumber={true} />

                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}