"use client";

import { Typography, Upload, message } from 'antd';
import { RcFile } from 'antd/es/upload';
import { ReactNode } from 'react';
import { FileItem as FileItemType } from '@/lib/data';
import { FileUp } from 'lucide-react';

const { Text } = Typography;

interface FileItemProps {
  label: string;
  file: FileItemType;
  onFileUploaded?: (file: RcFile) => void;
}

export default function FileItem({ label, file, onFileUploaded }: FileItemProps) {
  const beforeUpload = (file: RcFile) => {
    const isPDF = file.type === 'application/pdf';
    if (!isPDF) {
      message.error('You can only upload PDF files!');
      return Upload.LIST_IGNORE;
    }
    
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('File must be smaller than 10MB!');
      return Upload.LIST_IGNORE;
    }
    
    if (onFileUploaded) {
      onFileUploaded(file);
    }
    
    return false; 
  };

  let content: ReactNode;
  
  if (file.type === 'pdf') {
    content = (
      <div className="flex items-center">
        {/* <FileOutlined style={{ color: '#1890ff', marginRight: 8 }} /> */}
        <Text className='font-normal' style={{ color: '#0066FF' }}>{file.name}</Text>
      </div>
    );
  } else {
    content = (
      <Upload
        beforeUpload={beforeUpload}
        showUploadList={false}
        maxCount={1}
      >
        <div 
          className="flex items-center gap-1 cursor-pointer"
          style={{ color: '#319517', padding: 0 }}
        > 
        <p> <FileUp size={16} color='#319517' /></p> 
        <p> Upload File </p> 
        </div>
      </Upload>
    );
  }

  return (
    <div className="flex items-center justify-between">
      <p className='text-[14px] text-[#606060] font-normal' >{label}</p>
    <div className=' text-[12px]'>  {content} </div> 
    </div>
  );
}