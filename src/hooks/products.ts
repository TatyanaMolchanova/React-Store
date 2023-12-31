import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState([] as IProduct[]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setLoading(true);
            setError('')
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            console.log('response', response);
            setProducts(response.data);
            setLoading(false);
        } catch(e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }

    }

    useEffect(() => {
        fetchProducts();
        console.log('App component mounted');
    }, []);

    return { products, error, loading, addProduct }
}
