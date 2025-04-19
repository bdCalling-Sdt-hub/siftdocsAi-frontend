'use client';

import React from 'react';

const UploadOptions = ({setIsOpenFile}:{setIsOpenFile:(isOpenFile: boolean)=>void}) => {
  return (
    <div className="w-full mb-8 bg-[#FBFBFB] rounded-xl  p-2 animate-in fade-in duration-300 "  style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)" }}>
      <div className="flex flex-col items-start gap-y-0"> 

        <div className='  border-b border-[#E7E7E7] w-full px-4 cursor-pointer hover:bg-blue-50  '> 
        <div 
        //   type="text" 
        //   size="large" 
          className="flex items-center justify-start w-full h-14 transition-all   "
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="/drive.png" 
                alt="Google Drive" 
             className='w-5 h-5'
              />
            </div>
            <span>Connect to Google Drive</span>
          </div>
        </div>

        </div>
        
        <div className=' border-b border-[#E7E7E7] w-full px-4 cursor-pointer hover:bg-blue-50  '>  
        <div 
        //   type="text" 
        //   size="large" 
          className="flex items-center justify-start h-14  transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <img 
                src="/onedrive.png" 
                alt="Microsoft OneDrive" 
                className='w-5 h-5'
              />
            </div>
            <span>Connect to Microsoft OneDrive</span>
          </div>
        </div>

        </div>
      
        <div className='   w-full px-4 cursor-pointer hover:bg-blue-50  ' onClick={() => setIsOpenFile(true)}> 
        <div 
        //   type="text" 
        //   size="large" 
          className="flex items-center justify-start h-14 transition-all"
        >
          <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center" >
              <img 
                src="/upload.png" 
                alt="Microsoft OneDrive" 
                className='w-5 h-5'
              />
            </div>
            <span>Upload from computer</span>
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default UploadOptions;