import React, {Fragment, useEffect, useState} from "react";

import EditBlog from "./EditBlog";
import InputBlog from "./InputBlog";

const ListBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    //delete blog function
    const deleteBlog = async (id) => {
        try {
    const deleteBlog = await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "DELETE"
    });
    
    setBlogs(blogs.filter(blog => blog.blog_id !== id));
        }catch (err) {
            console.error(err.message)
        }
    }
    

    const getBlogs = async () => {
        try {
            const response = await fetch("http://localhost:5000/blogs");
            const jsonData = await response.json();

           setBlogs(jsonData);

        }catch (err) {
            console.error(err.message);
        }
    };

useEffect(() => {
    getBlogs();
}, []);

    return (<Fragment>
        <InputBlog></InputBlog>
        <table class="table mt-5 text-left">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {blogs.map(blog => (
          <tr key={blog.blog_id}>
          <td>{blog.description}</td>
          <td>
              <EditBlog blog={blog}>
              </EditBlog>
          </td>
          <td>
              <button className= "btn btn-danger" 
              onClick={()=> deleteBlog(blog.blog_id)
              }>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </Fragment>)
};

export default ListBlogs;