import { useSelector } from "react-redux";
import AuthorPost from "./AuthorPost";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
    const posts = useSelector((store) => store.posts);
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
                    </article>
                ))
            }

        </section>
    )
}
export default PostsList;