import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminSideBar from '../AdminSideBar/AdminSideBar';



const AddBooks = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const bookData = {
            name: data.name,
            author: data.author,
            price: data.price,
            imageURL: imageURL
        };

        const url = `https://fathomless-shore-28553.herokuapp.com/addBook`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('server response', res))
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5025c7b89b9227cb3def831a08b2a19e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <AdminSideBar />
                </div>
                <div className="col-lg-9 p-5">
                    <h5>Add Books</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="name">Book Name</label>
                                <input name="name" ref={register} placeholder="Enter Book Name" className="form-control" />

                                <label htmlFor="price" className="mt-2" >Add Price</label>
                                <input name="price" ref={register} placeholder="Enter Price" className="form-control" />
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="author">Author Name</label>
                                <input name="author" ref={register} placeholder="Enter Author Name" className="form-control" />

                                <label htmlFor="upload" className="mt-2">Add Book Cover Photo</label> <br />
                                <input type="file" name="upload" onChange={handleImageUpload} />

                            </div>
                        </div>
                        <input type="submit" className="form-control mt-3 btn-success" />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default AddBooks;