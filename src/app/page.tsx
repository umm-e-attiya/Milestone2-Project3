import Image from "next/image";
import picture1 from "../../public/picture1.png"

export default function Home() {
  return (
    
            <div>
              <div className="lg:flex flex flex-col lg:mt-16 lg:ml-24 ml-2">
                    <div className=" ml-4 mt-20 lg:mt-20">
                      <Image src={picture1} alt="nextjs-picture" width={800} className="w-full lg:w-[800px] lg:ml-44" />
                    </div>
                    <div className="ml-2 lg:ml-48 mt-8 lg:mt0">
                         <h1 className="font-bold text-xl    lg:text-2xl mt-8 lg:16">What is Next.js</h1>
                         <p className="text-base lg:text-xl w-full lg:w-[800px] mt-4 ">Next.js is a popular React framework designed for building fast, SEO-friendly web applications. Developed by Vercel, it provides features like server-side rendering (SSR), static site generation (SSG), and efficient routing, making it ideal for modern web applications. Its file-based routing system automatically turns files into routes, simplifying project structure. Additionally, Next.js supports creating API routes and dynamic content, allowing developers to handle both backend and frontend within the same platform.</p>
                           
                          <h1 className="font-bold text-xl lg:text-2xl mt-8" >Image Optimization</h1>
                          <p className="text-base lg:text-xl w-full lg:w-[800px] mt-4">Next.js includes built-in image optimization that automatically adjusts image sizes and formats based on the user s device. This feature ensures that images load quickly without compromising quality, enhancing both user experience and application performance.</p>

                          <h1 className="font-bold text-xl lg:text-2xl mt-8" >Automatic Code Splitting</h1>
                          <p className="text-base lg:text-xl w-full lg:w-[800px] mt-4">Next.js supports automatic code splitting, meaning that only the JavaScript necessary for a specific page is loaded. This reduces load times and improves performance, especially for larger applications with multiple pages.</p>

                          <h1 className="font-bold text-xl lg:text-2xl mt-8">Flexible Rendering Methods</h1>
                          <p className="text-base lg:text-xl w-full lg:w-[800px] mt-4">One of Next.js s strengths is its flexibility in rendering. Developers can choose between server-side rendering (SSR) for pages that need frequent updates, static site generation (SSG) for content that doesnt change often, and client-side rendering (CSR) for highly interactive pages. This flexibility helps optimize performance on a per-page basis, making Next.js suitable for a wide range of applications, from blogs and e-commerce sites to complex web apps.</p>
                         
                        </div>
              </div>
            </div>
  );
}
