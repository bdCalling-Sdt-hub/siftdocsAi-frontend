
const PromptNavbar = () => {

    const profile = {
        image: "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png",
        name: "John Doe",
    };
    return (
        <div  className="w-full h-[80px] flex items-center justify-between  text-black px-[60px]">

            <div>
                <img src="/logo.png" alt="Logo" className="h-[32px] w-auto" />
            </div>

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
        </div>
    );
};

export default PromptNavbar;