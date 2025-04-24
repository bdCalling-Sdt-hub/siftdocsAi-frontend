import React from 'react';
import FreeChat from './FreeChat';
import ChatWithDocument from './ChatWithDocument';
import { Button, Input } from "antd";
import { ArrowUpOutlined } from '@ant-design/icons';
import { Paperclip } from 'lucide-react';

const NewChat = () => {
    return (
        <div className='lg:w-[85%] w-full lg:ps-[100px] lg:h-[calc(100vh-120px)]  h-[calc(100vh-105px)] flex flex-col'>
        {/* Scrollable content */}
        <div className='flex-1 overflow-y-auto px-4'>
            <div className='flex flex-col items-center justify-center gap-4 py-4'>
                <div className='w-full flex flex-col gap-20'>
                    <FreeChat />
                    <ChatWithDocument />
                </div>
            </div>
        </div>

        {/* Fixed input bar at the bottom */}
        <div className="px-4 py-3  ">
            <div className='w-full flex items-center justify-center'>
                <div className="w-full">
                    <Input
                        placeholder="Ask your need..."
                        size="large"
                        className="rounded-full w-full h-12 transition-all"
                        style={{
                            height: "56px",
                            borderRadius: "50px",
                            border: "1px solid #E4E4E4",
                            backgroundColor: "#FBFBFB",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                        }}
                        suffix={
                            <div className='flex items-center gap-4'>
                                <Button
                                    shape="circle"
                                    icon={<Paperclip size={20} color='#606060' />}
                                    className="h-8 w-8 flex items-center justify-center"
                                />
                                <Button
                                    type='primary'
                                    shape="circle"
                                    icon={<ArrowUpOutlined />}
                                    className="h-8 w-8 flex items-center justify-center"
                                />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    </div>
    );
};

export default NewChat;