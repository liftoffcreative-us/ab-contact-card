import React from 'react'
import avatar from '../images/avatar.jpg'
import { Montserrat } from 'next/font/google'
import logo from '../images/abLogoWhite.png'
import {MdPhoneIphone, MdOutlineMail, MdMail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import Image from 'next/image'

const montserrat = Montserrat({subsets: ['latin']})

// async function getData() {

//     const res = await fetch('https://rickandmortyapi.com/api/character/2')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }

  export default async function Contact({params}){
  async function getData() {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${Number(params.customerID)}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

    const customers = await getData()
    
   

    const randomPhone = parseInt(Math.random().toFixed(3).replace("0.",""))+"-"+parseInt(Math.random().toFixed(3).replace("0.",""))+"-"+parseInt(Math.random().toFixed(4).replace("0.",""))

    const amEmail = customers.name.replace(" ",".").toLowerCase() + "@abdist.com"

  return (
    <container>
        <div className="w-full h-[20vh] bg-gradient-to-b from-red-900 to-red-500 flex items-center justify-center">
          <Image src={logo} alt="A&B Logo" className="w-1/3 md:w-1/12"/> 
          
        </div>
        <section className='flex flex-col items-center justify-between h-[80vh] w-full'>
            <div className='flex flex-col items-center w-full -mt-[2vh] '>
                <div className='w-[140px] h-[140px] rounded-full bg-center bg-cover border-white border-4 dark:border-gray-900' style={{backgroundImage: `url(${customers.image})`}}></div>
                {/* <Image src={avatar} className='w-[140px] md:w-1/12 h-auto  rounded-full border-white border-4 dark:border-gray-900' /> */}
                <h2 className={`${montserrat.className} text-lg font-bold pt-4 dark:text-white`}>{customers.name}</h2>
                <h3 className='text-gray-400'>Account Manager</h3>
                <div className='flex pt-2 gap-2 items-center justify-center text-lg text-gray-500 dark:text-gray-300'>
                    {/* <MdPhoneIphone className='text-red-700'/>  */}
                    <h3>{randomPhone}</h3>
                </div>
                <div className='flex gap-2 items-center justify-center text-lg text-gray-500 dark:text-gray-300'>
                    {/* <MdOutlineMail  className='text-red-700 text-xl'/>  */}
                    <h3>{amEmail}</h3>
                </div>

                <div className='mt-8 flex flex-col items-center'>
                    <h2 className='font-bold dark:text-white mb-2'>Supervisor Information</h2>
                    <div className='flex items-center justify-center px-4 py-2 border-2 border-gray-100 rounded-full'>
                        <Image src={avatar} alt="Supervisor Picture" className='rounded-full w-[75px] h-[75px]'/>
                        <div className='flex flex-col ml-2 items-center justify-center text-lg text-gray-500 dark:text-gray-300'>
                            <h3 className='text-gray-500 dark:text-gray-400'>Darren Sunday</h3>
                            <h3>918-555-5555</h3>
                        </div> 
                    </div>
                    
                    
                </div>
            </div>
            <div className='flex flex-col items-center dark:text-white mt-6'>
                <h3>You May Be Asked to Provide the Following:</h3>
                <h3>Customer Name</h3>
                <h3>Customer Address</h3>
                <h3>Customer ID: EncompassID</h3>
            </div>

            <div className='w-full h-[20vh] gap-24 flex justify-center items-center'>
                {/* <a href='tel:9185555555' className='w-2/3 md:w-1/6 h-1/3 flex items-center justify-center text-white rounded-2xl bg-red-600'>CALL YOUR ACCOUNT MANAGER</a> */}
                <div className='w-[70px] h-[70px] flex items-center justify-center bg-green-500 rounded-full text-white text-4xl'>
                    <a href="tel:9185555555"><BsTelephoneFill /></a>
                </div>
                <div className='w-[70px] h-[70px] flex items-center justify-center bg-blue-500 rounded-full text-white text-4xl'>
                <a href={`mailto:${amEmail}`}><MdMail /></a>
                </div>
            </div> 
        
        </section>
    </container>
  )
}

