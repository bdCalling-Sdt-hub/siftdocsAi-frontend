/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { Button, Input } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

const LargeDataset = ({
    zoomPluginInstance,
    pageNavigationPluginInstance,
}: {
    zoomPluginInstance: any;
    pageNavigationPluginInstance: any;
}) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = () => {
        if (message.trim()) {
            setMessages((prev) => [...prev, message]);
            setMessage('');
        }
    };

    return (
        <div className="h-full w-full grid lg:grid-cols-3 grid-cols-1 overflow-hidden">
            {/* Left Side PDF Viewer */}
            <div className="lg:col-span-2 border-e-[12px] border-white overflow-y-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@5.1.91/build/pdf.worker.min.js">
                    <div className="h-full w-full">
                        <Viewer
                            fileUrl="/example.pdf"
                            theme={{ theme: 'auto' }}
                           defaultScale={SpecialZoomLevel.PageWidth}  
                            renderLoader={(percentages: number) => (
                                <div style={{ width: '100%' }}>
                                    Loading... ({Math.round(percentages)}%)
                                </div>
                            )}
                            plugins={[pageNavigationPluginInstance, zoomPluginInstance]}
                        />
                    </div>
                </Worker>
            </div>

            {/* Right Side Input and Chat Bubble */}
            <div className="col-span-1 relative lg:h-full h-[450px] lg:mt-0 mt-8 ">
                {/* Message bubble */}
                <div className='overflow-y-auto'>
                    {messages.length > 0 && (
                        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] flex flex-col gap-2 max-h-[87%] overflow-y-auto pr-2 pb-1">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className="self-end max-w-[75%] bg-[#EEF1F4] px-4 py-2 rounded-2xl shadow text-sm whitespace-pre-wrap break-words"
                                >
                                    {msg}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%]">
                    <Input
                        placeholder="Ask your need......"
                        size="large"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onPressEnter={handleSend}
                        className="rounded-full w-full h-12 transition-all"
                        style={{
                            height: '48px',
                            borderRadius: '50px',
                            border: '1px solid #E4E4E4',
                            backgroundColor: '#fefefe',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.09)',
                        }}
                        suffix={
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<ArrowUpOutlined />}
                                className="h-8 w-8 flex items-center justify-center"
                                onClick={handleSend}
                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default LargeDataset;
