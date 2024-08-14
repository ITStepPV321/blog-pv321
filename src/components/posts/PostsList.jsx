import { useSelector, useDispatch } from "react-redux";
import { postDelete } from "../../app/appSlices/postsSlice";
import AuthorPost from "./AuthorPost";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
    const posts = useSelector((store) => store.posts);
    const dispatch=useDispatch();
    console.log(posts);
    
    return (
        <section>
            <h2>Add New Post</h2>
            <AddPostForm/>
            <h2>Posts</h2>
            <hr />
            {
                posts.map(post => (
                    <article key={post.id}>
                        <h3>{post.title}</h3>
                        <p> {post.content} ...</p>
                        <p><AuthorPost userId={post.userId}/></p>
                        <button onClick={()=>dispatch(postDelete({id: post.id}))}>delete</button>
                    </article>
                ))
            }

        </section>
    )
}
export default PostsList;