import {ProductPage} from "./pages/ProductPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";

const { Route, Routes } = require('react-router-dom');

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={ <ProductPage /> } />
                <Route path="/about" element={ <AboutPage /> } />
            </Routes>
        </>
    )
}

export default App;

// Time 1:24








//
// import {Product} from "./components/Product";
// import {useProducts} from "./hooks/products";
// import {Loader} from "./components/Loader";
// import {ErrorMessage} from "./components/ErrorMessage";
// import {Modal} from "./components/Modal";
// import {CreateProduct} from "./components/CreateProduct";
// import {useState} from "react";
// import {IProduct} from "./models";
//
// function App() {
//     const {loading, error, products, addProduct } = useProducts();
//     const [modal, setModal] = useState(true);
//
//     const createHandler = (product: IProduct) => {
//         setModal(false)
//         addProduct(product);
//     }
//
//     return (
//         <div className="container mx-auto max-w-2xl pt-5">
//             {loading && <Loader/>}
//             {error && <ErrorMessage error={error}/>}
//             { products.map(product => <Product product={product} key={product.id}/>)}
//             {modal && <Modal title="Create new product" onClose={() => setModal(false)}>
//                 <CreateProduct onCreate={createHandler}/>
//             </Modal>}
//             <button
//                 onClick={() => setModal(true)}
//                 className="fixed px-4 py-2 bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl">
//                 +
//             </button>
//         </div>
//     )
// }
//
// export default App;











//
// import React, {useEffect, useState} from 'react';
// import {Product} from "./components/Product";
// import axios, {AxiosError} from "axios";
// import {IProduct} from "./models";
//
// function App() {
//     const [products, setProducts] = useState([] as IProduct[]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('')
//
//     async function fetchProducts() {
//         try {
//             setLoading(true);
//             setError('')
//             const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
//             console.log('response', response);
//             setProducts(response.data);
//             setLoading(false);
//         } catch(e: unknown) {
//             const error = e as AxiosError;
//             setLoading(false);
//             setError(error.message);
//         }
//
//     }
//
//     useEffect(() => {
//         fetchProducts();
//         console.log('App component mounted');
//     }, []);
//
//
//     return (
//         <div className="container mx-auto max-w-2xl pt-5">
//             {loading && <p className="text-center">Loading...</p>}
//             {error && <p className="text-center text-red-600">{error}</p>}
//             { products.map(product => <Product product={product} key={product.id}/>)}
//
//             {/*// <Product product={products[0]} />*/}
//             {/*// <Product product={products[1]} />*/}
//             {/*// <Product product={ products[0]} title={'test'}/>*/}
//         </div>
//     )
// }
//
// export default App;
//
// // Time 47-25
//
