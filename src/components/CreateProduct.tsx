import React, {useState} from "react";
import {IProduct} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const productData: IProduct = {
    title: 'Product title',
    price: 100,
    description: 'Product description',
    image: 'https://picsum.photos/200/300',
    category: 'Product category',
    rating: {
        rate: 4.5,
        count: 100
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter product title');
            return;
        }

        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data);
    }

    const changeHandler = (event: any) => {
        setValue(event.target.value)
    }


    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                value={value}
                // onChange={event =>setValue(event.target.value)}
                onChange={changeHandler}
                placeholder="Enter product title..."
            />
            {error && <ErrorMessage error={error} />}
            <button className="py-2 px-4 border bg-yellow-400 hover:text-white">
                Create Product
            </button>
        </form>
    )
}
