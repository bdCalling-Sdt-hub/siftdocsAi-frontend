"use client"

import Link from 'next/link';
import { Bookmark, ChevronDown, ChevronRight, FilePlus2, MessageCircleReply, PanelsTopLeft, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import GradientMessageCirclePlus from './GradientMessageCirclePlus';

const Sidebar = ({ showLabels, setShowLabels, setMobileVisible }: { showLabels: boolean, setShowLabels: (showLabels: boolean) => void, setMobileVisible?: (visible: boolean) => void; }) => {
    const pathname = usePathname();
    const router = useRouter();

    const toggleLabels = () => {
        setShowLabels(!showLabels);
    };

    console.log("showLabels", showLabels);

    const menuItems = [

        {
            key: "/my-projects",
            icon: <FilePlus2 style={{ height: "34px", width: "24px", color: pathname === "/my-projects" ? "#07AFF8" : "#606060" }} />,
            label: "My Projects"
        },
        {
            key: "/saved-projects",
            icon: <Bookmark style={{ height: "34px", width: "24px", color: pathname === "/saved-projects" ? "#07AFF8" : "#606060" }} />,
            label: "Saved Projects"
        },
        {
            key: "/chat-history",
            icon: <MessageCircleReply style={{ height: "34px", width: "24px", color: pathname === "/chat-history" ? "#07AFF8" : "#606060" }} />,
            label: "Chat History"
        },
    ];

    return (
        <div className="h-full ">
            <div className='flex justify-end'>
                <button
                    onClick={() => setMobileVisible?.(false)}
                    className="lg:hidden p-2 text-red-600"
                >
                    <X />
                </button>
            </div>

            <div className="flex flex-col h-full lg:mt-0 mt-5 ">
                {/* Toggle button at the top */}

                <div>
                    {
                        !showLabels ? <div className='flex items-center justify-between border-b border-[#E7E7E7] ps-[60px] pe-3 pt-3  pb-[14px] '>
                            <button
                                onClick={toggleLabels}
                                className=" text-center hover:bg-gray-100  lg:flex hidden items-center gap-1 "
                            >
                                <span><PanelsTopLeft style={{ height: "34px", width: "24px", color: "#414141" }} /> </span>  <span>  {showLabels ? <ChevronRight style={{ height: "16px", width: "16px", color: "#929292" }} /> : <ChevronDown style={{ height: "16px", width: "16px", color: "#929292" }} />} </span>
                            </button>

                            <div className='flex items-center gap-2 cursor-pointer ' onClick={() => router.push("/prompt")}>
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
                                    <button className='   text-center    ' onClick={() => router.push("/prompt")}>
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
                                    <span className={`text-sm  font-normal ${pathname === item.key ? "text-[#07AFF8]" : "text-[#606060]"}`}>
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