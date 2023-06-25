import { useState } from "react"
import { sendMessage, isTyping} from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'

const MessageForm = (props) => {
     const {chatID, creds} = props

     const [value, setValue] = useState('')

     const handleSubmit = (event) => {
          event.preventDefault();
          const text=value.trim();
          if(text.length > 0 ) sendMessage(creds, chatID, {text})
          setValue('')
     }
     const handleChange = (event) => {
          setValue(event.target.value);
          isTyping(props, chatID);
     }
     const handleUpload = (event) => {
          sendMessage(creds, chatID, {files: event.target.files, text:''});
     }
     return (
          <>
               <div>
                    <form className="message-form" onSubmit={handleSubmit}>
                         <input className="message-input" placeholder="Write your message..." onSubmit={handleSubmit} onChange={handleChange} value={value}/>
                         <label htmlFor="upload-button">
                              <span className="image-button">
                                   <PictureOutlined className="picture-icon" />
                              </span>
                         </label>
                         <input type="file" id="upload-button" multiple={false} style={{display:'none'}} onChange={handleUpload}/>
                         <button type="submit" className="send-button">
                              <SendOutlined className="send-icon" />
                         </button>
                    </form>
               </div>
          </>
     )
}

export default MessageForm;