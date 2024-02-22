import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';
import '../../pages/cart/Cart.scss';
import more from '../../assets/order/more.png'
import less from '../../assets/order/close.png'
import nocart from '../../assets/home/nocart.png'
import {useNavigate} from 'react-router-dom'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user')).userId;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate()


  const getStatusStyles = (status) => {
    switch (status) {
      case 'Yet to confirm':
        return { backgroundColor: '#FF5757', color: '#fff' };
      case 'Processing':
        return { backgroundColor: '#578CFF', color: '#fff' };
      case 'Shipped':
        return { backgroundColor: '#FFA74D', color: '#fff' };
      case 'Delivered':
        return { backgroundColor: '#6AFF57', color: '#111' };
      default:
        return { backgroundColor: 'gray', color: '#111' };
    }
  };

  const handleToggle = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Layout>
      {loading && <Loader />}
      {order.length > 0 ? (
        <>
          <div className="h-full py-10 cust-bg">
            {order
              .filter((obj) => obj.userid == userid)
              .map((order) => {
                return (
                  <div
                    key={order.paymentId}
                    className="mx-auto max-w-5xl justify-center content-center px-6 md:flex md:space-x-6 xl:px-0 order  flex-col"
                  >
                    {order.cartItems.slice(0, 1).map((item) => (
                      <div className="md:w-2/3 custom-margin" key={item.id}>
                        <div className="justify-between my-2 mx-2  bg-white p-6 border sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
                          <img src={item.imageUrl} alt="product-image" className="w-full  sm:w-40" />
                          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                              <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                              <p className="mt-1 text-s text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                              <p className="mt-1 text-xs p-1 text-gray-700 border rounded-sm inline border-yellow-500" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                X{item.quantity !== undefined ? String(item.quantity) : ''}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {order.cartItems.length > 1 && (
                      // <button
                      //   className="text-blue-500 mt-2 cursor-pointer toggle-btn"
                      //   onClick={() => handleToggle(order.paymentId)}
                      // >
                      //   {expandedOrderId === order.paymentId
                      //     ? 'Hide complete order'
                      //     : 'View complete order'}
                      // </button>
                      <div className='cust-image-container'>
                        <div className="toggle-btn"
                      onClick={() => handleToggle(order.paymentId)}
                      >
                        <img
                          src={expandedOrderId === order.paymentId ? less : more}// Replace with your image source
                          alt="Your Image Alt Text"
                          className="hover-image"
                          onMouseEnter={() => setShowMessage(true)}
                          onMouseLeave={() => setShowMessage(false)}
                        />
                        {showMessage && <div className="tooltip">
                          {expandedOrderId === order.paymentId
                          ? 'Hide complete order'
                           : 'Show complete order'}
                        </div>}
                      </div>
                      </div>
                    )}

                    {expandedOrderId === order.paymentId && (
                      <>
                        {order.cartItems.slice(1).map((item) => (
                          <div className="md:w-2/3 custom-margin" key={item.id}>
                            <div className="justify-between my-2 mx-2  bg-white p-6 border sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
                              <img src={item.imageUrl} alt="product-image" className="w-full  sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                                  <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                                  <p className="mt-1 text-s text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                                  <p className="mt-1 text-xs p-1 text-gray-700 border rounded-sm inline border-yellow-500" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    X{item.quantity !== undefined ? String(item.quantity) : ''}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    <p
                      className="mt-1 text-xs text-gray-700 status"
                      style={{
                        color: mode === 'dark' ? 'white' : '',
                      }}
                    >
                      Status:{' '}
                      <span
                        style={{
                          backgroundColor: getStatusStyles(order.status).backgroundColor,
                          color: getStatusStyles(order.status).color,
                        }}
                      >
                        {order.status}
                      </span>
                    </p>
                    {/* updated Date */}
                    <p
                      className="mt-1 text-xs text-gray-700 status-date"
                      style={{
                        color: mode === 'dark' ? 'white' : '',
                      }}
                    >
                      Last Update:{' '}
                      <span
                      
                      >
                        { !order.statusDate? new Date().toLocaleDateString() : new Date(order.statusDate).toLocaleDateString()}
                      </span>
                    </p>
                     
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div className='flex w-100 items-center justify-center flex-col h-60 cart mt-40'>
        <img src={nocart} alt="" width={70}/>
        <p className=' text-sm'> No Orders</p>
        <button onClick={()=>(navigate('/allproducts'))} className=' text-white px-5 py-2 cart-btn mt-10'>Shop Now</button>
        </div>
      )}
    </Layout>
  );
}

export default Order;
