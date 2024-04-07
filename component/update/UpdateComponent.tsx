'use client';
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from './style.module.css';
import { useState } from "react";
import Image from "next/image";
import { ACCESS_TOKEN, BASE_URL } from "@/lib/constants";
import { AiFillWarning } from "react-icons/ai";




const validationSchema = Yup.object().shape({
    category: Yup.object().shape({
        name: Yup.string().required('Required'),
    }),
    name: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    quantity: Yup.string().required('Required'),
    desc: Yup.string().required('Required'),
});


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
    readonly id: string;
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

const UpdatePageLayout = (
    { category, name, price, image, quantity, desc, seller, id }: FormDataUpdate) => {

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
    const [imagePreview, setImagePreview] = useState("");

    // const handleUpload = async (file: any,name: any,typeFile: "product"
    // ) => {
    //     const formData = new FormData();
    //     formData.append("name", name);
    //     formData.append("image", file);

    //     const rest = await fetch(`${BASE_URL}file/${typeFile}/`, {
    //         method: "POST",
    //         headers: {
    //             'Authorization': `Bearer ${ACCESS_TOKEN}`
    //         },
    //         body: formData,
    //     });

    //     const data = await rest.json();
    //     return data.image;
    // };


    const handleUpdateProduct = async (productPut: FormDataUpdate) => {
        try {
            const responseURL = await fetch(`${BASE_URL}/api/products/${productPut.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                },
                body: JSON.stringify(productPut)
            });
            console.log("responseURL of put " + responseURL);
            if (responseURL.ok) {
                router.push('/dashboard');
            } else {
            }
        } catch (error) {
            console.error('Error during product update:', error);
        }
    }

    return (
        <main className={`${style.container} w-full`}>
            <Formik initialValues={initialValues}
                onSubmit={handleUpdateProduct}
                validationSchema={validationSchema}>
                {({ setFieldValue }) => (
                    <Form className="bg-gray-100 p-4 rounded-lg w-96">
                        <h1 className={`${style.title}`}>Update Product</h1>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="name">
                                Name
                            </label>
                            <Field
                                type="text"
                                placeholder="Name"
                                name="name"
                                id="name"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="name" component="div" className={`${style.error}`} />
                        </div>


                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="category.name">
                                Category
                            </label>
                            <Field
                                type="text"
                                placeholder="Category"
                                name="category.name"
                                id="category.name"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="category.name" component="div" className={`${style.error}`} />
                        </div>

                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="price">
                                Price
                            </label>
                            <Field
                                type="text"
                                placeholder="Price"
                                name="price"
                                id="price"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="price" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="quantity">
                                Quantity
                            </label>
                            <Field
                                type="text"
                                placeholder="Quantity"
                                name="quantity"
                                id="quantity"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="quantity" component="div" className={`${style.error}`} />
                        </div>
                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="image">
                                Image
                            </label>
                            <CustomInput
                                name="fileProduct"
                                setFieldValue={setFieldValue}
                                setImagePreview={setImagePreview}
                            />
                            {imagePreview && <Image src={imagePreview} alt="preview" width={200} height={200} />}
                            <ErrorMessage name="fileProduct" component="div" className={`${style.error}`} />
                        </div>

                        <div className="mb-5">
                            <label className={`${style.label}`} htmlFor="desc">
                                Description
                            </label>
                            <Field
                                type="textarea"
                                placeholder="Description"
                                name="desc"
                                id="desc"
                                component="textarea"
                                className={`${style.input}`}
                            />
                            <ErrorMessage name="desc" component="div" className={`${style.error}`} />
                        </div>
                        {
                            seller === "Long Piseth" ? (
                                <div className="mb-5 flex justify-between">
                                    <button type="submit" className={`${style.button}`}>Update</button>
                                    {/* button cancel */}
                                    <button onClick={() => router.push('/dashboard')} className={`${style.button}`}>
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div className="mb-5 flex gap-2 items-center text-red-700" >
                                    
                                    <AiFillWarning /><p>You are not authorized to update this product.</p>
                                </div>
                            )
                        }


                    </Form>
                )}
            </Formik>
        </main>
    )
}

const CustomInput = ({ field, setFieldValue, setImagePreview }: any) => {
    const handleUploadFile = (e: any) => {
        const file = e.target.files[0];
        const localUrl = URL.createObjectURL(file);
        setImagePreview(localUrl);
        setFieldValue('fileProduct', file);
    };
    return (
        <div>
            <input onChange={(e) => handleUploadFile(e)} type="file" />
        </div>
    );
};

export default UpdatePageLayout;
