
import GradientBtn from "@/components/shared/GradientBtn";
import { Form } from "antd";
import React, { useState } from "react"
import OTPInput from "react-otp-input";


const VerifyOtp = ({ openResetPassword }: { openResetPassword: () => void }) => {

  const [otp, setOtp] = useState<string>("");
  const onFinish = async () => {
    openResetPassword()
  };


  const handleResendEmail = async () => {

  };

  return (
    <div className="w-full ">

      <div className=" mb-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-[32px] w-auto" />
        </div>
        <h1 className="text-[25px] font-semibold mb-2 text-[#333333] text-center ">Verification code</h1>
        <div className="  w-[70%]  "> <p className="text-[#5C5C5C] text-center "> We sent a reset link to contact@dscode...com
          enter 5 digit code that is mentioned in the email. </p> </div>
      </div>


      <Form layout="vertical" onFinish={onFinish}>

        <div className="flex items-center justify-center mb-6">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            inputStyle={{
              height: 41,
              width: 38,
              borderRadius: "8px",
              margin: "16px",
              fontSize: "20px",
              border: "1px solid #818181",
              color: "#2B2A2A",
              outline: "none",
              marginBottom: 10
            }}
            renderInput={(props) => <input {...props} />}
          />

        </div>

        <div className="flex items-center justify-center gap-2 mb-6 ">
          <p className="text-[#818181] text-sm font-normal" >You have not received the email?</p>

          <p
            onClick={handleResendEmail}
            className="login-form-forgot underline font-medium"
            style={{ color: "#00B047", cursor: "pointer" }}
          >
            Resend
          </p>
        </div>

        <Form.Item style={{ marginBottom: 0 }}>
          <GradientBtn className="w-full h-[40px]  font-[400px] "> Continue </GradientBtn>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VerifyOtp;