import React, {Fragment, useState} from "react";

const EditBlog = ({blog}) => {
    const [description, setDescription] = useState(blog.description);

    //edit decription function

    const updateDescription = async(e) => {
        e.preventDefault();
        try {
const body = {description};
const response = await fetch(`http://localhost:5000/blogs/${blog.blog_id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body)
});

window.location = "/Blog";
        } catch (err){
            console.error(err.message);
        }
    }


    return (
        <Fragment>
           
        <button 
            type="button" 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${blog.blog_id}`}>
                Edit
        </button>


        <div class="modal" id={`id${blog.blog_id}`}
        onClick={()=> setDescription(blog.description)}>
            <div class="modal-dialog">
                <div class="modal-content">

     
        <div class="modal-header">
            <h4 class="modal-title">Edit Blog</h4>
            <button type="button" 
            class="close" 
            data-dismiss="modal"
            onClick={()=> setDescription(blog.description)}>
                &times;</button>
        </div>

      
        <div class="modal-body">
            <input type="text" 
            className="form-control" 
            value={description} onChange={e => setDescription(e.target.value)}>
            </input>
        </div>

        
        <div class="modal-footer">
            <button type="button" 
            class="btn btn-warning" 
            data-dismiss="modal"
            onClick={e => updateDescription(e)}
            >Edit</button>

            <button type="button" 
            class="btn btn-danger" 
            data-dismiss="modal"
            onClick={()=> setDescription(blog.description)}
            >Close</button>
        </div>

        </div>
    </div>
    </div>
        </Fragment>);
};

export default EditBlog;