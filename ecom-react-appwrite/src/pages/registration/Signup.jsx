import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext';
import { toast } from 'sonner';
import Loader from '../../components/loader/Loader';
import { account } from "../../appwrite/appwriteConfig";
import { v4 as uuid } from "uuid";
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/home/logo.svg'
import './Register.scss'

function Signup() {
 
    const navigate = useNavigate()
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNum: "",
        password: "",
      });

    const signup = async (e) => {
        e.preventDefault();
        setLoading(true)
        if (user.name === "" || user.phoneNum ==="" || user.email === "" || user.password === "") {
            return toast.error("All fields are required")
        }
        const accountPromise = account.create(
            uuid(), 
            user.email, 
            user.password, 
            user.name,
            user.phoneNum
        ); 
        accountPromise.then(
            function (response) {
              //navigate user to the login page
              navigate("/login");
              toast.success("Signup Succesfully");
              setLoading(false)
            },
      
            //handle error
            function (error) {
      
              toast.error("Signup Failed")
              setLoading(false);
            }
          );
    }

    return (
        <div className=' flex justify-center items-center h-screen flex-col singup'>
            {loading && <Loader/>}
            <img src={logo} alt="" className='w-24 mb-10'/>
            <div className='px-10 py-10 singup-bg '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        value={user.name}
                        // onChange={(e) => setName(e.target.value)}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                name: e.target.value
                            })
                        }}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>

                <div>
                    <input type="email"
                        value={user.email}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input type="number"
                        value={user.phoneNum}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                phoneNum: e.target.value
                            })
                        }}
                        name='phoneNum'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none'
                        placeholder='Phone Number'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={user.password}
                        // onChange={(e) => setPassword(e.target.value)}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className='uppercase singup-btn w-full text-white font-bold  px-2 py-2 '>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-yellow-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup