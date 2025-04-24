'use client';

import React, { useState } from 'react';
import { Button, Input, ConfigProvider, Dropdown } from 'antd';
import { PlusOutlined, ArrowUpOutlined } from '@ant-design/icons';
import UploadOptions from './UploadOptions';
import DocumentUploadModal from './DocumentUploadModal';
import { useRouter } from 'next/navigation';

const PromptHome = () => {
    const [isOpenFile, setIsOpenFile] = useState(false); 
    const router = useRouter(); 

    return (
        <div className='  w-full lg:h-[calc(100vh-120px)]  h-[calc(100vh-105px)] flex items-center justify-center '>
            <div>
             <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#0ea5e9',
                            borderRadius: 8,
                        },
                    }}
                >
                    <div className="w-full  mx-auto flex flex-col items-center">
                        <div className="text-center lg:mb-10 mb-7">
                            <h1 className="lg:text-2xl text-[20px]  font-medium lg:mb-6 mb-4 text-[#414141]">
                                Extract data from any document type
                            </h1>
                            <p className="text-sm  text-[#606060]">Choose the document to get started</p>
                        </div>

                        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 z-20">
                            <Dropdown
                                dropdownRender={() => <UploadOptions setIsOpenFile={setIsOpenFile} />}
                                trigger={['click']}
                                placement="bottom"
                                overlayClassName="custom-dropdown"
                            >
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<PlusOutlined />}
                                    className="flex items-center shadow-md hover:shadow-lg transition-all px-6  "
                                    style={{ height: "40px", borderRadius: "50px" }}
                                >
                                    Upload Document
                                </Button>
                            </Dropdown>

                            <button
                                className="border border-gray-200 hover:border-blue-400 transition-all px-6"
                                style={{
                                    height: "40px",
                                    borderRadius: "50px",
                                    border: "1px solid #E4E4E4",
                                    backgroundColor: "#FBFBFB",
                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                                }}
                            >
                                <span className='text-[#606060] text-[16px]'>  Recent Documents</span>
                            </button>
                        </div>

                        <div className="w-full lg:w-[650px]   ">
                            <Input
                                placeholder="Ask your need..."
                                size="large"
                                className="rounded-full w-full h-12 transition-all"
                                style={{
                                    height: "48px",
                                    borderRadius: "50px",
                                    border: "1px solid #E4E4E4",
                                    backgroundColor: "#FBFBFB",
                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
                                }}
                                suffix={
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon={<ArrowUpOutlined />}
                                        className="h-10 w-10 flex items-center justify-center" 
                                        onClick={()=>router.push("/new-chat")}
                                    />
                                }
                            />

                        </div>
                    </div>
                </ConfigProvider>


            </div>

            <DocumentUploadModal isOpenFile={isOpenFile} setIsOpenFile={setIsOpenFile} />
        </div>
    );
};

export default PromptHome;
