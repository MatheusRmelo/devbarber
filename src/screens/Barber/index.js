import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import { 
    Container,
    Scroller,
    PageBody,
    BackButton,
    LoadingIcon,
  
    TestimonialArea,

    SwipeDot,
    SwipeItem,
    SwipeImage,
    FakeSwiper,

    UserInfoArea,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,

    ServiceItem,
    ServicesTitle,
    ServiceArea,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChooseButton,
    ServiceChooseButtonText

 } from './styles';
import Stars from '../../components/Stars';
import { Text } from 'react-native';

import Api from '../../Api';

import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars
    });
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        const getBarberInfo = async () => {
            setLoading(true);

            let json = await Api.getBarber(userInfo.id);
            if(json.error === ''){
                setUserInfo(json.data);
            }else{
                alert('ERRO:' + json.error);
            }

            setLoading(false);
        }
        getBarberInfo();
    }, []);

    const handleBackButton = () =>{
        navigation.goBack();
    }

    return (
        <Container>
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0
                    ?
                    <Swiper
                        style={{height: 240}}
                        dot={<SwipeDot color="#FFF" />}
                        activeDot={<SwipeDot color="#000" />}
                        paginationStyle={{top:16, right:16, bottom: null, left: null}}
                        autoplay={true}
                    >
                       {userInfo.photos.map((item, key)=>(
                           <SwipeItem key={key}>
                               <SwipeImage source={{uri: item.url}} resizeMode="cover" />
                           </SwipeItem>
                       ))} 
                    </Swiper>
                    :
                    <FakeSwiper>

                    </FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri: userInfo.avatar}} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Stars stars={userInfo.stars} showNumber={true} />
                        </UserInfo>
                        <UserFavButton>
                            <FavoriteIcon width="24" height="24" fill="red" />
                        </UserFavButton>
                    </UserInfoArea>
                    {
                        loading &&
                        <LoadingIcon size="large" color="#000" />
                    }
                    {userInfo.services &&
                        <ServiceArea>
                            <ServicesTitle>Lista de serviços</ServicesTitle>

                            {
                                userInfo.services.map((item, key)=>(
                                    <ServiceItem key={key}>
                                        <ServiceInfo>
                                            <ServiceName>{item.name}</ServiceName>
                                            <ServicePrice>R$ {item.price}</ServicePrice>
                                        </ServiceInfo>
                                        <ServiceChooseButton>
                                            <ServiceChooseButtonText>
                                                Agendar
                                            </ServiceChooseButtonText>
                                        </ServiceChooseButton>
                                    </ServiceItem>
                                ))
                            }

                        </ServiceArea>
                    }

                    
                    <TestimonialArea>

                    </TestimonialArea>
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}> 
                <BackIcon width="44" height="44" fill="white" />
            </BackButton>
        </Container>
    );
}