

export default function ContactPage(){
  return(
    <div className='relative z-10 px-4'>

    
    <div
    className={`inset-0 absolute bg-[url('/img3.jpg')] bg-cover bg-center bg-no-repeat h-[calc(100vh-70px)] opacity-50`}/>

      <div className='relative z-10 flex justify-center items-center flex-col gap-5 h-[calc(100vh-70px)] py-4'>

     
<h1 className='text-6xl font-bold'>Contact  Us</h1>
<ul className='md:w-1/2 text-justify text-xl rounded-lg shadow-green border p-4 shadow-lg space-y-5'>

<li className="space-x-4 w-[50%]"><span>Name:</span> <span>ILLAHI BUX JAGIRANI</span></li>
<li className="space-x-4 w-[50%]"><span>Contact:</span> <span>031518100000</span></li>
<li className="space-x-4 w-[50%]"><span>Email:</span> <span>illahibux@gmail.com</span></li>

</ul> 
</div>

    </div>
  )
}