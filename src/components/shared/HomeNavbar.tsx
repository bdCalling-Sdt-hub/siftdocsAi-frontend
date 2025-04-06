/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import CmnButton from "./CmnButton";
import { Modal } from "antd";
import Login from "../ui/auth/Login/Login";
import ForgetPassword from "../ui/auth/ForgetPassword/ForgetPassword";
import Register from "../ui/auth/Register/Register";
import VerifyOtp from "../ui/auth/VerifyOtp/VerifyOtp";
import ResetPassword from "../ui/auth/ResetPassword/ResetPassword";

interface IProfile {
    image?: string;
    name?: string;
}

const HomeNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalView, setModalView] = useState<'login' | 'forgot' | 'register' | 'verify' | 'reset'>('login');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const profile: IProfile = {};
    // const profile = {
    //   image: "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png",
    //   name: "John Doe",
    // };

    const navOptions = [
        { label: "Home", path: "/" },
        { label: "Business listing", path: "/business-listing" },
        { label: "About", path: "/about" },
        { label: "Blogs", path: "/blogs" },
        { label: "Contact Us", path: "/contact" },
    ];

    const openLogin = () => {
        setModalView('login');
        setIsModalOpen(true);
    };

    const openForgotPassword = () => {
        setModalView('forgot');
    }; 

    const openRegister = () => {
        setModalView('register');
    };  

    const openVerifyOtp = () => {
        setModalView('verify');
    }; 

const openResetPassword = () => {
    setModalView('reset'); 
};

    return (
        <div className="w-full h-[80px] flex items-center justify-center bg-[#F8F8F8] text-black">
            <div className="container flex items-center justify-between relative navbar">
                {/* Mobile Menu Toggle */}
                <button
                    className="z-50 lg:hidden"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
                </button>

                {/* Logo */}
                <img src="/logo.png" alt="Logo" className="h-[32px] w-auto" />

                {/* Navigation Menu */}
                <div
                    className={`z-50 text-[16px] transition-all duration-300 shadow-lg lg:shadow-none p-5 lg:p-0 absolute top-20 left-0 w-full bg-white lg:bg-transparent lg:relative lg:top-0 lg:left-auto lg:w-auto lg:flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 lg:space-x-6 lg:rounded-full lg:px-6 ${isMenuOpen ? "block" : "hidden"
                        }`}
                >
                    {navOptions.map((option, index) => (
                        option.path ? (
                            <Link
                                key={index}
                                href={option.path}
                                className={`nav-link flex flex-col items-center justify-center px-3 rounded-lg text-[#929292] ${pathname === option.path
                                    ? "font-[400]"
                                    : "hover:text-[#929292]"
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {option.label}
                            </Link>
                        ) : (
                            <div
                                key={index}
                                className="nav-link flex items-center justify-center flex-col px-3"
                            >
                                {option.label}
                            </div>
                        )
                    ))}
                </div>

                {/* Right Section */}
                <div className="nav-icons flex gap-4">
                    {profile?.image && profile?.name ? (
                        <div className="flex items-center gap-2">
                            <img
                                src={profile.image}
                                alt="profile"
                                className="w-12 h-12 lg:w-10 lg:h-10 rounded-full cursor-pointer"
                            />
                            <p className="text-[#414141] text-[16px] hidden lg:block cursor-pointer">
                                {profile.name}
                            </p>
                        </div>
                    ) : (
                        <div onClick={openLogin}>
                            <CmnButton className="px-5 py-[10px] font-[400px] " >Log In</CmnButton>

                        </div>
                    )}
                </div>
            </div>
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}  
                width={619}
                // height={687}  
                style={{ 
                    backgroundColor: "white", 
                    borderRadius: "20px",  
                  
                }}
                centered
            > 
            <div className=" h-[587px] px-[60px]  flex items-center justify-center " >  

                {modalView === 'login' ? (
                    <Login onForgotPassword={openForgotPassword} openRegister={openRegister} setIsModalOpen={setIsModalOpen} />
                ) : modalView === 'forgot' ? (
                    <ForgetPassword  openVerifyOtp={openVerifyOtp}/>
                ) : modalView === 'register' ?
                    (<Register openLogin={openLogin} setIsModalOpen={setIsModalOpen} />) :
                    modalView === 'verify' ?
                        (<VerifyOtp openResetPassword={openResetPassword} />) :
                        modalView === 'reset' ?
                            (<ResetPassword setIsModalOpen={setIsModalOpen} />) : null}

            </div>
            </Modal>
        </div>
    );
};

export default HomeNavbar;
