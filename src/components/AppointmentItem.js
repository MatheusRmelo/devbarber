import React from 'react';
import styled from 'styled-components/native';

const Area = styled.View`
    background-color: white;
    padding:16px;
    margin-bottom: 20px;
    border-radius:20px;
`;
const UserArea = styled.View`
    flex:1;
    flex-direction:row;
    align-items: center;
`;
const Avatar = styled.Image`
    width:56px;
    height:56px;
    border-radius: 20px;
`;
const UserName = styled.Text`
    font-size:18px;
    font-weight:bold;
    color: black;
`;

const SplitArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top:8px;
`;
const ServiceText = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:black;
`;
const DateText = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:white;
    padding:10px 15px;
    background-color:#4EADBE;
    border-radius: 8px;
`;


export default ({data}) => {

    let d = data.datetime.split(' ');
    //Tempo
    let time = d[1].substring(0,5);
    //data
    let date = new Date(d[0]);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    month = month < 10 ? '0'+month: month;
    day = day < 10 ? '0'+day: day;
    let dateString = `${day}/${month}/${year}`;

    return(
        <Area>
            <UserArea>
                <Avatar source={{uri: data.barber.avatar}} />
                <UserName>{data.barber.name}</UserName>
            </UserArea>

            <SplitArea>
                <ServiceText>{data.service.name}</ServiceText>
                <ServiceText>R$ {data.service.price}</ServiceText>
            </SplitArea>
            <SplitArea>
                <DateText>{dateString}</DateText>
                <DateText>{time}</DateText>
            </SplitArea>
        </Area>
    );
}