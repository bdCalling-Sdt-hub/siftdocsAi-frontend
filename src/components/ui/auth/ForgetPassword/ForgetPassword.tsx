
import GradientBtn from "@/components/shared/GradientBtn";
import TextInput from "@/components/shared/TextInput";
import {  Form } from "antd";

import React from "react";

const ForgetPassword = ({openVerifyOtp }:{openVerifyOtp:() => void}) => { 

    const onFinish = async() => { 
        openVerifyOtp()
    };
  
    return (
        <div className="w-full">

        <div className="text-center mb-4"> 
        <div  className="flex items-center justify-center lg:mb-6 mb-3"> 
          <img src="/logo.png" alt="Logo" className="lg:h-[32px] h-[28px] w-auto" /> 
          </div>
          <h1 className="lg:text-[25px] text-[22px] font-semibold mb-2 ">Forgot Password ?</h1>
          <p className="text-[#5C5C5C] text-center lg:text-base text-xs "> Enter your email below to reset your password</p>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          
        <TextInput name={"email"} label={"Email"} />

          <Form.Item>
            <GradientBtn className="w-full h-[40px]  font-[400px] "> Send Code </GradientBtn>
          </Form.Item>
        </Form>
    </div>
    );
};

export default ForgetPassword;