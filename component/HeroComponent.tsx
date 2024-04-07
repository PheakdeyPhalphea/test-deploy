import React from 'react';

const backgroundImageUrl = 'https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw0cfc3423/images/page-designer/2023/september/16017_Comp_A_Desktop.jpg?sw=1616&sfrm=jpg';

const HeroSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` , height:'700px  '}}>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                data-aos="fade-right">
                <div style={{paddingTop:'150px'}} className="max-w-xl ">
                    <h1 style={{fontSize:'60px'}} className="font-bold text-white ">
                        Let us find your

                        <strong className="block font-extrabold text-teal-700">
                            Forever Home.
                        </strong>
                    </h1>

                    <p style={{fontSize:'25px'}} className=" text-gray-300">
                        Shop the brand new New Balance Forest
                    </p>

                    <div className="mt-8 flex gap-4 text-center">
                        <a
                            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto">
                            Shop Now
                        </a>

                        <a
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto">
                            About Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
