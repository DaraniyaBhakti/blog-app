import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
const EditScreen = ({ navigation, route }) => {

    const { state, editBlogPost } = useContext(Context)

    const { id } = route.params;

    const blogPost = state.find(
        blogPost => blogPost.id === id
    )

    return (
        <BlogPostForm titleLabel='Edit Title :'
            contentLabel='Edit Content :'
            initialValue={{ title: blogPost.title, content: blogPost.content }}
            btnTitle='Edit Blog Post'
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop());
            }} />
    )
}


export default EditScreen;