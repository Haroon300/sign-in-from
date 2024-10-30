import React from 'react'
import Image from 'next/image';

const Signin = () => {
    return (
        <>
            <div class='flex flex-col h-screen'>
                <div class='flex justify-center items-center bg-gradient-to-r from-orange-500 via-amber-700 to-red-950'>
                    <div className='fixed '>
                      <Image src='/pic.jpg' alt='bg image' width={600} height={700}/>
                    </div>
                    <div class="flex flex-col items-center justify-center z-10 px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
                            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                            Khelaao
                        </a>
                        <div class="w-full dark:bg-transparent dark:bg-zinc-100 dark:bg-opacity-75  bg-transparent  bg-zinc-100 bg-opacity-75 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight flex dark:text-red-900 justify-center items-center text-red-900 md:text-2xl dark:text-white">
                                    Sign in 
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-red-900 dark:text-red-900">Your email</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-red-900 dark:text-red-900">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border cursor-pointer border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div class="ml-3 text-sm">
                                                <label for="remember" class="text-red-900 dark:text-red-900">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" class="text-sm font-medium text-red-900 hover:underline dark:text-red-900">Forgot password?</a>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                    <p class="text-sm font-light text-red-900 dark:text-red-900">
                                        Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Signin
