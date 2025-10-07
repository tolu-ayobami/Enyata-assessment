"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { InputWithLegend } from '../atom/inputfield';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from 'react-spinners';
import { FaEye, FaEyeSlash } from "react-icons/fa";


// Zod schema
const schema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "Password must contain letters and numbers only"),
});

type FormData = z.infer<typeof schema>;


const Login = () => {

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "all", // or "onTouched"
        //mode:"onChange"
    });

    const router = useRouter()


    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPsw() {
        setShowPassword((prev) => !prev);
    }


    const onSubmit = async (data: FormData) => {
        console.log(data)
        // Simulate async login
        await new Promise((resolve) => setTimeout(resolve, 1500));
        router.push('/dashboard');
        reset();
    };

    return (
        <div className='flex items-center min-h-screen justify-center'>
            {/* logo */}
            <div className='max-lg:hidden h-screen flex justify-center items-center w-[480px] bg-[#031434]'>
                <Image src="/images/starwars.png" alt="Logo" width={385} height={167} />
            </div>

            {/* form */}
            <div className='max-md:w-[85%] md:w-[60%] lg:w-[467px]  h-[560px] rounded-[8px] border m-[auto]'>
                <div className='w-[80%] lg:w-[335px] m-[auto] flex flex-col gap-[40px] pt-9 pb-9'>
                    <div className='flex flex-col gap-2 '>
                        <h1 className='text-[24px] leading-[32px] font-semibold font-inter text-[#434854]'>Login</h1>
                        <p className='text-[16px] leading-[24px] font-normal font-inter text-[#737373]'>Kindly enter your details to log in </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7 mt-3 mb-6'>

                        <div className=''>
                            <InputWithLegend
                                label="Email Address"
                                type="email"
                                id="email"
                                placeholder="kingsleyomin@enyata.com"
                                className="w-full outline-none"
                                fieldsetClassName={errors.email ? "border-red-500" : "border-[#0A74DC]"}
                                inputProps={register("email")}
                            />
                            <span className='text-red-500 text-sm py-0'>{errors?.email?.message}</span>
                        </div>

                        <div className=''>
                            <div className='relative'>
                                <InputWithLegend
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="***********"
                                    className="w-full outline-none"
                                    passwordClassName="border-[#A4A7B7]"
                                    fieldsetClassName={errors.password ? "border-red-500" : ""}
                                    inputProps={register("password")}
                                />
                                <span className="absolute my-[auto] right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={toggleShowPsw}>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password && <span className='text-red-500 text-sm py-0'>{errors.password.message}</span>}
                        </div>
                        <button type='submit' disabled={!isValid || isSubmitting} className={`w-full cursor-pointer h-[48px] bg-[#0A74DC] text-white rounded-[6px] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''} ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}>{isSubmitting ? <ClipLoader size={24} color="#ffffff" /> : "Login"}</button>
                        <p className='text-[14px] text-center leading-[16px] font-normal font-inter text-[#0A74DC]'>Forgot your password?</p>
                    </form>

                    <div className=''>
                        <p className='text-center leading-[20px]'><span className='underline text-[12px] font-inter'>Privacy Policy</span> <span className='text-[12px] font-inter text-[#B0B9C8]'>and</span> <span className='underline text-[12px] font-inter'>Terms of services</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
