import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, clearCart } from '../../redux/cartSlice';
import { toast } from 'sonner';
import {useNavigate} from 'react-router-dom'
// appwrite
import {databases} from '../../appwrite/appwriteConfig'
import {ID} from 'appwrite'
import './Cart.scss'
import nocart from '../../assets/home/nocart.png'

function Cart() {
  const navigate = useNavigate()
  const context = useContext(myContext)
  const { mode, getOrderData } = context;

  const dispatch = useDispatch()

  const cartItems = useSelector((state) => state.cart);
 
  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart")
  } 
  
  const clearAllCart = (item) => {
    dispatch(clearCart());
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmount(temp);
   }, [cartItems])
  
  const [quantityMap, setQuantityMap] = useState({});
  const increaseQuantity = (itemId) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [itemId]: (prevQuantityMap[itemId] || 0) + 1,
    }));
  };
  
  const decreaseQuantity = (itemId) => {
    setQuantityMap((prevQuantityMap) => {
      const newQuantity = (prevQuantityMap[itemId] || 1) - 1;
      return {
        ...prevQuantityMap,
        [itemId]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const updateTotalAmount = () => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
       const itemId = cartItem.$id;
      const quantity = quantityMap[itemId] || 1;
       temp += parseInt(cartItem.price) * quantity;
    });

    setTotalAmount(temp);
  };

  useEffect(() => {
      updateTotalAmount();
  }, [cartItems, quantityMap]);

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmout;
  // new ends

  /**========================================================================
   *!                           Payment Intigration
   *========================================================================**/ 

  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required")
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date(),
    }
    // razorpay
    var options = {
      key: import.meta.env.VITE_PAYMENT_GATEWAY_KEY,
      key_secret: import.meta.env.VITE_PAYMENT_GATEWAY_KEY_SECRET,
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "Smaira Luxe",
      description: "for testing purpose",
      // razorpay
      handler: function (response) {
         toast.success('Payment Successful')

        const paymentId = response.razorpay_payment_id;
        // const cartItemsJsonString = JSON.stringify(cartItems);
        const addressInfoJsonString = JSON.stringify(addressInfo);
         // Transform the array into the desired format
          const cartItemsJsonString1 = cartItems.reduce((acc, curr, index) => {
            acc[index] = {
              category: curr.category,
              date: new Date(curr.date).toDateString(),
              description: curr.description,
              title: curr.title,
              imageUrl: curr.imageUrl,
              price: curr.price,
              quantity: quantityMap[curr.id] || 1,
              // grand: grandTotal,
              time: new Date(curr.date).toDateString()
            };
            return acc;
          }, {});
          const cartItemsJsonString = JSON.stringify(cartItemsJsonString1);


        const orderInfo = {
          cartItemsJsonString,
          addressInfoJsonString,
          date: new Date(),
          email: JSON.parse(localStorage.getItem("user")).providerUid,
          userid: JSON.parse(localStorage.getItem("user")).userId,
          grand: String(grandTotal),
          paymentId
        }
       

  const addPromise = databases.createDocument('smaira-luxe','order-table', ID.unique(), orderInfo );
         addPromise.then(
            function(response){
              clearAllCart();
              getOrderData();
                navigate("/order");
            },
            function(error){
         
            }
          )
      },

      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();   
  }
  return (
    <div>
      {cartItems.length>0 ? (  
      <Layout className='cart'>
        <div className=" bg-gray-100 pt-5 mb-[0%]" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
          <h1 className="mt-5 mb-10 text-center text-4xl font-bold bilbo-font text-primary">Cart items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 py-4">
            <div className=" md:w-2/3">
              {cartItems.map((item, index) => {
       
                const { id, title, price, description, imageUrl } = item;
                // const quantity = quantityMap[id] || 1; // Default to 1 if quantity is not set
                const quantity = quantityMap[item.$id] || 1; // Default to 1 if quantity is not set
          
                return (
                  <div key={index} className="justify-between mb-6  border  drop-shadow-sm bg-white p-6  sm:flex  sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '' }}>
                    <img src={imageUrl} alt="product-image" className="w-full  sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                        <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{description}</h2>
                        <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className=" flex justify-center items-center">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.$id)}
                            className=" text-white cart-counter  font-medium rounded-l-sm text-sm px-4 py-2"
                          >
                            -
                          </button>
                          <p className="text-gray-900 mx-2" style={{ color: mode === 'dark' ? 'white' : '' }}>
                            {quantity}
                          </p>
                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.$id)}
                            className=" text-white cart-counter  font-medium rounded-r-sm text-sm px-4 py-2"
                          >
                            +
                          </button>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => deleteCart(item)}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 h-full  border bg-white p-6 shadow-md md:mt-0 md:w-1/3" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', }}>
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{totalAmout}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
                <p className="text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{shipping}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between mb-3">
                <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
                <div className>
                  <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{grandTotal}</p>
                </div>
              </div>
              {/* <Modal  /> */}
              <Modal
                name={name}
                address={address}
                pincode={pincode}
                phoneNumber={phoneNumber}
                setName={setName}
                setAddress={setAddress}
                setPincode={setPincode}
                setPhoneNumber={setPhoneNumber}
                buyNow={buyNow}
              />
            </div>
          </div>
        </div>
      </Layout>) 
      : (<Layout>
          <div className='flex w-100 items-center justify-center flex-col h-60 cart mt-40'>
          <img src={nocart} alt="" width={70}/>
          <p className=' text-sm'> Cart is Empty</p>
          <button onClick={()=>(navigate('/allproducts'))} className=' text-white px-5 py-2 cart-btn mt-10'>Shop Now</button>
          </div>
      </Layout>)}
    </div>
  
  )
}

export default Cart