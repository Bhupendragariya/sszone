
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaDribbble } from "react-icons/fa";
import logo from "../assets/image/logo.png";


const Footer = () => {
    return (
        <>
            <footer class="bg-[#002033] text-white py-10 px-6 md:px-16 mt-10">
                <div class=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <img src={logo} alt="Logo" class="h-8 w-auto" />
                            <div>
                                <p class="font-bold text-lg">SSZone</p>
                                <p class="text-xs">Technologies</p>
                            </div>
                        </div>
                        <p class="text-sm mb-4">
                            Discover a world of knowledge and opportunities with our online education platform pursue a new career.
                        </p>
                      

                    </div>


                    <div className='lg:ml-10'>
                        <h3 class="font-semibold mb-4">LINKS</h3>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:underline">Home</a></li>
                            <li><a href="#" class="hover:underline">Courses</a></li>
                            <li><a href="#" class="hover:underline">About Us</a></li>
                            <li><a href="#" class="hover:underline">Contact Us</a></li>
                            <li><a href="#" class="hover:underline">Blogs</a></li>
                        </ul>
                    </div>
                    <div>
                            <h1 className='font-semibold mb-3'>Contact Us</h1>
                            <div class="flex items-start space-x-2 mb-2">
                                <FiMapPin className='text-xl' />
                                <span class="text-sm">GMS Road Dehradun, Uttarakhand, India</span>
                            </div>
                            <div class="flex items-start space-x-2">
                                <FaPhoneAlt className='text-xl' />
                                <span class="text-sm">+91 897 989 1703</span>
                            </div>
                        </div>

                    <div>
                        <h3 class="font-semibold mb-4">GET IN TOUCH</h3>
                        <div class="flex space-x-3">
                            {/* <a href="#" class="border border-white p-2 rounded"><FaDribbble className='text-xl' /></a> */}
                            <a href="#" class="border border-white p-2 rounded"><FaFacebookSquare className='text-xl' /></a>
                            {/* <a href="#" class="border border-white p-2 rounded"><FaLinkedin className='text-xl' /></a> */}
                            <a href="#" class="border border-white p-2 rounded"><FaInstagram className='text-xl' /></a>
                            <a href="#" class="border border-white p-2 rounded"><FaTwitter className='text-xl' /></a>
                            {/* <a href="#" class="border border-white p-2 rounded"><MdOutlineEmail className='text-xl' /></a> */}
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer