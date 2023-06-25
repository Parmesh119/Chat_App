import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
     if(!localStorage.getItem('username')){
          <LoginForm />
     }
     return (
          <ChatEngine
               height="100vh"
               projectID="51c74134-a0ff-4b8e-a4d5-e97874688163"
               userName={localStorage.getItem('username')}
               userSecret={localStorage.getItem('password')}
               renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          />
     )
}

export default App;