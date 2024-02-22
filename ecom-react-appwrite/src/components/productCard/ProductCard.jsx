import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'sonner'
import './ProductCard.scss'

function ProductCard() {
    const context = useContext(myContext)
    const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
        filterPrice,setFilterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);
    
    const addCart = (product)=> {
        dispatch(addToCart(product));
        toast.success('added to cart');

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <section className="text-gray-600 body-font featured-product">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 rale-font" >Our Latest Collection</h1>
                    <div className="h-1 w-20 gold-primary rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {product.filter((obj)=> obj.title.toLowerCase().includes(searchkey))
                     .filter((obj) => obj.category.toLowerCase().includes(filterType))
                     .filter((obj) => obj.price.includes(filterPrice)).slice(0,8).map((item, index) => {
                        const { title, price, description, imageUrl,id } = item;
                        return (
                            <div    key={index} className="p-4 md:w-1/4  drop-shadow-sm cust-card " >
                                <div  className="h-full border  duration-300 ease-in-out    border-gray-400 border-opacity-20  overflow-hidden cursor-pointer" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} onClick={()=> window.location.href = `/#/productinfo/${id}`} >
                                    <div className="flex justify-center" >
                                        <img className="w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out coverobject" src={imageUrl} alt="blog" />
                                    </div>
                                    <div className="p-4 border-t border-opacity-20  border-gray-400">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 rale-font" style={{ color: mode === 'dark' ? 'white' : '', }}>Smaira Luxe</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 rale-font" style={{ color: mode === 'dark' ? 'white' : '', }}>{title}</h1>
                                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                        <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                                         
                                    </div>

                                </div>
                            </div>
                        )
                    })}




                </div>

            </div>
        </section >

    )
}

export default ProductCard