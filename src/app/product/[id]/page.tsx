import React from "react";
import Image from "next/image";
import { singleProduct } from "@/data";

const SingleProduct = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row">
            {/* Image Container  */}
            {singleProduct.img && (
                <div className="relative">
                    <Image
                        src={singleProduct.img}
                        alt="Image"
                        className="object-contain"
                        fill
                    />
                </div>
            )}
            {/* Text Container  */}
            <div className="">
                <h1>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
            </div>
        </div>
    );
};

export default SingleProduct;
