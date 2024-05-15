'use client'
import React, { useRef } from 'react'
import logo from '../../images/abLogo.png'
import Image from 'next/image'
import QRCode from 'react-qr-code'
// import {useReactToPrint} from'react-to-print'
import html2canvas from 'html2canvas'

const QRCodePage = ({params}) => {
    const componentRef = useRef()
    // Code to print the QR Code:
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    // })

    //Code to download the QR Code as a jpg:
    const handlePrint = async () => {
        const element = componentRef.current
        const canvas = await html2canvas(element)

        const data = canvas.toDataURL('image/jpg')
        const link = document.createElement('a')

        if(typeof link.download === 'string') {
            link.href = data
            link.download = `${params.encompassId}-qrcode.jpg`

            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } else {
            window.open(data)
        }
    }


    const customerID = `https://ab-contact-card.vercel.app/${Number(params.encompassId)}`
    console.log(customerID)
  return (
    <div className='flex flex-col items-center gap-6 mt-auto mb-auto'>
    <section ref={componentRef} className='w-[144px] h-[85px] flex gap-2 px-2 items-center justify-center dark:text-white text-black bg-white'>
        <div className='flex flex-col items-center justify-center w-1/2 text-black font-bold'>
            <Image src={logo} alt="A&B Logo" />
            <h2 className='text-[.5rem] text-center leading-none '>CONTACT CARD</h2>
        </div>
        <div className='flex items-center justify-center w-1/2'>
            <QRCode value={customerID} className='w-full'/>
        </div>
    </section>
    <button className='px-12 py-4 bg-blue-600 text-white rounded-lg mt-52' onClick={handlePrint} >Print</button>
    </div>
  )
}

export default QRCodePage