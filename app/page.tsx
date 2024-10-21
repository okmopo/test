import Image from "next/image";

export default function Home() {
  return (
    <div className="viewport grid grid-cols-1 items-center justify-center">
      <div className="grid grid-cols-1 items-center w-full justify-center lg:flex">
        <div className="flex justify-center">

        <Image src={'/logo.png'} width={500} height={500} alt='DFSv logo' className="flex justify-center"/>
        </div>
        <div className="grid grid-cols-1 justify-center">
        <span className=' whitespace-nowrap text-[25px] flex pt-10 pl-2 font-semibold justify-center text-white lg:text-[55px] md:text-[50px]'>
          Deutsch-Finnischer
        </span> 
        <span className="text-[25px] flex pl-2 font-semibold justify-center text-white lg:text-[55px] lg:justify-start md:text-[50px]">Sportverein</span>
        </div>
      </div>
      <span className="flex justify-center text-[15px] md:text-[20px]">This page is under Development.</span>
    </div>
  );
}
