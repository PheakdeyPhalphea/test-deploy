import UpdateComponent from '@/component/update/UpdateComponent';
import React from 'react'


type PropsType = {
    params: {
        id: number;
    }
    searchParams: string;
}


const BEST_URL = "https://store.istad.co"

const getData = async (id: number) => {
    const response = await fetch(`${BEST_URL}/api/products/${id}`);
    const data = await response.json();
    return data;
}


export default async function page(props : PropsType) {
    const data = await getData(props.params.id);
    return (
        <main className=' w-full '>
            <UpdateComponent
            fileProduct={null}
            category={data.category}
            price={data.price}
            desc={data.desc}
            name={data.name}
            quantity={data.quantity}
            image={data.image}
            id={data.id}
            seller={data.seller} />
        </main>
    )
}
