/* eslint-disable @next/next/no-img-element */
"use client"

import GradientBtn from "@/components/shared/GradientBtn";
import TextInput from "@/components/shared/TextInput";
import {  Checkbox, Form, Input } from "antd";

const Login = ({ onForgotPassword , openRegister , setIsModalOpen }: { onForgotPassword: () => void , openRegister: () => void , setIsModalOpen:(open:boolean)=>void }) => { 



    const onFinish = async() => { 
      setIsModalOpen(false)
    }; 

    return ( 
        <div  className="w-full">
        <div className=" mb-6">  
          <div  className="flex items-center justify-center mb-6"> 
          <img src="/logo.png" alt="Logo" className="h-[32px] w-auto" /> 
          </div>
          <h1 className="text-[25px] font-semibold mb-2 text-center">Log in to your account</h1>
          <p className="text-[#5C5C5C] text-center "> Please enter your email and password to continue</p>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
        >

          <TextInput name={"email"} label={"Email"} />

            <Form.Item
              name="password"
              label={<p className="text-[#414141] text-[16px]">Password</p>}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
                style={{
                  height: 40,
                  border: "1px solid #d9d9d9",
                  outline: "none",
                  boxShadow: "none" , 
                  borderRadius: "50px",
                }}
              />
            </Form.Item>

            <div className="flex items-center justify-between">
              <Form.Item style={{marginBottom: 0}} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <p
                className="login-form-forgot text-primary font-semibold cursor-pointer"
                onClick={onForgotPassword}
              >
                Forgot password
              </p>
          </div>

          <Form.Item style={{marginTop: 24}}>
          <GradientBtn className="w-full h-[40px]  font-[400px] " >Log In</GradientBtn>
          </Form.Item>

          
        </Form> 

        <div className=" flex items-center justify-center gap-1 py-4">
            <p className="text-[#636363]">Don’t have any account?</p> 
            <p className="text-primary font-semibold cursor-pointer" onClick={openRegister} > Sign Up</p>
        </div>
    </div>
    );
};

export default Login;