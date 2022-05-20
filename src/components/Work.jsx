import React from 'react';
import disasterSeries from '../assets/project/disasterseries.png';
import plosoharjo from '../assets/project/plosoharjo.png';
import bappeda from '../assets/project/bapeddabogor.png';
import mapid from '../assets/project/mapid.png';
import polisiap from '../assets/project/polisiap.png';
import todolist from '../assets/project/todolist.png';
import secret from '../assets/project/secret.png';
import blog from '../assets/project/blog.png';
import keeper from '../assets/project/keeper.png';
import dadu from '../assets/project/dadu.png';
import magicball from '../assets/project/magicball.png';
import xylophone from '../assets/project/xylophone.png';

import diceApk from "../assets/apk/dicee.apk";
import magicApk from "../assets/apk/magic8.apk";
import xyloApk from "../assets/apk/xylophone.apk";


function webApp(url, title, demoLink) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
    >

      {/* Hover Effects */}
      <div className='opacity-0 group-hover:opacity-100 text-center'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </span>
        <div className='pt-8 text-center' >
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className='text-center  bg-sky-600 hover:bg-sky-700 rounded-lg px-4 py-3 m-2  text-white font-bold text-lg'>
              Demo
            </button>
          </a>
          {/* <a href='/'>
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
            Code
          </button>
        </a> */}
        </div>
      </div>
    </div>
  )
}

function mobileApp(url, title, demoLink, apkLink) {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
    >

      {/* Hover Effects */}
      <div className='opacity-0 group-hover:opacity-100 text-center'>
        <span className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </span>
        <div className='pt-8 text-center' >
          <a href={demoLink} target="_blank" rel="noreferrer">
            <button className='text-center  bg-sky-600 hover:bg-sky-700 rounded-lg px-4 py-3 m-2  text-white font-bold text-lg'>
              Demo
            </button>
          </a>
          <a href={apkLink} target="_blank" rel="noreferrer" download>
            <button className='text-center  bg-sky-600 hover:bg-sky-700 rounded-lg px-4 py-3 m-2  text-white font-bold text-lg'>
              APK
            </button>
          </a>

        </div>
      </div>
    </div>
  )
}

const Work = () => {

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          {mobileApp(xylophone, "Simple Xylophone Mobile App", "https://youtube.com/shorts/_MgmiWwzYZY?feature=share", xyloApk)}
          {mobileApp(magicball, "Magic Ball Mobile App", "https://youtube.com/shorts/iyhHVu0p5JI?feature=share", magicApk)}
          {mobileApp(dadu, "Dice Game Mobile App", "https://youtube.com/shorts/2SaaiAkVLbQ?feature=share", diceApk)}
          {webApp(keeper, "Keeper Simple React App ", "https://hvjg2c.csb.app/")}
          {webApp(secret, "Simple Authentication Security App", "https://pure-river-48935.herokuapp.com/")}
          {webApp(blog, "Simple blog App with MongoDB", "https://desolate-caverns-34871.herokuapp.com/")}
          {webApp(todolist, "Simple Todolist App", "https://agile-depths-94248.herokuapp.com/")}
          {webApp(polisiap, "Polisiap", "https://storymaps.arcgis.com/stories/c047d25e644d4d2b8cdf7da8174b39fb")}
          {webApp(mapid, "Analysis of Coffee Seller Competition Areas", "https://geo.mapid.io/blog_read/61150f829902113474e429c5")}
          {webApp(bappeda, "Bogor Regency COVID-19 Cemetery Status Dashboard", "https://storymaps.arcgis.com/stories/04bcb449375848dda68a1958714d3052")}
          {webApp(plosoharjo, "WebGIS Plosoharjo Village", "https://araraya.github.io/Web-GIS-Desa-Plosoharjo/#14/-7.1479/110.9381")}
          {webApp(disasterSeries, "Disaster Series App", "https://www.linkedin.com/feed/update/urn:li:activity:6758377734365437952/")}

        </div>
      </div>
    </div>
  );
};

export default Work;
