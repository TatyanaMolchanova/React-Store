import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    console.log('props', product);
    const [details, setDetails] = useState(false);
    const btnBgClassName = details? 'bg-yellow-40' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border bg-yellow-40', btnBgClassName];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button className={btnClasses.join(' ') }
            onClick={() => setDetails(!details)}
            >
                { details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}
