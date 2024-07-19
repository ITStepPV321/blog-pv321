import { UseSelector, useSelector } from "react-redux";

const PostsList = () => {
    const posts = useSelector((store) => store.posts);
    console.log(posts);
    return (
        <section>
            <h2>Posts</h2>
            
        </section>
    )
}
export default PostsList;