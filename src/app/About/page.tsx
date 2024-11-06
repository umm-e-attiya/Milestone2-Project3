const About = () =>{
    return(
        <div>
            <div className="text-center font-bold text-5xl mt-20">
                <h1>About</h1>
            </div>
             <div className=" mt-16 ml-12 lg:mt-16 lg:ml-[400px]">
                <p className="lg:w-[800px] w-[300px] mt-3 ">Next.js is a powerful framework built on top of React, designed to streamline the creation of high-performance web applications. Developed by Vercel, it allows developers to utilize multiple rendering strategies—Static Site Generation (SSG), Server-Side Rendering (SSR), and Incremental Static Regeneration (ISR)—for flexibility in handling both static and dynamic content. This hybrid approach benefits SEO and ensures users receive fast, seamless content delivery.</p>
                
                <p className="lg:g:w-[800px]w-[300px] mt-10">Next.js introduces a file-based routing system that simplifies route management without the need for extensive configuration. Its API routes also enable backend logic within the same project, supporting full-stack development. Additionally, features like optimized image handling, automatic code splitting, and TypeScript support enhance both the speed and efficiency of development and performance.</p>

                <p className="lg:w-[800px] w-[300px] mt-10 ">The framework has evolved to include features like Edge Functions, which reduce latency by running code closer to users worldwide, and Turbopack for fast builds during development. These innovations, along with strong community support, have made Next.js one of the most popular choices for modern web development, particularly for creating scalable, interactive websites and applications.</p>
             </div>
        </div>
    )
}
export default About; 
