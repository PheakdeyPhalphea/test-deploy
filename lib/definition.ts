export type ProductType = {

	id: number;
	seller : string;
	name: string;
	price: number;
	category: string;
	desc: string;
	image: string;
	quantity: number;


};


type CatageoryType = {
	name: string;
	icon: string;
};

export type ProductPostType = {
	category: CatageoryType;
	name: string;
	desc: string;
	image: string;
	price: number;
	quantity: number;
};

export const initialValues = {
	categoryName: "",
	categoryIcon: "",
	name: "",
	desc: "",
	image: "",
	price: 0,
	quantity: 0,
	fileIcon: null,
	fileProduct: null,
};

export type FormDataUpdate = {readonly id: number, category: {name: any}, name: string, desc: string, image?: string, price: string, quantity: string, seller: string, fileProduct: any}
export type FormDelete = {
    readonly id: string;
    category: {
        name: any;
    };
    name: string;
    desc: string;
    image ?: string;
    price: string;
    quantity: string;
    seller: string;
}