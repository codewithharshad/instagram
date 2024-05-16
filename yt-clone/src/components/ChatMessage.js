import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
<img className='w-10' alt="logo" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"></img>

<span className="font-bold px-2">{name}</span>
<span>{message}</span>



    </div>
  )
}

export default ChatMessage