import React,{useContext,useState} from 'react';
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
    
    const {addBlogPost } = useContext(Context);
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')

    
    return(
        <View>
            <Text style={styles.label}>Enter Title : </Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content : </Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button title='Add Blog Post' 
                onPress={() => {
                    addBlogPost(title,content,() => navigation.navigate('Index'));
                    }}/>
        </View>
    )
}

const styles  = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:20,
        marginVertical:10,
        padding:5
        
    },
    label:{
        fontSize:20,
        marginHorizontal:20,
        marginVertical:10
    },
    
})

export default CreateScreen;