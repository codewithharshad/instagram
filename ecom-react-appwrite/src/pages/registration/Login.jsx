import { useContext, useState } from 'react'
import myContext from '../../context/data/myContext'
import { toast } from 'sonner';
import Loader from '../../components/loader/Loader';
import { account } from "../../appwrite/appwriteConfig";
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/home/logo.svg'
import './Register.scss'

function Login() {
    const context = useContext(myContext)
    const {loading, setLoading} = context;

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const login = async () => {
        setLoading(true)
        try {
            const result = await account.createEmailSession(user.email,user.password);
            toast.success("Login successful")
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/')
            setLoading(false)
            
        } catch (error) {
 
            setLoading(loading)
        }

    }
   
    return (
        <div className=' flex justify-center items-center h-screen flex-col'>
            {loading && <Loader/>}
            <img src={logo} alt="" className='w-24 mb-10'/>
            <div className='px-10 py-10 login-bg'>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>
                        Login</h1>
                </div>
                <div>
                    <input type="email"
                    value={user.email}
                    // onChange={(e)=> setEmail(e.target.value)}
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
                    <input
                        type="password"
                        value={user.password}
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
                    onClick={login}
                        className=' login-btn w-full text-white font-bold  px-2 py-2 '>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login