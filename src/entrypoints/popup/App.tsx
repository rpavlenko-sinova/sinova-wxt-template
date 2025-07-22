import { useState } from 'react';
import { sendMessage } from 'webext-bridge/popup';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';
import { Button } from '@/components/ui/button';
import { BridgeMessage } from '@/lib/enums/bridge';

function App() {
  const [count, setCount] = useState(0);
  const [messageStatus, setMessageStatus] = useState<string>('');

  const sendMessageToBackground = async () => {
    try {
      const response = await sendMessage(BridgeMessage.PopupMessage, {
        message: `Hello from popup! Count is ${count}`,
        timestamp: Date.now(),
      });

      if (response && typeof response === 'object' && 'message' in response) {
        setMessageStatus(`Message sent successfully: ${response.message}`);
      } else {
        setMessageStatus('Message sent successfully');
      }
      console.log('Response from background:', response);
    } catch (error) {
      setMessageStatus(`Error sending message: ${error}`);
      console.error('Error sending message:', error);
    }
  };

  const sendActionToBackground = async (action: string) => {
    try {
      const response = await sendMessage(BridgeMessage.PopupAction, {
        action: action,
        count: count,
        timestamp: Date.now(),
      });

      if (response && typeof response === 'object' && 'action' in response) {
        setMessageStatus(`Action sent successfully: ${response.action}`);
      } else {
        setMessageStatus('Action sent successfully');
      }
      console.log('Response from background:', response);
    } catch (error) {
      setMessageStatus(`Error sending action: ${error}`);
      console.error('Error sending action:', error);
    }
  };

  return (
    <>
      <div>
        <a
          href="https://wxt.dev"
          target="_blank"
        >
          <img
            src={wxtLogo}
            className="logo"
            alt="WXT logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>WXT + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR 12345
        </p>

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Button
            onClick={sendMessageToBackground}
            style={{ padding: '8px 16px' }}
          >
            Send Message to Background
          </Button>
          <Button
            onClick={() => sendActionToBackground('increment')}
            style={{ padding: '8px 16px' }}
          >
            Send Increment Action
          </Button>
          <Button
            onClick={() => sendActionToBackground('reset')}
            style={{ padding: '8px 16px' }}
          >
            Send Reset Action
          </Button>
        </div>

        {messageStatus && (
          <div
            style={{
              marginTop: '10px',
              padding: '8px',
              backgroundColor: messageStatus.includes('Error') ? '#ffebee' : '#e8f5e8',
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {messageStatus}
          </div>
        )}
      </div>
      <p className="read-the-docs">Click on the WXT and React logos to learn more</p>
    </>
  );
}

export default App;
