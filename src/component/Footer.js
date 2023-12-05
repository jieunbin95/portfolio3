import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section name='footer' className='w-full px-2 text-gray-300 bg-slate-700 mt-20'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div className='text-center'>
          <h6 className='uppercase pt-2 pb-2 font-bold'>Solutions</h6>
          <ul>
            <li className='py-1'>Marketing</li>
            <li className='py-1'>Analytics</li>
            <li className='py-1'>Commerce</li>
            <li className='py-1'>Date</li>
          </ul>
        </div>
        <div className='text-center'>
          <h6 className='uppercase pt-2 pb-2 font-bold'>Support</h6>
          <ul>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Guides</li>
            <li className='py-1'>API Status</li>
          </ul>
        </div>
        <div className='text-center'>
          <h6 className='uppercase pt-2 pb-2 font-bold'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
          </ul>
        </div>
        <div className='text-center'>
          <h6 className='uppercase pt-2 pb-2 font-bold'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
            <li className='py-1'>Conditions</li>
          </ul>
        </div>

        <div className='col-span-2 pt-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <form className='flex flex-col sm:flex-row'>
            <input 
            type='email'
            placeholder='Enter email...'
            className='w-full p-2 mb-4 mr-4 rounded-md focus:outline-none'/>
            <button className='p-2 mb-4'>Subscribe</button>
          </form>
        </div>
        
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Chatty, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] text-2xl pt-4'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>


    </section>
  )
}

export default Footer
