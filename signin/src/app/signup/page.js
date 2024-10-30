'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const SignUp = () => {
    const [dropdown, setDropDown] = useState(false);
    return (
        <div class='flex flex-col h-screen '>
            <div className='flex justify-center items-center bg-gradient-to-r from-orange-500 via-amber-700 to-red-950 h-screen'>
                <div className='fixed flex justify-center items-center h-screen'>
                    <Image src='/up.jpg' alt='bg image' width={800} height={700} className='w-10/12 h-full' />
                </div>

                <div className='flex flex-col z-10 my-auto justify-center items-center'>
                    <a href="#" class="flex items-center mb-3 text-2xl font-semibold text-white dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Khelaao
                    </a>
                    <div className='w-3/4 h-4/5 bg-zinc-50 bg-opacity-60 dark:bg-slate-800 dark:bg-opacity-75 rounded-xl'>
                        <form class="" action="#">
                            <div className='px-6 py-2 relative z-0 w-full md:col-span-2 group'>
                                <h1 className='text-red-900 text-xl'>SignUp</h1>
                            </div>
                            <div className='px-4 pt-4 grid md:grid-cols-3 md: gap-6'>
                                <div className='relative z-0 w-full p-3 group'>
                                    <label for="name" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Your Name</label>
                                    <input type="name" name="fname" id="fname" class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                                </div>
                                <div className='relative z-0 w-full p-3 group'>
                                    <label for="email" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                                </div>
                                <div className='relative z-0 w-full group p-3'>
                                    <label for="dob" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Date Of Birth</label>
                                    <input type="date" name="dob" id="dob" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className='relative z-0 w-full group p-3'>
                                    <label for="dp" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Profile Picture</label>
                                    <div className='bg-white rounded-3xl'>
                                        <input type="file" name="dp" id="dp" class="file:mr-4 file:py-2 file:px-4 text-red-900 file:rounded-full file:border-0 file:text-sm file:font-semibold 
                                        cursor-text file:bg-orange-800 file:cursor-pointer file:text-white hover:file:bg-orange-700" required="" />
                                    </div>
                                </div>
                                <div className='relative z-0 w-full p-3 group'>
                                    <label for="bio" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">About</label>
                                    <input type="text" name="bio" id="bio" class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description about you" required="" />
                                </div>
                                <div className='relative z-0 w-full sm:mb-2 p-3 group'>
                                    <label for="phoneno" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Phone No</label>
                                    <input type="number" name="phoneno" id="phoneno" class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone no" required="" />
                                </div>
                                <div className='relative z-0 w-full sm:mb-2 p-3 group'>
                                    <label for="addr" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Address</label>
                                    <input type="text" name="addr" id="addr" class="bg-gray-50 border text-black border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required="" />
                                </div>
                                <div className='relative z-0 w-full sm:mb-2 p-3 group'>
                                    <label for="gender" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Gender</label>
                                    <div className='flex'>
                                        <div className='items-center w-full'>
                                            <input type="radio" value="male" name='gender' className='cursor-pointer' required="" />
                                            <label for="male" id='gender' name='gender' className=' text-red-900'>Male</label>
                                        </div>
                                        <div className='items-center font-medium w-full'>
                                            <input type="radio" value="female" name='gender' className='cursor-pointer' required="" />
                                            <label for="female" id='gender' name='gender' className='font-medium text-red-900'>Female</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative z-0 w-full sm:mb-2 group p-3'>
                                    <label for="city" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">City</label>
                                    <input type="text" name="city" id="city" placeholder="you city name" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className='relative z-0 w-full sm:mb-2 group p-3'>
                                    <label for="country" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Country</label>
                                    <input type="text" name="country" id="country" placeholder="you country name" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className='relative z-0 w-full sm:mb-2 group p-3'>
                                    <label for="password" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                {/* <div className='relative z-0 w-full sm:mb-2 group p-3'>
                                    <label for="comfrompassword" class="block mb-2 text-sm font-medium text-red-900 dark:text-white">Comfrom Password</label>
                                    <input type="password" name="comfrom" id="comfrom" placeholder="Comfrom Password" class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg text-black focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div> */}
                                <div className='relative z-0 w-full sm:mb-2 group p-3'>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-orange-800 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-700 dark:hover:bg-orange-800 dark:focus:ring-orange-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" onClick={()=>{
                                        setDropDown(true);
                                        console.log("button is working:",dropdown)
                                    }}>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                    </button>
                                </div>

                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdown" class={`z-10 ${dropdown?"block" :"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="relative z-0 w-full md:col-span-3 group p-3">
                                    <button type="submit" className=' w-full text-white bg-orange-800 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-800 dark:hover:bg-orange-700 dark:focus:ring-primary-800'>
                                        SignUp
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
