function FooterLinks({heading,links}){
    return(
        <div className="flex-col">
            <p className="font-bold text-black">{heading}</p>
            {links.map((item)=>(
                <p className="text-gray-800 text-sm py-2">{item}</p>
            ))}
        </div>
    )
}
export default FooterLinks;