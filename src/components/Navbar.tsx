import Link from "next/link";


export default function Navbar(){
  return(
    <div className="h-[80px] flex justify-between items-center sticky top-0 z-20 bg-[#252B42] ">

{/* left div */}
    <div className="sm:w-1/6 w-1/3 md:block hidden">
<p className="font-bold cursor-pointer"><span className="text-2xl">IB</span><span className="italic">Commerce</span></p>
    </div>

{/* right dive */}
<div className="flex justify-between w-full items-center">

<div>
<ul className="flex md:gap-[21px] gap-[10px] font-bold">
  <Link href={'/'} className="hover:text-slate-200">Home</Link>
  <Link href={'/product'} className="hover:text-slate-200">Product</Link>
  <Link href={'/price'} className="hover:text-slate-200">Pricing</Link>
  <Link href={'/contact'} className="hover:text-slate-200">Contact</Link>
</ul>
</div>


<div className="flex md:gap-[45px] gap-2 items-center font-bold">
<Link href={'/'} className="hover:scale-105">Login</Link>
<Link href={'/'} className="bg-[#23A6F0] md:px-[25px] px-[5px] py-[10px] md:py-[15px] rounded-[5px] hover:bg-[#23a5f0e8] transition-all duration-100">Join Us</Link>
</div>


</div>

    </div>
  )
}