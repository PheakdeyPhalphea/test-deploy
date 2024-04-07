'use client'
import { useRouter } from 'next/navigation';
import { Field, Form, Formik } from 'formik';
import style from './style.module.css';
import { ACCESS_TOKEN, BASE_URL } from '@/lib/constants';
import { AiFillWarning } from "react-icons/ai";




export type FormDataUpdate = {
    readonly id: number,
    category: { name: any },
    name: string,
    desc: string,
    image?: string,
    price: string,
    quantity: string,
    seller: string,
    fileProduct: any
}

export type FormDelete = {
    readonly id: number;
    category: {
        name: any;
    };
    name: string;
    desc: string;
    image?: string;
    price: string;
    quantity: string;
    seller: string;
}

const DeleteComponentLayout = ({
    id,
    category,
    name,
    price,
    image,
    quantity,
    desc,
    seller,
}: FormDelete) => {


    const initialValues: FormDataUpdate = {
        id: id,
        category: { name: category },
        name: name,
        price: price,
        image: image,
        quantity: quantity,
        desc: desc,
        seller: seller,
        fileProduct: null || image
    };

    const router = useRouter();

    const handleDelete = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/products/${id}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            });
            console.log('response api :', response);
            if (response.ok) {
                router.push('/');
            } else {
            }
        } catch (error) {
            console.error('Error during product deletion:', error);
        }
    };

    return (
        <main className={style.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleDelete}>
                <Form style={{ width: '500px' }}>
                    <h1 className={`${style.title}`}>Delete Product</h1>
                    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        <img
                            alt=""
                            src={image}
                            className="h-56 w-full object-cover"
                        />

                        <div className="bg-white p-4 sm:p-6">
                            <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                            <a href="#">
                                <h3 className="mt-0.5 text-3xl text-gray-900">{name} </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {desc}
                            </p>
                        </div>
                    </article>
                    {
                            seller === "Long Piseth" ? (
                                <div className="mb-5 flex justify-between">
                                    <button type="submit" className={`${style.button}`}>Delete</button>
                                    {/* button cancel */}
                                    <button onClick={() => router.push('/dashboard')} className={`${style.button}`}>
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div className="mb-5 flex gap-2 items-center text-red-700" >
                                    
                                    <AiFillWarning /><p>You are not authorized to delete this product.</p>
                                </div>
                            )
                        }

                </Form>
            </Formik>
        </main>
    );
};

export default DeleteComponentLayout;
