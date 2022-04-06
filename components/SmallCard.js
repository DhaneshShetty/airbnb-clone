import Image from "next/image"
function SmallCard({img,place,distance}){
    return(
        <div className="flex-col mx-5 my-5 bg-pink-500 rounded-xl min-w-[320px]">
            <Image src={img}
            layout="intrinsic"
            height="250px"
            width="320px"
            objectFit="fill"
            className="rounded-t-xl"/>
            <div className=" px-4 pb-16 pt-4 flex-col">
                <h1 className="text-white text-4xl font-bold font-sans">{place}</h1>
                <p className="text-white font-sans py-2 text-sm">{distance}</p>
            </div>        
        </div>
        
    )
}
export default SmallCard;