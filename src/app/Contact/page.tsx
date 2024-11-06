const Contact = () =>{
    return(
           <div>
               <div className="mt-16">
                   <h1 className="text-center mt-16 font-bold text-5xl">Contact us</h1>
                   <p className="text-center mt-16 w-[300px]lg:text-center lg:mt-16 ">We would love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out. Our team is here to help.</p>
                    <div className="mt-16 bg-blue-100 mx-auto max-w-7xl  lg:max-w-3xl  py-5">
                   <form className="mx-8 mt-3" >
                      
                      <label htmlFor="name" className="text-lg ">Name:</label><br></br>
                      <input type="text" className="w-96" /> <br></br>

                      <label htmlFor="email" className="text-lg ">Email:</label><br></br>
                      <input type="text" className="w-96" /><br></br>

                      <label htmlFor="message" className="text-lg ">Message:</label><br></br>
                      <input type="text" className="w-96 h-40"  /><br></br>

                      <button type="submit" className="w-72 h-14 bg-black text-white mt-16 ml-16">Send Message</button>
                   </form>
                   </div>
               </div>
           </div>
    )
}

export default Contact;