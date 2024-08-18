const MessageItem = ({message,isSender,time}) => {
  return (
    <div className={`message-item-wrapper mt-2 mb-2  row  m-0 p-0 ${isSender?'justify-content-end':'justify-content-start'}`}>
      <div className="message-item bg-light w-auto m-0 p-3">
        <p className="m-0 p-0 w-auto">{message}</p>
        <p className="time-message m-0 p-0 text-secondary text-end">{time}</p>
      </div>
    </div>
  );
};

export default MessageItem;
