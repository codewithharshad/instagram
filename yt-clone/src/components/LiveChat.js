import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { getRandomName, makeRandomMessage} from '../utils/helper'



const LiveChat = () => {

  const[LiveMessage,setLiveMessage]=useState("")


const dispatch=useDispatch();

 const chatMessages=useSelector((store)=>store.chat.messages);

useEffect(()=>{
const i=setInterval(() => {
  
dispatch(
  addMessage({
    name:getRandomName(),
    message:makeRandomMessage(20)+"❤️👍",
  })
)




}, 2000);

return ()=>{
  clearInterval(i)
}


})

  return (
    <>
    <div className='ml-1 w-full h-[700px] p-2  border border-black bg-slate-100 rounded-lg overflow-y-scroll overflow-x-scroll flex flex-col-reverse'>
      <div>
    {chatMessages.map((c,i)=>(
    <ChatMessage key={i}
    name={c.name}
    message={c.message}/>
    ))}
    </div>
    </div>

<form className='w-full p-2 ml-1 border border-black  border-t-0 flex' 
onSubmit={(e)=>{
  e.preventDefault();

  dispatch(addMessage({
    name:"Test User",
    message:LiveMessage,
  })
  )
  setLiveMessage("");
}}>
<input className=' px-2  w-96 border boder-border-black  p-1' type='text'value={LiveMessage}onChange={(e)=>
setLiveMessage(e.target.value)}/>
<button className='mx-2 bg-black text-white p-1 px-5 rounded'>Send</button>
</form>
</>
  )
}

export default LiveChat;