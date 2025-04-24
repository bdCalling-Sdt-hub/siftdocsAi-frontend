"use client"
import PromptNavbar from '@/components/shared/PromptNavbar';
import Sidebar from '@/components/shared/Sidebar';
import { ConfigProvider } from 'antd';
import { PanelsTopLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const LayoutClone = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [showLabels, setShowLabels] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const profile = {
        image: "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png",
        name: "John Doe",
    }; 
    return (
        <div>
            <div className='h-[75px] flex items-center justify-between pr-5 bg-[#FBFBFB]s px-4  lg:hidden'>
                {/* Mobile menu button */}
                <button 
                    className="lg:hidden block text-gray-600"
                    onClick={() => setIsMobileSidebarOpen(true)}
                >
                    <PanelsTopLeft size={20} />
                </button>

                <div className='block lg:hidden'>
                    <img src="/logo.png" alt="Logo" className="lg:h-[32px] h-[24px] w-auto" />
                </div>

                <div className='block lg:hidden'>
                    <img
                        src={profile.image}
                        alt="profile"
                        className="w-9 h-9 lg:w-10 lg:h-10 rounded-full cursor-pointer"
                    />
                </div>

            </div>
                <div className=' lg:block hidden'>
                    <PromptNavbar />
                </div>

            <div className='w-full flex h-[calc(100vh-80px)]'>
                {/* Sidebar for large devices */}
                <div className={`bg-[#FBFBFB] hidden lg:block ${showLabels ? "w-[100px]" : "w-[250px]"}`}>
                    <Sidebar showLabels={showLabels} setShowLabels={setShowLabels} />
                </div>

                {/* Sidebar for small devices */}
                {isMobileSidebarOpen && (
                    <>
                        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden" onClick={() => setIsMobileSidebarOpen(false)}></div>
                        <div className="fixed top-0 left-0 bottom-0 w-[250px] bg-[#FBFBFB] z-40 shadow-lg lg:hidden">
                            <Sidebar showLabels={false} setShowLabels={() => { }} 
                                setMobileVisible={setIsMobileSidebarOpen} />
                        </div>
                    </>
                )}

                {/* Main content */}
                <div className={`flex-1 ${showLabels ? "lg:w-[calc(100%-100px)]" : "lg:w-[calc(100%-250px)]"}`}>
                    <div className={`${pathname === "/new-chat" ? "bg-[#f6f6f6]" : "bg-[#FBFBFB]"} lg:px-4 px-0 pt-4 pb-0 h-[calc(100vh-80px)] border-s-8 border-t-8 border-[#F4F4F4] rounded-md shadow-md`}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#0ea5e9',
                                },
                            }}
                        >
                            <div className='h-full overflow-y-auto rounded-md'>
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