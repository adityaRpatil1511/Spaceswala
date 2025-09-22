import React, { useState } from "react";
import { User, Lock } from "lucide-react";

// You can replace these with your own custom Button, Input, Checkbox components
// For this example, we're using regular HTML elements + Tailwind CSS

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6">
        <div className="w-full max-w-md bg-transparent space-y-8">
          {/* Welcome Text */}
          <div className="text-white space-y-2 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-light tracking-wide">Welcome!</h1>
            <p className="text-sm sm:text-lg text-white/90 font-light">Today will be great.</p>
          </div>

          {/* Login Form */}
          <div className="space-y-6 mt-10">
            {/* Username Field */}
            <div className="relative">
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/80">
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-white/60 rounded-none pl-10 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/80">
                <Lock size={20} />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-white/60 rounded-none pl-10 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2 pt-4">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-white w-4 h-4"
              />
              <label htmlFor="remember" className="text-white/90 text-sm font-light">
                Remember my Username
              </label>
            </div>

            {/* Login Button */}
            <button
              onClick={() => console.log({ username, password, rememberMe })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-sm mt-8 transition-colors duration-200"
            >
              LOGIN
            </button>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
              {[
                "CHANGE PASSWORD",
                "FORGOT PASSWORD",
                "MANAGE PROFILE",
                "CREATE PASSWORD",
              ].map((action) => (
                <button
                  key={action}
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10 text-xs py-2 rounded-sm transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
