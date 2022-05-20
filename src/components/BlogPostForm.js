import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';

const BlogPostForm = (props) => {

    const [title,setTitle] = useState(props.initialValue.title)
    const [content,setContent] = useState(props.initialValue.content)
    return(
        <View>
            <Text style={styles.label}>{props.titleLabel} </Text>
            <TextInput style={styles.input} value={title} onChangeText={(newText) => setTitle(newText)}/>
            <Text style={styles.label}>{props.contentLabel}</Text>
            <TextInput style={styles.input} value={content} onChangeText={(newText) => setContent(newText)}/>
            <Button title={props.btnTitle}
                onPress={() => props.onSubmit(title,content)}/>
        </View>
    )

}

BlogPostForm.defaultProps = {
   initialValue:{
        title:'',
        content:''
    }
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

export default BlogPostForm;