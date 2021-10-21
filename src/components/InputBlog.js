import React, {Fragment, useState} from "react";
import Title from './Title';

const InputBlog = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("https://oh-so-green.netlify.app/Blog", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
window.location ="/Blog";

        }catch (err){
            console.error(err.message)
        }
    }

    return (
    <Fragment>
        <Title name="oh so green" title="Blog!"></Title>
        <h2 className="text-center mt-5">Kita Got Something to Say</h2>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            <input type="text" className="form-control" value={description}
            onChange={e => setDescription(e.target.value)}/>
            <button className="btn btn-success">Add</button>
        </form>
        </Fragment>
    );
};

export default InputBlog;