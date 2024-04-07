"use client";
import { ProductType } from "@/lib/definition";
import React from 'react';
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Modal } from "flowbite-react";
import Image from "next/image";
import { customStyles } from "@/lib/costomStyles";
import { useRouter } from "next/navigation";




export default function Dashboard() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDetail, setProductDetail] = useState<ProductType | null>(null);
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const ENDPOINT = "https://store.istad.co/api/products/";
  // fetch products
  useEffect(() => {
    setLoading(true);
    fetch(`${ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  const cusStyles = customStyles;
  const [imagePlaceholder, setImagePlaceholder] = useState<string>(
    "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
  );

  const handleViewProduct = (product: ProductType) => {
    setProductDetail(product);
    setOpenModal(true);
  };
  const handleUpdate = (product: ProductType) => {
    setSelectedProduct(product);
    router.push(`/updateproduct/${product.id}`);
  };
  const handleDelete = (product: ProductType) => {
    setSelectedProduct(product);
    router.push(`/delete/${product.id}`); 
  };

  const columns: TableColumn<ProductType>[] = [
    {
      name: "Product Title",
      selector: (row) => row.name,
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img className="w-16 h-16" src={row.image} alt={row.image} />
      ),
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row): any => (
        <div className=" flex gap-1">

          <button onClick={() => handleViewProduct(row)} className="text-white px-2 bg-blue-600 rounded-md p-1" >
            view
          </button>
          <button onClick={() => handleUpdate(row)
          } className=" bg-green-700 p-1 px-2 rounded-md  text-white " title="update" >
            update
          </button>

          <button onClick={() => handleDelete(row)} className=" bg-red-700 p-1 px-2 rounded-md  text-white " title="delete">
            delete
          </button>

        </div>
      ),
    },
  ];




  return (
    <main className=" w-full my-15 ">
      <DataTable
        fixedHeader
        progressPending={loading}
        columns={columns}
        data={products}
        customStyles={cusStyles}
        striped
        highlightOnHover
      />
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Detial</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Image
              src={productDetail?.image || imagePlaceholder}
              alt={productDetail?.name || "Untitle"}
              width={250}
              height={300}
            />

            <h3>Seller by : {productDetail?.seller || "Unknow"}</h3>
            <h3>Quantity :  {productDetail?.quantity || 0}</h3>
            <h3 className="text-3xl text-gray-700">{productDetail?.name || "Untitle"}</h3>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productDetail?.desc || "No description"}
            </p>

          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
}

