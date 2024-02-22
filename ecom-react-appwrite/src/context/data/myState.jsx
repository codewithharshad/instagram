import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { toast } from 'sonner';
import { v4 as uuid } from "uuid";

// appwrite
import {databases} from '../../appwrite/appwriteConfig'

function myState(props) {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }

    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        date: new Date(),
    });

    const addProduct = async () => {

        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("all fields are required")
        }

        setLoading(true)
        const addPromise = databases.createDocument('smaira-luxe','65b5ae5806075287896a', uuid(), products);
        addPromise.then(
            function(response){
                 toast.success("Added product successfully");
                 setTimeout(() => {
                            window.location.href = '/#/dashboard'
                }, 800);
                  setLoading(false)
            },
            function(error){
                //console.log(error);
                setLoading(false)
            }
          )
          setProducts("");
     
    }

    const [product, setProduct] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);

    const getProductData = async () => {

        setLoading(true);
        const productData = databases.listDocuments('smaira-luxe','65b5ae5806075287896a');
        productData.then(
            function(response){
                 setTotalProduct(response.total)
                 const productArray = response.documents.map((doc)=>({
                    ...doc,
                    id: doc.$id,
                  }))
                  setProduct(productArray);
                 setLoading(false)
            },
            function(error){
                //console.log(error);
                setLoading(false)
            }
          )
     

    }

    useEffect(() => {
        getProductData();
    }, []);

    // update product 
    const edithandle = (item) => {
        setProducts(item)
    }
    const updateProduct = async () => {
        setLoading(true)
        const updatePromise =  databases.updateDocument(
            'smaira-luxe','65b5ae5806075287896a', products.$id, {
                title: products.title,
                price: products.price,
                imageUrl: products.imageUrl,
                category: products.category,
                description: products.description,
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            });
            updatePromise.then(
                function(response){
                     toast.success("Product Updated successfully")
                    setTimeout(() => {
                        window.location.href = '/#/dashboard'
                    }, 800);
                    getProductData();
                     setLoading(false)
               
                },
                function(error){
                    //console.log(error);
                    setLoading(false)
                }
              )
    }
    // delete product
    const deleteProduct = async (item) => {
        setLoading(true)
        const deletePromise = databases.deleteDocument('smaira-luxe','65b5ae5806075287896a', item.id);
        deletePromise.then(
            function(response){
                 toast.success('Product Deleted successfully');
                getProductData();
                 setLoading(false);
            },
            function(error){
                //console.log(error);
                setLoading(false)
            }
          )    
    }

    const [order, setOrder] = useState([]);
    const [totalOrder, seTotalOrder] = useState([]);
    // update OrderStatus
    const editOrderhandle = (item) => {
        
        setOrder(item)
    }
    const updateOrderStatus = async () => {
        setLoading(true)
        const updateStatusPromise =  databases.updateDocument(
            'smaira-luxe','order-table', order.id, {
                status: order.status,
                statusDate: new Date(),
            });
            updateStatusPromise.then(
                function(response){
                    toast.success("Order Status Updated Status")
                    setTimeout(() => {
                        window.location.href = '/#/dashboard'
                    }, 800);
                    getOrderData();
                     setLoading(false)
                },
                function(error){
                    //console.log(error);
                    setLoading(false)
                }
              )
             
    }
    // end
    const getOrderData = async () => {
        setLoading(true)
        const orderDataPromise = databases.listDocuments('smaira-luxe','order-table');
        orderDataPromise.then(
            function(response){
               
                seTotalOrder(response.total)
            // Extract data from the documents
                const originalOrdersArray = response.documents.map(doc => ({
                    ...doc,
                    id: doc.$id,
                  }));
                 //   format
                const ordersArray = originalOrdersArray.map(item => {
                    const addressInfo = JSON.parse(item.addressInfoJsonString);
                    const cartItems = JSON.parse(item.cartItemsJsonString);
                     const formattedCartItems = Object.values(cartItems).map(cartItem => ({
                      id: cartItem.id,
                      title: cartItem.title,
                      category: cartItem.category,
                      price: cartItem.price,
                      description: cartItem.description,
                      imageUrl: cartItem.imageUrl,
                      date: cartItem.date,
                      time: cartItem.time,
                      quantity: cartItem.quantity,
                    //   grand: cartItem.grand,
                    }));
                  
                    return {
                      id: item.id,
                      userid: item.userid,
                      email: item.email,
                      grand: item.grand,
                      status: item.status,
                      statusDate: item.statusDate,
                      paymentId: item.paymentId,
                      date: item.date,
                      addressInfo: {
                        name: addressInfo.name,
                        address: addressInfo.address,
                        pincode: addressInfo.pincode,
                        phoneNumber: addressInfo.phoneNumber,
                        date: addressInfo.date,
                      },
                      cartItems: formattedCartItems,
                    };
                  });
                  
                  // Set the product state and update loading status
                  setOrder(ordersArray);
                  setLoading(false);

            },
            function(error){
                //console.log(error);
                setLoading(false)
            }
          )
    }

    const [user, setUser] = useState([]);
    const getUserData = async () => {
        // setLoading(true)
    }

    useEffect(() => {
        getOrderData();
        getUserData();
    }, []);

    const [searchkey, setSearchkey] = useState('')
    const [filterType, setFilterType] = useState('')
    const [filterPrice, setFilterPrice] = useState('')

    const resetFilters = () => {
        setSearchkey('');
        setFilterType('');
        setFilterPrice('');
     };

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, editOrderhandle, updateOrderStatus, order, setOrder,
            user, searchkey, setSearchkey,filterType,setFilterType,
            filterPrice,setFilterPrice, resetFilters, totalOrder, totalProduct, getOrderData
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default myState