import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }
    const handleSignClick = async () => {
        if(name !== '' && email !== '' && password !== ''){
            let json = await Api.signUp(name, email, password);

            if(json.token){
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type:'setAvatar',   
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });
                
            }else{
                alert('Erro:' + json.error);
            }
        }else{
            alert("Preencha os campos!");
        }
    }
    return(
        <Container>
            <BarberLogo width="100%" height="160" />

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

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possuí uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}