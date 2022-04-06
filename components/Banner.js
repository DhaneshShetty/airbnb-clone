import Image from "next/image"
function Banner(){
    return(
        <div className="relative h-[600px] sm:h-[500px] md:h-[600px] xl:h-[700px]">
        <Image src="https://a0.muscache.com/im/pictures/95fab018-afab-4a2d-bf80-775b1dd57acf.jpg?im_w=1440"
        layout="fill"
        objectFit="cover"/>
        <div className="absolute bottom-10 w-full text-center">
        <p className="text-white font-bold font-sans text-3xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-600 bg-white rounded-full px-6 py-2 shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150 font-bold">I'm flexible</button>
        </div>
        </div>
    )
}

export default Banner;