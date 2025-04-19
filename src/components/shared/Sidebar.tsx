"use client"

import Link from 'next/link';
import { Bookmark, ChevronDown, ChevronRight, FilePlus2, MessageCircleReply, PanelsTopLeft } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import GradientMessageCirclePlus from './GradientMessageCirclePlus';

const Sidebar = ({ showLabels, setShowLabels }: { showLabels: boolean, setShowLabels: (showLabels: boolean) => void }) => {
    const pathname = usePathname();
    const router = useRouter();

    const toggleLabels = () => {
        setShowLabels(!showLabels);
    };

    console.log("showLabels", showLabels);

    const menuItems = [

        {
            key: "/my-documents",
            icon: <FilePlus2 style={{ height: "34px", width: "24px", color: pathname === "/my-documents" ? "#07AFF8" : "#606060" }} />,
            label: "My Documents"
        },
        {
            key: "/saved-templates",
            icon: <Bookmark style={{ height: "34px", width: "24px", color: pathname === "/saved-templates" ? "#07AFF8" : "#606060" }} />,
            label: "Saved Templates"
        },
        {
            key: "/chat-history",
            icon: <MessageCircleReply style={{ height: "34px", width: "24px", color: pathname === "/chat-history" ? "#07AFF8" : "#606060" }} />,
            label: "Chat History"
        },
    ];

    return (
        <div className="h-full ">
            <div className="flex flex-col h-full ">
                {/* Toggle button at the top */}

                <div>
                    {
                        !showLabels ? <div className='flex items-center justify-between border-b border-[#E7E7E7] ps-[60px] pe-3 pt-3  pb-[14px] '>
                            <button
                                onClick={toggleLabels}
                                className=" text-center hover:bg-gray-100  flex items-center gap-1 "
                            >
                                <span><PanelsTopLeft style={{ height: "34px", width: "24px", color: "#414141" }} /> </span>  <span>  {showLabels ? <ChevronRight style={{ height: "16px", width: "16px", color: "#929292" }} /> : <ChevronDown style={{ height: "16px", width: "16px", color: "#929292" }} />} </span>
                            </button>

                            <div className='flex items-center gap-2 cursor-pointer ' onClick={() => router.push("/new-chat")}>
                                <GradientMessageCirclePlus />
                                <p className='text-sm text-[#606060] font-normal '>New Chat</p>
                            </div>
                        </div> :
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <button
                                    onClick={toggleLabels}
                                    className="px-4 pt-2 text-center hover:bg-gray-100  flex items-center gap-1 "
                                >
                                    <span><PanelsTopLeft style={{ height: "34px", width: "24px", color: "#414141" }} /> </span>  <span>  {showLabels ? <ChevronRight style={{ height: "16px", width: "16px", color: "#929292" }} /> : <ChevronDown style={{ height: "16px", width: "16px", color: "#929292" }} />} </span>
                                </button>

                                <div className='flex items-center justify-center gap-2 w-full  hover:bg-gray-100 py-[14px] '>
                                    <button className='   text-center    ' onClick={() => router.push("/new-chat")}>
                                        <GradientMessageCirclePlus />

                                    </button>
                                </div>

                            </div>
                    }
                </div>


                {/* Menu items */}
                <div className="flex-1">
                    {menuItems.map((item) => (
                        <Link href={item.key} key={item.key}>
                            <div className={`flex items-center  ${showLabels ? " justify-center  " : "border-b border-[#E7E7E7] ps-[60px] "}  gap-2 p-2 rounded-md   py-[14px] hover:bg-gray-100 ${pathname === item.key ? 'bg-blue-50' : ''}`}>
                                <span>{item.icon}</span>
                                {!showLabels && (
                                    <span className='text-sm text-[#606060] font-normal'>
                                        {item.label}
                                    </span>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;