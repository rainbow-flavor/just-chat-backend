import React, { useRef } from 'react';
import {
    Button, Form, Input, Layout
  } from 'antd';
import SockJsClient from 'react-stomp';

const { Content } = Layout;

const Chat = () => {
    const $websocket = useRef (null); 
    const handleMsg = msg => { 
        console.log (msg); 
    };
    const handleClickSendTo = () => { 
        $websocket.current.sendMessage ('/public'); 
    }; 
    const handleClickSendTemplate = () => { 
        $websocket.current.sendMessage ('/Template'); 
    };


    return (
        <>
        <div>
        <h1 style={{ marginLeft: 10 }}>RANDOM CHAT</h1>
        <Content style={{
          background: '#e7e7e7', padding: 24, margin: 10, minHeight: 280,
        }}
        >         
        </Content>

        <SockJsClient 
            url="http://localhost:8080/test" 
            topics={['/topic/public']} 
            onMessage={msg => { console.log (msg); }} 
            ref={$websocket} 
        />

        <Form layout="inline" onFinish={handleClickSendTo}>
          <Form.Item>
            <Input id="msg" placeholder="Type something..." style={{ marginLeft: 10, width: 400 }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" style={{ marginLeft: 5 }} htmlType="submit" id="send">Send</Button>
            <Button type="danger" style={{ marginLeft: 5 }}>Disconnect</Button>
          </Form.Item>
        </Form>
      </div>   
        </>
    )
}

export default Chat
