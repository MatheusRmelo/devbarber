import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: white;
`;
export const Scroller = styled.ScrollView`
    flex:1;
`;
export const FakeSwiper = styled.View`
    height: 140px; 
    background-color: #63C2D1;
`;
export const PageBody = styled.View`
    background-color: white;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;
export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top:-32px;
`;
export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left: 32px;
    margin-right: 24px;
    border-width:4px;
    border-color: white;
`;
export const UserInfo = styled.View`
    flex:1;
    justify-content: flex-end;
`;
export const UserInfoName = styled.Text`
    color: black;
    font-size:16px;
    font-weight: bold;
    margin-bottom: 8px;
`;
export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: white;
    border: 2px solid #999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin:0px 16px;
    margin-top: 16px;
`;

export const TestimonialArea = styled.View``;
export const SwipeDot = styled.View`
    width:10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${props => props.color};
    margin: 3px;
`;
export const SwipeItem = styled.View`
    flex:1;
    background-color: #63C2D1;
   
`;

export const SwipeImage = styled.Image`
    width: 100%;
    height:240px;
`;
export const BackButton = styled.TouchableOpacity`
    position:absolute;
    left: 0;
    top:0;
    z-index:9;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 56px;
`;


export const ServicesTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #268596;
    margin-left: 32px;
    margin-bottom: 32px;
`;
export const ServiceArea = styled.View`
    margin-top: 16px;
`;
export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 32px;
    margin-right: 24px;
    margin-bottom: 18px;
`;
export const ServiceInfo = styled.View`
    flex:1;
`;
export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #268596;
`;
export const ServicePrice = styled.Text`
    font-size: 16px;
    color: #268596;
`;
export const ServiceChooseButton = styled.TouchableOpacity`
    background-color: #4AADBE;
    border-radius: 10px;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
`;
export const ServiceChooseButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: white;
`;