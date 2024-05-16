import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
  const [searchParams]=useSearchParams();
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(closeMenu())
  },[])
  return (
   <div className='flex flex-col  '  >
     <div className='px-0 flex  ' style={{ width: '100%' }}> 
      <div  style={{ width: '70%' }}>
          <iframe
          style={{ width: '100%', minWidth: '820px' }}
          height="700"
          src={"https://www.youtube.com/embed/"+ searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          ></iframe>  
      </div>
      <div className=" "  style={{ width: '30%' }} >
        <LiveChat/>
      </div>
    </div>
    <CommentsContainer/>
</div>


  )
}

export default WatchPage