import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/message/messageSlice';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);
  console.log(message);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <div>
          {message.map((m) => (
            <p className="text-center animate__animated animate__bounceIn" key={m.id}>{m.greetings}</p>
          ))}
      </div>
    </>
  )
}

export default Message;