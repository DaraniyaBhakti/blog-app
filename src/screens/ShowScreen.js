import React,{useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({route,navigation}) => {
    const {state } = useContext(Context);
    const {id} = route.params;
    
    const blogPost = state.find(
        blogPost => blogPost.id === id
    )

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', 
                {id:id})}>
                    <Feather name='edit' size={28}/>
                </TouchableOpacity>
            ),
        })
    },[navigation])
    return(
        <View>
            
            <Text style={styles.label}>Title : {blogPost.title}</Text>
            <Text style={styles.label}>Content : {blogPost.content}</Text>
        </View>
    )
}

const styles  = StyleSheet.create({
    label:{
        fontSize:20,
        marginHorizontal:20,
        marginVertical:10
    },
})

export default ShowScreen;