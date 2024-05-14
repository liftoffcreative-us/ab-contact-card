import React from 'react'
import logo from '../../images/abLogo.png'
import Image from 'next/image'
import QRCode from 'react-qr-code'

const QRCodePage = ({params}) => {

    const customerID = `https://ab-contact-card.vercel.app/${Number(params.encompassId)}`
    console.log(customerID)
  return (
    <div className='flex justify-center mt-2'>
    <section className='w-[288px] h-[170px] border-2 border-black flex gap-2 px-2 items-center justify-center dark:text-white text-black bg-white'>
        <div className='flex flex-col items-center justify-center w-1/2 text-black font-bold'>
            <Image src={logo} alt="A&B Logo" />
            <h2>CONTACT CARD</h2>
        </div>
        <div className='flex items-center justify-center w-1/2'>
            <QRCode value={customerID} className='w-full'/>
        </div>
    </section>
    </div>
  )
}

export default QRCodePage