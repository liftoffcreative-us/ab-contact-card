'use client'
import React, { useRef } from 'react'
import logo from '../../images/abLogo.png'
import Image from 'next/image'
import QRCode from 'react-qr-code'
import {useReactToPrint} from'react-to-print'

const QRCodePage = ({params}) => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    const customerID = `https://ab-contact-card.vercel.app/${Number(params.encompassId)}`
    console.log(customerID)
  return (
    <div className='flex flex-col items-center gap-6 mt-2'>
    <section ref={componentRef} className='w-[288px] h-[170px] flex gap-2 px-2 items-center justify-center dark:text-white text-black bg-white'>
        <div className='flex flex-col items-center justify-center w-1/2 text-black font-bold'>
            <Image src={logo} alt="A&B Logo" />
            <h2>CONTACT CARD</h2>
        </div>
        <div className='flex items-center justify-center w-1/2'>
            <QRCode value={customerID} className='w-full'/>
        </div>
    </section>
    <button className='px-12 py-4 bg-blue-600 text-white rounded-lg' onClick={handlePrint} >Print</button>
    </div>
  )
}

export default QRCodePage