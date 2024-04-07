import CardDetailComponent from "@/component/CardDetailComponent";
import { BASE_URL } from "@/lib/constants";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
    params: {
        id: number
    };
    searchParams: { [key: string]: string | string[] | undefined };
};

const getData = async (id: number) => {
    const res = await fetch(`${BASE_URL}/api/products/${id}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id;


    const product = await fetch(`${BASE_URL}/api/products/${id}`)
    .then((res) => res.json());



    return {
        title: product.title,
        description: product.description,
        openGraph: {
            images: product.image,
        },
    };
}

export default async function Detail(props: Props) {
    const data = await getData(props.params.id);

    return (
        <div className="">
            <CardDetailComponent
                name={data?.name || "NoTitle"}
                desc={data?.desc || "No Description"}
                price={data?.price || 0}
                image={
                    data?.image ||
                    "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
                }
            />
        </div>
    );
}
