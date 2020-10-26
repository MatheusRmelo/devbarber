import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import { 
    Container,
    Scroller,
    PageBody,
    BackButton,
    LoadingIcon,
  
    

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
    ServiceChooseButtonText,

    TestimonialArea,
    TestimonialItem,
    TestimonialBody,
    TestimonialInfo,
    TestimonialName

 } from './styles';

import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

import Api from '../../Api';

import FavoriteIcon from '../../assets/favorite.svg';
import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg';
 
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
    const [favorited, setFavorited] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        const getBarberInfo = async () => {
            setLoading(true);

            let json = await Api.getBarber(userInfo.id);
            if(json.error === ''){
                setUserInfo(json.data);
                setFavorited(json.data.favorited);
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
    const handleFavClick = () => {
        setFavorited(prevState=>!prevState);
        Api.setFavorite( userInfo.id );
    }
    const handleServiceChoose = (key) =>{
        setSelectedService(key);
        setShowModal(true);
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
                        <UserFavButton onPress={handleFavClick}>
                            {
                                favorited ?
                                <FavoriteFullIcon width="24" height="24" fill="red" />
                                :
                                <FavoriteIcon width="24" height="24" fill="red" />
                            }
                            
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
                                            <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                                        </ServiceInfo>
                                        <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                                            <ServiceChooseButtonText>
                                                Agendar
                                            </ServiceChooseButtonText>
                                        </ServiceChooseButton>
                                    </ServiceItem>
                                ))
                            }

                        </ServiceArea>
                    }

                    {userInfo.testimonials && userInfo.testimonials.length > 0 &&
                        <TestimonialArea>
                            <Swiper
                                style={{height:110}}
                                showsPagination={false}
                                showsButtons={true}
                                prevButton={<NavPrevIcon width="35" height="35" fill="black" />}
                                nextButton={<NavNextIcon width="35" height="35" fill="black" />}
                            >
                                {userInfo.testimonials.map((item,k)=>(
                                    <TestimonialItem key={k}>
                                        <TestimonialInfo>
                                            <TestimonialName>{item.name}</TestimonialName>    
                                            <Stars stars={item.rate} showNumber={false} />
                                        </TestimonialInfo>
                                        <TestimonialBody>
                                            {item.body}
                                        </TestimonialBody>
                                    </TestimonialItem>
                                ))}


                            </Swiper>
                        </TestimonialArea>
                    }
                    
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}> 
                <BackIcon width="44" height="44" fill="white" />
            </BackButton>


            <BarberModal
                show={showModal}
                setShow = {setShowModal}
                user={userInfo}
                service={selectedService}
            >

            </BarberModal>
        </Container>
    );
}