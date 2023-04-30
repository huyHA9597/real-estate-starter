import React from "react";

// import Link
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="flex-auto bg-white w-auto mb-8 border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="text-violet-700 text-lg">Enter Login Info</div>
          </div>
          {/* form */}
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              type="text"
              placeholder="Account name/email*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              type="password"
              placeholder="Password*"
            />
            <div className="flex gap-x-2">
              <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                Log in
              </button>
              <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition">
                Not have account yet?
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
