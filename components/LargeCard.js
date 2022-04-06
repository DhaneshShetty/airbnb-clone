import Image from 'next/image'
function LargeCard({img,title,buttonText}){
    return(
        <div className='relative w-11/12 md:w-1/2 h-[720px] mx-4 my-4 rounded-full'>
            <Image src={img}
           layout="fill"
           objectFit="cover"
           className='rounded-xl'/>
           <div className='absolute top-12 left-1 right-1 p-8 pr-10'>
                <h3 className='text-5xl text-white font-bold font-sans'>{title}</h3>
                <button className='bg-white text-black rounded-md my-16 px-8 py-4'>{buttonText}</button>
           </div>
        </div>
    )
}

export default LargeCard;