import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="h-[calc(100vh-80px)] flex flex-col justify-around items-center gap-2 z-0">

<div className="md:w-2/3 space-y-4 p-[40px] ">
<p className="text-center">Welcome</p>
<h1 className="text-4xl text-center">Selling on the <br /> Internet like a Pro</h1>
<p className="text-justify">Lorem ib ipsum dolor sit amet consectetur adipisicing elit. Enim modi, iusto distinctio vero voluptatem tempora mollitia pariatur. Molestiae culpa soluta, consequuntur?</p>

<div className="flex md:gap-3 gap-1 justify-center">
  <Link href={'/'} className="bg-[#23A6F0] px-3 md:px-[40px] py-[15px] rounded-[5px] hover:bg-[#23a5f0e8] transition-all duration-100">Get Quote Now</Link>
  <Link href={'/'} className="text-[#23A6F0] border border-[#23A6F0] px-3 md:px-[40px] py-[15px] rounded-[5px] font-bold">Learn More</Link>
</div>
</div>


{/* bottom div */}
<div className="flex gap-3 rounded-sm md:flex-row flex-col">

<div className="space-y-3 bg-[#ffff] text-[#252B42] py-[35px] px-[30px] rounded-sm">
<Image src={'/img1.png'} alt="Image" width={50} height={80}/>
<h1>TailwindCss Course</h1>
<p className="h-1 w-[10%] bg-red-500"></p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, accusamus velit asperiores facilis autem quas incidunt voluptates!</p>
</div>

<div className="space-y-3 bg-[#ffff] text-[#252B42] py-[35px] px-[30px] rounded-sm">
<Image src={'/img3.png'} alt="Image" width={80} height={80}/>
<h1>Next.js Course</h1>
<p className="h-1 w-[10%] bg-red-500"></p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, accusamus velit asperiores facilis autem quas incidunt voluptates </p>
</div>

<div className="space-y-3 bg-[#ffff] text-[#252B42] py-[35px] px-[30px] rounded-sm">
<Image src={'/img2.png'} alt="Image" width={80} height={80}/>
<h1>TypeScript Course</h1>
<p className="h-1 w-[10%] bg-red-500"></p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, accusamus velit asperiores facilis autem quas incidunt voluptates !</p>
</div>









</div>

   </div>
  );
}
