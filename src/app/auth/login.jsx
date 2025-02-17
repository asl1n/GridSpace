"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginService from "@/app/services/loginService"
import signupService from "@/app/services/signupService"

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setUsername("");
    setPhone("");
  };

  const handleLogin = async () => {
    const obj = {
      email: email,
      password: password,
    };
    console.log(obj);
    try {
      const response = await loginService.login(obj);

      if (response.status === 200) {
        router.push("/");
        // toast({
        //   title: "Login Successful",
        //   description: "Login Successfull",
        //   action: ToastAction.CLOSE,
        // });
        console.log("pass")
      } else {
        // toast({
        //   title: "Login failed",
        //   description: response.message.data.error || "Unknown error",
        //   action: ToastAction.CLOSE,
        // });
        console.log(error)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    const obj = {
      name,
      email,
      username,
      phone,
      password,
    };
    try {
      const response = await signupService.register(obj);
      if (response.status === 200) {
        router.push("/");
        // toast({
        //   title: "Signup Successful",
        //   description: "Signup Successfull",
        //   action: ToastAction.CLOSE,
        // });
        console.log("Signup Successful")
      } else {
        // toast({
        //   title: "Login failed",
        //   description: response.message.data.error || "Unknown error",
        //   action: ToastAction.CLOSE,
        // });
        console.log("fail")
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <section className="flex min-h-screen flex-col justify-center items-center bg-slate-900 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md transition-transform transform duration-300 ease-in-out">
        <div className="flex justify-between mb-4 border-b pb-2">
          <button
            className={`w-1/2 text-center py-2 transition-colors duration-300 ${activeTab === "login" ? "font-bold border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => {
              setActiveTab("login");
              resetForm();
            }}
          >
            Login
          </button>
          <button
            className={`w-1/2 text-center py-2 transition-colors duration-300 ${activeTab === "signup" ? "font-bold border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => {
              setActiveTab("signup");
              resetForm();
            }}
          >
            Sign Up
          </button>
        </div>

        <div className="transition-opacity duration-300 ease-in-out">
          {activeTab === "login" ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">Login</h2>
              <p className="text-gray-600 mb-4">Enter your credentials to access your account.</p>
              <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="relative w-full">
                <input className="w-full p-2 mb-4 border rounded pr-10" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button className="w-full py-2 bg-black text-white rounded" onClick={handleLogin}>Login</button>
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-2">Sign Up</h2>
              <p className="text-gray-600 mb-4">Create a new account to get started.</p>
              <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="w-full p-2 mb-2 border rounded" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input className="w-full p-2 mb-2 border rounded" type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <div className="relative w-full">
                <input className="w-full p-2 mb-4 border rounded pr-10" type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <button className="w-full py-2 bg-black text-white rounded" onClick={handleSignup}>Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}