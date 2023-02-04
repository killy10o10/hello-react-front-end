import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/message/messageSlice';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <>
      <div>
          {message.map((m) => (
            <h3 className="text-center bg-warning animate__animated animate__bounceIn" key={m.id}>{m.greetings}</h3>
          ))}
      </div>
    </>
  )
}

export default Message;