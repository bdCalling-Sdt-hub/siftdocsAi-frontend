
interface IButtonProps {
    name?: React.ReactNode;
    children?: React.ReactNode;
    className: string;
  }
  
  const GradientBtn: React.FC<IButtonProps> = ({ children, className }) => {
      return <button type="submit" className={`  bg-gradient-to-tl from-[#70E2FF] from-10% to-[#07AFF8] to-90%  text-[#ffffff] rounded-full  lg:text-[16px] text-[14px] ${className}`} >
      {children}
    </button>
  };
  
  export default GradientBtn;