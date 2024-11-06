import Link from "next/link";


const Navbar = () =>{
    return(
        <div>
            <div  className=" w-full bg-black text-white  lg:bg-black lg:text-white">
                <div className="flex lg:justify-between justify-between max-w-7xl mx-auto">
                <div>
                    <h1 className=" text-larger lg:text-2xl ">Next.Js</h1>
                </div>
              
                <div>
                   <ul className=" flex space-x-3 mr-3 lg:text-2xl lg:space-x-5 lg:pl-30">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                   </ul>
                 </div>
            </div>
            </div>
        </div>
    )
}
export default Navbar;