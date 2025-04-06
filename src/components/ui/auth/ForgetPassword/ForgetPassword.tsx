
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
        <div  className="flex items-center justify-center mb-6"> 
          <img src="/logo.png" alt="Logo" className="h-[32px] w-auto" /> 
          </div>
          <h1 className="text-[25px] font-semibold mb-2 ">Forgot Password ?</h1>
          <p className="text-[#5C5C5C] text-center "> Enter your email below to reset your password</p>
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