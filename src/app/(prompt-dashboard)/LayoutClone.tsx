"use client"
import PromptNavbar from '@/components/shared/PromptNavbar';
import Sidebar from '@/components/shared/Sidebar';
import { ConfigProvider } from 'antd';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const LayoutClone = ({ children }: { children: React.ReactNode }) => { 
    const pathname = usePathname(); 
      const [showLabels, setShowLabels] = useState(false);    
      console.log("showLabels", showLabels);

    return (
        <div>
            <div className='h-[80px] flex items-center justify-end pr-5 bg-[#FBFBFB]'>
                <PromptNavbar />
            </div>

            <div className='w-full flex h-[calc(100vh-80px)]'>

                {/* side bar */}
                <div className={` bg-[#FBFBFB]  ${showLabels ? "w-[100px]" : "w-[250px]"} `} >
                    <Sidebar showLabels={showLabels} setShowLabels={setShowLabels}  />
                </div>

                {/* main container with header */} 

                <div className={`  ${showLabels ? "w-[calc(100%-100px)]" : "w-[calc(100%-250px)]"} `}>
                    <div className={ ` ${pathname === "/new-chat" ? "bg-[#f6f6f6]" : "bg-[#FBFBFB]"} px-4 pt-4 pb-0 h-[calc(100vh-80px)] border-s-8 border-t-8 border-[#F4F4F4] rounded-md shadow-md`}>
                    <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: '#0ea5e9',
                        },
                    }}
                >
                        <div className='h-full overflow-y-auto rounded-md '> 
                            {children}
                        </div> 

                        </ConfigProvider>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LayoutClone;