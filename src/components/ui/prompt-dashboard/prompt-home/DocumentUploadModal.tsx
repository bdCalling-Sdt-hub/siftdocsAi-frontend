"use client";

import React, { useState } from 'react';
import { Modal, Input, Upload, UploadFile, ConfigProvider } from 'antd';


const { Dragger } = Upload;

interface DocumentUploadModalProps {
    isOpenFile: boolean;
    setIsOpenFile: (isOpenFile: boolean ) => void;
}

const DocumentUploadModal: React.FC<DocumentUploadModalProps> = ({
    isOpenFile,
    setIsOpenFile,  
}) => { 

  const [documentName, setDocumentName] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentName(e.target.value);
  };

  const handleUploadChange = (info:{ fileList: UploadFile[] } ) => {
    setFileList(info.fileList);
  };

  const handleSubmit = () => {
    setIsOpenFile(false); 
  };

  const uploadProps = {
    name: 'file',
    multiple: true,
    fileList,
    onChange: handleUploadChange,
    beforeUpload: () => false, 
    accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png',
  };

  return (
    <Modal
      open={isOpenFile}
      onCancel={()=>setIsOpenFile(false)}
      footer={null}
      width={840}
      className="document-upload-modal"
      closeIcon={false}
      centered
    >
      <div className="lg:px-6 px-1 py-8">
        <h2 className="lg:text-2xl text-xl font-medium text-[#000000] mb-6">Create your document type</h2>
        
        <div className="mb-6">
          <label htmlFor="document-name" className="block lg:text-[16px] text-[14px] text-[#414141] mb-2">
            Name your document
          </label>
          <Input
            id="document-name"
            value={documentName}
            onChange={handleNameChange}
            placeholder="doc rep01"
            className="w-full h-12 rounded-md text-base" 
            style={{ borderRadius: "50px" , border:"1px solid #E0E0E0" , height:"42px" }}
          />
        </div>
        

        <ConfigProvider
  theme={{
    token: {
        colorPrimary: "#12A3E1" , 
        colorBgMask:"#ffffff" , 
        borderRadiusLG: 18
    },
  }}
> 
        <Dragger {...uploadProps} className="custom-upload-dragger ">
          <div className="lg:p-10 p-1">
            <p className="text-sm mb-2 font-normal text-[#414141]">
              Drag and drop files here
            </p>
            <p className="text-sm text-[#929292] mb-4">or</p>
             

            <button
            className="border border-gray-200 hover:border-blue-400 transition-all px-6 " 
            style={{ 
                height:"40px",
                borderRadius: "50px",
                border: "1px solid #E4E4E4",
                backgroundColor: "#FBFBFB",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
              }}
          >
           <span className='text-primary lg:text-[16px] text-sm'> Click here to upload</span> 
          </button> 

          <p className="lg:text-[12px] text-[12px] text-center text-[#929292] lg:tracking-wide mt-6">
          Supported formats: PDF,Case file, Medical records
        </p>
        <p className="text-[12px] text-center text-[#929292] tracking-wide">
          file size should be maximum 1 gb and its should&apos;t be password protected
        </p>
         
          </div>
        </Dragger>

</ConfigProvider>
        
  
        
        <div className="mt-8 flex justify-end gap-6">
        <button
            className="border border-gray-200 hover:border-blue-400 transition-all px-6 "  
            onClick={()=>setIsOpenFile(false)}
            style={{ 
                height:"40px",
                borderRadius: "50px",
                border: "1px solid #E4E4E4",
                backgroundColor: "#FBFBFB",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
              }}
          >
           <span className='text-[#929292] text-[16px]'> Back </span> 
          </button> 

          <button
            className="border border-primary hover:border-blue-400 transition-all px-6 "  
            onClick={handleSubmit}
            style={{ 
                height:"40px",
                borderRadius: "50px",
                border: "1px solid #12a3e1",
                backgroundColor: "#FBFBFB",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.09)",
              }}
          >
           <span className='text-primary text-[16px]'> Create </span> 
          </button> 

        </div>
      </div>
    </Modal>
  );
};

export default DocumentUploadModal;