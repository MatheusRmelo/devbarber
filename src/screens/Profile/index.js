import React, { useState, useContext, useEffect } from 'react';
import { 
    Container,
    UserArea,
    Avatar,
    InputArea,
    CustomButton,
    CustomButtonText,
    UpdateUserButton,
    UpdateUserButtonText,
    LogoutArea
} from './styles';
import { Text, Button } from 'react-native';

import { UserContext } from '../../contexts/UserContext';


import { useNavigation } from '@react-navigation/native';
import Api from '../../Api';


import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';


export default () => {
    const navigation = useNavigation();
    const { state: user} = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogoutClick = async () => {
        await Api.logout();

        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }
    const handleUserUpdateClick = async () => {
        let body = {};
        let erro = false;
        if (name){
            body = {...body, name};
        }
        if( password ){
            if( password === confirmPassword ){
                body = {...body, password,confirmPassword }
            }else{
                alert("Senha e confirmação de senha não batem!");
                erro = true;
            }
        }
        if( email ){
            body = {...body, email};
        }
        if (!erro){
            let res = await Api.updateUser(body);
            if(res.error === '') {
                console.log(res);
            } else {
                alert("Erro: "+res.error);
                console.log(res.error);
            }
        }
       
        
        
       
    }
    return (
        <Container>
            <Avatar source={{uri: user.avatar}} />
            <InputArea>
                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={name}
                    onChangeText={t=>setName(t)}
                />
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={t=>setEmail(t)}
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={password}
                    onChangeText={t=>setPassword(t)}
                    secury={true}
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Confirme a sua senha"
                    value={confirmPassword}
                    onChangeText={t=>setConfirmPassword(t)}
                    secury={true}
                />

                <UpdateUserButton onPress={handleUserUpdateClick}>
                    <UpdateUserButtonText>Atualizar o usuário</UpdateUserButtonText>
                </UpdateUserButton>
            </InputArea>
            <LogoutArea>
                <UpdateUserButton onPress={handleLogoutClick}>
                        <UpdateUserButtonText>Sair</UpdateUserButtonText>
                </UpdateUserButton>
            </LogoutArea>
            
           
            
        </Container>
    );
}