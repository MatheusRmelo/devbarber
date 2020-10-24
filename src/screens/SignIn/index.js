import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';




import SignInput from '../../components/SignInput';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }
    const handleSignClick = async () => {
        if(email !== '' && password !== ''){
            let json = await Api.signIn(email, password);
            //console.log(json);

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
                alert('E-mail e/ou senha errados!');
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
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possuí uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
}