import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Hero = () => {
  return <div id="Hero" className="flex flex-col md:flex-row items-center justify-center w-full"
  style={{ minHeight: `calc(100vh - 72px)` }}

  >
    <div className="w-full text-secondary flex flex-col items-start justify-center gap-2 p-5 md:pl:10">
      <h1 className="font-semibold text-[30px] md:text-[50px]">
        Exercise is the key to a <span className="text-[#6f55f2]">Hilthy</span> Lifestyle
      </h1>
      <p className="text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloremque autem excepturi quis impedit cum quae aut. Tempora reiciendis aut, sapiente id sint, ex similique nostrum voluptate dolorem rerum rem!
        Non facere ullam quae sequi autem nisi veritatis quod.
      </p>
      <div className="flex items-start justify-center gap-6 mt-3">
      <button className="md:block bg-[#6f55f2] hover:bg-[#9785f2] text-white px-4 py-2 rounded-md">
        Get Started
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#9785f2] text-white px-4 py-2 rounded-md">
        <MdOutlineSlowMotionVideo className="text-[white] text-[20px]"/>
        Watch Video
        </button>
      </div>
    </div>
    <div className="w-full flex items-center justify-center">
    <div className="w-full flex items-center justify-center relative">
      
      <Image 
      className="w-[200px] md:w-[350px] h-auto relative left-0 md:left-0 lg:left-9 top-0 md:top-10 lg:top-0 z-20"
      src="/assets/img/gym-02.png"
       alt="gym2" 
       width={300}
       height={300}
       />
       <Fade cascade delay={230}>
       <Image 
      className="w-[200px] md:w-[410px] h-auto absolute left-20 md:left-0 lg:left-40 top-[0px] md:top-[0px] lg:top-[0px] xl:top-[0px] 2xl:top-[0px] z-10"
      src="/assets/img/اhero bg.png"
       alt="gym2" 
       width={300}
       height={300}
       />
       </Fade>
       
        <Image 
      className="w-[18vw] max-w-[100px] md:w-[100px]  md:max-w-[120px] h-auto absolute 
             right-[12vw] md:right-[2vw] lg:right-[5vw] xl:right-[5vw] top-[5vh] md:top-[8vh] lg:top-[8vh] xl:top-[8vh] z-30"
      src="/assets/img/hero02.png"
       alt="gym2" 
       width={100}
       height={100}
       />
       <Fade delay={200} triggerOnce>
        <Image 
      className="w-[80px] md:w-[100px] h-auto absolute left-[48px] md:left-[30px] xl:left-[140px] top-[10px] md:top-[35vh] lg:top-[38vh] xl:top-[9vh] z-30"
      src="/assets/img/hero03.png"
       alt="gym2" 
       width={100}
       height={100}
       />
       </Fade>
       <Fade cascade>
        <Image 
      className="w-[60px] md:w-[100px] h-auto absolute left-16 md:left-1 lg:left-32 xl:left-[150px] 2xl:left-[150px] top-[110px] md:top-[53vh] lg:top-[35vh] xl-[10vh] z-30"
      src="/assets/img/hero01.png"
       alt="gym2" 
       width={80}
       height={80}
       />
       </Fade>
    </div>
    </div>
    </div>;
};

export default Hero;
