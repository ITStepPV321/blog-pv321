import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdd } from "../../app/appSlices/postsSlice";

const AddPostForm = () => {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState(0);

    const handlerTitleChange = event => setTitle(event.target.value);
    const handlerContentChange = event => setContent(event.target.value);
    const handlerAuthorChange = event => setUserId(event.target.value);

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (title && content){
            dispatch(postAdd(title,content,userId));
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            <label htmlFor="title">Post Title</label> 
            <input 
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={handlerTitleChange}
             />
             <br/>
            <label htmlFor="userId">Post Author</label> 
             <select name="userId" id="userId" value={userId} onChange={handlerAuthorChange} >
                <option key="0" value="0">select author</option>
                   {/* <option value=...>data</option> */}
                   {users.map(user=>(
                    <option key={user.id} value={user.id}>{user.fullname}</option>
                   ))}
             </select>
             <br/>
             <label htmlFor="content">Post Content</label>
            <textarea 
                id="content"
                name="content"
                value={content}
                onChange={handlerContentChange}
             />
             <br/>
             
             <button type="submit"> Add Post</button>
        </form>
    )
};

export default AddPostForm;