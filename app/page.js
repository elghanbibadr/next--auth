"use client"
import Image from 'next/image'
import googlelogo from '../public/googlelogo.webp'
import Link from 'next/link'
import { useState } from 'react'
export default function Home() {
  const [isSignUp,setIsSignUp]=useState(false)
  return (
    <main >
       <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Link href="/">
          <h1 className='text-center text-3xl text-darkPink font-medium'>Temp Mail</h1>
        </Link>
        <div className="border border-accent1 shadow-pinkBoxShadow2 p-6 rounded-xl mt-10">
          <h5 className="scroll-m-20 font-heading text-lg font-medium text-white text-center">
            {isSignUp ? "Create account" : "Sign in to your account"}
          </h5>
          <button
            // onClick={handleGoogleSignIn}
            className="inline-flex  border border-accent1 items-center capitalize justify-center font-medium  transition-colors button-transparent mt-6 w-full flex justify-between text-sm rounded-md py-2 "
          >
            {/* src={googlelogo} */}
            <Image className="h-6 w-6 ml-6"  src={googlelogo} alt="google logo image" />
            <span className="text-center w-full  text-white">
              Sign {isSignUp ? "up" : "in"} with Google
            </span>
          </button>
      
          {/* onSubmit={handleSubmit(onSubmit)} */}
          <form>
            <div className="mt-6">
              <label className="text-gray-500 text-sm font-semibold   " htmlFor="email">
                Email Address
              </label>
              <input
                className="px-4 py-1 border mt-1 border-accent1 bg-transparent outline-none rounded-md block w-[400px] placeholder:text-[14px]"
                id="email"
                placeholder="your@email"
                name="email"
                type="email"
                // {...register("email", { required: "Email is required" })}
              />
              {/* {errors.email && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.email.message}
                </p>
              )} */}
            </div>
            <div className="mt-4">
              <label className="text-gray-500 text-sm font-semibold " htmlFor="password">
                Password
              </label>
              <input
                className="pl-2 py-2 border border-accent1 mt-1 bg-transparent outline-none rounded-md block w-[400px] placeholder:text-[14px]"
                id="password"
                name="password"
                type="password"
                placeholder='your password'
                // {...register("password", { required: "Password is required" })}
              />
              {/* {errors.password && (
                <p className="text-red-600 text-sm font-semibold">
                  {errors.password.message}
                </p>
              )} */}
              {/* {!isSignUp && (
                <span className="text-[.79rem] cursor-pointer inline-block mt-4 hover:underline font-medium  text-gray-400">
                  Password forgotten?
                </span>
              )} */}
            </div>
          
            {isSignUp && (
              <button className="bg-darkPink px-4 py-2 text-white w-full mt-6 rounded-md">
                Sign up
              </button>
            )}

            {!isSignUp && (
              <button className="bg-darkPink px-4 py-2 text-white w-full mt-6 rounded-md">
                Sign in
              </button>
            )}
          </form>
          <div className="text-[.8rem] font-medium flex justify-center gap-1 items-center mt-4">
            <span className="text-white">
              {" "}
              {isSignUp
                ? "Already have an account"
                : "Do not have an account yet?"}
            </span>
            {
              <Link href={`${isSignUp ? "/auth/signin" : "/auth/signup"}`}>
                <span className="text-darkPink cursor-pointer hover:underline">
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
