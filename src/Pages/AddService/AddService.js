import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
        fetch('https://secret-basin-73192.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                // event.target.reset();
            })
    };

    return (
        <div className='w-75 mx-auto mt-5'>
            <h2 className='text-center'>Please Add a Service</h2>
            <form className='w-75 mx-auto d-flex flex-column gap-3' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' {...register("name", { required: true })} />
                <textarea placeholder='Description' {...register("description", { required: true })} />
                <input placeholder='Price' {...register("price", { required: true })} />
                <input placeholder='Photo URL' {...register("img")} />
                <input className='btn btn-dark' type="submit" value='Add a Service' />
            </form>
        </div>
    );
};

export default AddService;