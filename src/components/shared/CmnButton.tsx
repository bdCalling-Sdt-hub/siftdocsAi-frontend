
interface IButtonProps {
  name?: React.ReactNode;
  children?: React.ReactNode;
  className: string;
}

const CmnButton: React.FC<IButtonProps> = ({ children, className }) => {
    return <button type="submit" className={`   bg-primary  text-[#F1F1F1] rounded-full  lg:text-[16px] text-[14px] ${className}`} >
    {children}
  </button>
};

export default CmnButton;