"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";

export default function LoginPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const onLogin = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen isolate px-6 py-18 sm:py-26 lg:px-8">
            <form action="#" method="POST" className="mx-auto mt-20 mb-16 sm:mt-15">
                <div className="mx-auto max-w-2xl text-center mb-5">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:px-20">
                        CSAZZDEV LOGIN
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                placeholder="Email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                placeholder="Password"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <button
                        onClick={onLogin}
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Login Now
                    </button>
                </div>
                <div className="mt-7 text-center">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                        Do not have Signup before? Visit on <a href="/signup" className="font-semibold text-indigo-600"> Signup Page </a>
                    </label>
                </div>
            </form>
        </div>
    )
}