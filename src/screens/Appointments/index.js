import React, { useState, useEffect } from 'react';
import { 
    Container,
    HeaderArea, 
    HeaderTitle,
    Scroller,
    EmptyWarning,
    LoadingIcon,
    ListArea
} from './styles';

import Api from '../../Api';

import { RefreshControl } from 'react-native';


import AppointmentItem from '../../components/AppointmentItem';
export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(()=>{
        getAppointments();
    }, [])

    const getAppointments = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getAppointments();
        if(res.error === ''){
            setList(res.list);
        }else{
            alert("ERROR:"+ res.error);
        }
    
        setLoading(false)
    }
    return (
        <Container>
            <Scroller refreshControl={<RefreshControl refreshing={loading} onRefresh={getAppointments} />}>
                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há agendamentos.</EmptyWarning>
                }
                <ListArea>
                    {list.map((item,k)=>(
                        <AppointmentItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}