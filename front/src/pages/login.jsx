import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import NavBar from "../components/navbar";
import Footer from "./footer";


const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signUpSchema = z.object({
  email: z.string().email("Invalid email format"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, 'Password must be atleast 6 charactes'),
  tc: z.boolean().refine(value => value === true, {
    message: "You must accept the terms and conditions",
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function AuthCard() {
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(isSignUp ? signUpSchema : signInSchema) });

  const [loading, setLoading] = useState(false);
  const[tc, setTc] = useState(false)

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log(isSignUp ? "Sign Up Data:" : "Login Data:", data);
      setLoading(false);
    }, 1000);
  };

  const fieldStyle = 'w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:outline-none text-white'
  const errorStyle = 'text-red-500 text-sm mt-2'

  return (
    <div>
      <div className="flex justify-center">
              <NavBar />
      </div>
      <div className="flex flex-col min-h-screen items-center justify-start px-4 sm:px-6 lg:px-8">
    
        <div className="w-80 sm:w-110 p-6 bg-gray-800 rounded-lg shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-between mb-4">
            <button
              className={`w-1/2 py-2 text-lg font-semibold ${
                !isSignUp ? "text-blue-600 border-b-2 border-blue-600" : "text-white"
              }`}
              onClick={() => setIsSignUp(false)}
              >
              Sign In
            </button>
            <button
              className={`w-1/2 py-2 text-lg font-semibold ${
                isSignUp ? "text-blue-600 border-b-2 border-blue-600" : "text-white"
              }`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 h-80 overflow-auto">
            {isSignUp ? (
              <>
                  <div>
                      <label className="block text-white">Username</label>
                      <input
                        type="text"
                        {...register("username")}
                        className={`${fieldStyle} ${errors.username ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                        placeholder="Enter your username"
                      />
                      {errors.username && <p className={errorStyle}>{errors.username.message}</p>}
                  </div>
                  <div>
                        <label className="block text-white">Email</label>
                        <input
                          type="email"
                          {...register("email")}
                          className={`${fieldStyle} ${errors.email ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
                  </div>

                

                  <div>
                      <label className="block text-white">Phone Number</label>
                      <input
                        type="text"
                        {...register("phone")}
                        className={`${fieldStyle} ${errors.phone ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && <p className={errorStyle}>{errors.phone.message}</p>}
                  </div>

                  <div>
                        <label className="block text-white">Password</label>
                        <input
                          type="password"
                          {...register("password")}
                          className={`${fieldStyle} ${errors.password ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                          placeholder="Enter your password"
                        />
                        {errors.password && <p className={errorStyle}>{errors.password.message}</p>}
                  </div>
                          
                  <div>
                    <label className="block text-white">Confirm Password</label>
                    <input
                      type="password"
                      {...register("confirmPassword")}
                      className={`${fieldStyle} ${errors.confirmPassword ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className={errorStyle}>{errors.confirmPassword.message}</p>}
                  </div>

                  <div className="flex flex-row gap-4">
                    <input 
                      type='checkbox'
                      {...register('tc')}
                    />
                    <p className={errors.tc ? "text-red-600" :"text-blue-600"}>Accept the terms and condition</p>
                  </div>
              </>
            ):
            <>
              <div>
                <label className="block text-white">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className={`${fieldStyle} ${errors.email ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-white">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className={`${fieldStyle} ${errors.password ? 'focus:ring-red-600 border-red-600' : 'focus:ring-blue-400 border-blue-400'}`}
                  placeholder="Enter your password"
                  />
                {errors.password && <p className={errorStyle}>{errors.password.message}</p>}
              </div>
            </>
            }

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? (isSignUp ? "Signing Up..." : "Logging in...") : isSignUp ? "Sign Up" : "Login"}
            </button>

            {!isSignUp && 
                <div>
                  <p className="text-white">
                    Proud to user of VR1
                  </p>
                </div>
            }
          </form>
        </div>
      </div>
      <div className="absolute -bottom-[40%] w-full md:-bottom-[10%] lg:-bottom-[10%] xl:bottom-[0%]">
        <Footer/>
      </div>
    </div>
  );
}
