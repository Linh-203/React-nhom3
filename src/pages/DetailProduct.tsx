import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { IProduct } from '../common/product';
import productService from '../api/product';
import images from '../assets/images';
import CateSlide from '../components/CateSlide/CateSlide';



const DetailProduct = () => {

    const { id } = useParams();
    const [products, setProduct] = useState({});
    useEffect(() => {
        productService
            .getProductById(id)
            .then(({ data }) => setProduct(data.data[0]))
            .catch(({ response }) => {
                alert(response.data.message);
            });
    }, []);
    console.log(products);


    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (


        <div>

         <CateSlide />

            {Object.keys(products).length > 0 && (


                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
                    <div className="flex justify-center items-center lg:flex-row flex-col gap-8">


                        <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12  lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                            <div className=" w-full border-[1px] border-gray-200 lg:w-10/12 bg-gray-100 flex justify-center items-center">
                                <img src={products.images[0].url} alt="Wooden Chair Previw" />
                            </div>
                            <div className=" w-full lg:w-4/12 flex  lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                                {products.images.map((image, index) => (

                                    <div key={index} className=" mt-3 border-[1px] border-gray-200 flex justify-center items-center py-4">
                                        <img src={image.url} alt="Wooden chair - preview 1" />
                                    </div>

                                ))}
                            </div>
                        </div>
                        {/* <!-- Description Div --> */}

                        <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                            <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Home / {products.categoryId.name} / {products.name}</p>
                            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{products.name}</h2>



                            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{products.desc}</p>
                            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">${products.price}</p>

                            <div className="lg:mt-11 mt-10">
                                <div className="flex flex-row justify-between">
                                    <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                                    <div className="flex">
                                        <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                            -
                                        </span>
                                        <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />
                                        <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                            +
                                        </span>
                                    </div>

                                </div>
                                <hr className=" bg-gray-200 w-full my-2" />
                                <div className="flex flex-row justify-between items-center mt-4">
                                    <p className=" font-medium text-base leading-4 text-gray-600">Availability: {products.stock > 0 ? 'In stock' : 'Out of stock'}</p>
                                </div>

                                <hr className=" bg-gray-200 w-full mt-4" />


                            </div>

                            <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">Add to shopping bag</button>
                        </div>

                        {/* <!-- Preview Images Div For larger Screen--> */}

                    </div>


                    <div className="flex  justify-center items-center w-full">
                    <div className="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                        <div>
                           
                            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Great for drinks</p>
                            <p className="text-normal text-base leading-6 text-gray-600 mt-4">Here are all the great cocktail recipes you should know how to make, from the margarita to the whiskey sour. Cheers! </p>
                        </div>
                        <div>
                          
                            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Durable hardware</p>
                            <p className="text-normal text-base leading-6 text-gray-600 mt-4">Product durability is a key aspect of achieving a circular economy. ... Moreover, enhancing the durability of individual hardware components </p>
                        </div>
                        <div>
                         
                            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Eco-friendly</p>
                            <p className="text-normal text-base leading-6 text-gray-600 mt-4"> They re-use, recycle and reduce waste disposal in their lives. They conserve energy and natural resources</p>
                        </div>
                        <div>
                          
                            <p className="font-semibold text-xl leading-5 text-gray-800 lg:mt-10 mt-9">Minimal Design</p>
                            <p className="text-normal text-base leading-6 text-gray-600 mt-4">Minimalist interior design is very similar to modern interior design and involves using the bare essentials </p>
                        </div>
                    </div>
                </div>
                </div>
            )}

        </div>



    )
}

export default DetailProduct