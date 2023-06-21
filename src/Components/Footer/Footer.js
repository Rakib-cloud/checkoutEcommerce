
import React, { useState } from 'react';
import{SlLocationPin} from 'react-icons/sl'
import {AiOutlineMail}from 'react-icons/ai'
import {BiPhone} from 'react-icons/bi'
import './Footer.css'
const Footer = () => {


  return (
   <div class='border-b mt-10 pb-4'>
     <div class="mx-auto container">
       <div class="grid grid-cols-2 px-4 lg:px-0 gap-3 lg:grid-cols-6 sm:grid-cols-2  md:grid-cols-3 md:gap-8">
             <div>
                   <p class="font-bold text-gray-900 common_font_style">Information</p>
                   <nav  class="mt-2">
                        <ul class="space-y-1 text-sm common_font_style">
                              <li>
                                 <a to="" class="text-gray-700 transition hover:opacity-75"> Home</a>
                              </li>

                              <li>
                                 <a to="" class="text-gray-700 transition hover:opacity-75">  About us </a>
                              </li>

                              <li>
                                 <a to="" class="text-gray-700 transition hover:opacity-75"> Terms & conditions</a>
                              </li>

                              <li>
                                 <a to="" class="text-gray-700 transition hover:opacity-75">Contact us</a>
                              </li>

                                                                
                        </ul>
                   </nav>
             </div>

             <div>
                  <p class="font-bold text-gray-900 common_font_style">Customer Service</p>
                  <nav  class="mt-2">
                     <ul class="space-y-1 text-sm common_font_style">
                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  Search/filter product
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  All products
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                 Our Services
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  My Cart
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                 Orders
                               </a>
                           </li>
                     </ul>
                  </nav>
             </div>

             <div>
                   <p class="font-bold text-gray-900 common_font_style">My Account</p>
                   <nav  class="mt-2">
                        <ul class="space-y-1 text-sm common_font_style">
                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  Already rigistered?
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  Create an account
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  forgot password
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  Login Here
                               </a>
                           </li>

                           <li>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  Profile
                               </a>
                           </li>
                        </ul>
                   </nav>
             </div>

             <div>
                  <p class="font-bold text-gray-900 common_font_style">Community</p>
                  <nav  class="mt-2">
                     <ul class="space-y-1 text-sm common_font_style">
                        <li>
                            <a to="" class="text-gray-700 transition hover:opacity-75">
                               Privacy policy
                            </a>
                        </li>

                        <li>
                            <a to="" class="text-gray-700 transition hover:opacity-75">
                               Customer satisfaction zone
                            </a>
                        </li>

                        <li>
                            <a to="" class="text-gray-700 transition hover:opacity-75">
                               Newsletter
                            </a>
                        </li>                                     
                     </ul>
                  </nav>
             </div>

             <div>
               <p class="font-bold text-gray-900 common_font_style">Contact us</p>
               <nav  class="mt-2">
                  <ul class="space-y-2 text-sm common_font_style">
                           <li class='flex items-center gap-1'>
                               <span><SlLocationPin size={20}/></span>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  Dhaka,Bangladesh
                               </a>
                           </li>

                           <li class='flex items-center gap-1'>
                              <span><AiOutlineMail size={20}/></span>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  selopia@gmail.com
                               </a>
                           </li>

                           <li class='flex items-center gap-1'>
                              <span><BiPhone size={20}/></span>
                               <a to="" class="text-gray-700 transition hover:opacity-75">
                                  01700000000
                               </a>
                           </li>                                                  
                     </ul>
                  </nav>
             </div>

             <div>
                <p class="font-bold text-gray-900 common_font_style">Offer zone</p>
                <nav  class="mt-2">
                   <ul class="space-y-1 text-sm common_font_style">
                            <li>
                                <a to="" class="text-gray-700 transition hover:opacity-75">
                                   Womens zone
                                </a>
                            </li>

                             <li>
                                 <a to="#" class="text-gray-700 transition hover:opacity-75">
                                    Baby Shop
                                 </a>
                             </li>

                            <li>
                                <a to="#" class="text-gray-700 transition hover:opacity-75">
                                   Official women products
                                </a>
                            </li>

                            <li>
                                <a to="#" class="text-gray-700 transition hover:opacity-75">
                                   Women party ware
                                </a>
                            </li>

                            <li>
                                <a to="#" class="text-gray-700 transition hover:opacity-75">
                                   Women Traditional product
                                </a>
                            </li>
                           </ul>
                        </nav>
             </div>

      
       </div>
       
     </div>
   </div>
  )
}

export default Footer