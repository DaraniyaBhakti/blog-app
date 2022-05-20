import React, { useContext } from 'react';
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather name='plus-circle' size={28}/>
                </TouchableOpacity>
            ),
        })
    },[navigation])

    return (
        <View>

            {/* <Button title='Add Post' onPress={addBlogPost} /> */}
            <FlatList
                data={state}
                keyExtractor={blogPosts => blogPosts.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show',{
                            id:item.id
                        })}>
                            <View style={styles.itemView}>

                                <Text style={styles.title}>{item.title} = {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>)
                }}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 18
    },

    icon: {
        fontSize: 24
    }

})
export default IndexScreen;