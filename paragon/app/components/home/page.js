"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("auth_token");
    router.push("/login");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <p>Welcome, {user}!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut
          harum quia a aliquid, numquam sequi atque quo libero quibusdam.
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mt-3"
      >
        Logout
      </button>
    </div>
  );
}
