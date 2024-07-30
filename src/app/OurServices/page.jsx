"use client"
import React,{useRef} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../components/Footer/footer'
import { FiArrowRight } from "react-icons/fi";
import { BsFillMouse3Fill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { SiPagespeedinsights } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdBroadcastOnPersonal } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa6";
import { ImAndroid } from "react-icons/im";
import { IoIosCreate } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { MdLightbulbCircle } from "react-icons/md";
import { FaApple } from "react-icons/fa";
export default function Page() {

  const webDesignRef = useRef(null);
  const appDesignRef = useRef(null);
  const digitalMarketingRef = useRef(null);
  const brandingRef = useRef(null);
  const graphicDesigningRef = useRef(null);
  const contentWritingRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <Navbar></Navbar>
      <div className="wrap mx-auto my-12 p-4 max-w-screen-xl">
  <div className="heading-section flex flex-col md:flex-row justify-center items-center lg:items-stretch gap-6">
    {/* <!-- Left Section --> */}
    <div className="left w-full lg:w-2/2 flex justify-center items-center text-center lg:text-left">
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight px-4">
        Experience the Web Like Never Before: <br className="hidden md:block" />
        <span className="text-teal-500">
          Where the Ordinary Becomes Extraordinary
        </span>
      </h1>
    </div>
    {/* <!-- Right Section --> */}
    <div className="right w-full lg:w-1/2 flex justify-center items-center">
      <img
        className="w-40 h-40 md:w-56 md:h-56 lg:w-[400px] lg:h-[400px] object-cover rounded-full"
        src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_1280.png"
        alt="Customer Service"
      />
    </div>
  </div>

  <div className="middle  mx-auto max-w-screen-xl px-4 py-8 my-36">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    {/* <!-- Left Section --> */}
    <div className="left flex  items-center w-full md:w-1/2">
      <div className="border-l-2 border-gray-300 h-full pl-4">
        <h1 className="text-4xl my-12 font-bold text-left mx-2">SERVICES</h1>
      </div>
    </div>

    {/* <!-- Right Section --> */}
    <div className="right flex-1 w-full md:w-1/2">
      <p className="font-thin text-lg text-center md:text-left">
        We turn the ordinary into the extraordinary. From website launches to
        digital marketing, our services are crafted to elevate your brand and
        drive success. Explore endless possibilities and let your business shine
        in the digital universe.
      </p>
    </div>
  </div>
</div>

<span  className="fixed bottom-8 right-8 bg-gray-400 border-4 border-white rounded-xl shadow-lg p-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl font-semibold text-white">Start your journey</h3>
          <span className="text-3xl text-white">
            <FiArrowRight />
          </span>
        </div>
      </span>
      <div className="end">
  <div className="first-row flex md:flex-row flex-col p-2 gap-4 lg:gap-12">
    <div onClick={() => scrollToSection(webDesignRef)} className=" service-card max-w-sm bg-white border shadow-xl shadow-gray-300 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
      <span >
        <img
          className="rounded-t-lg h-72"
          src="https://imgs.search.brave.com/gsCFGtDaNnxuDQw660AR8VpN8suNQpxzDWSPyC7Abjw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYWdl/bmVzdC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDIv/d2Vic2l0ZS1kZXZl/bG9wbWVudC1hbmQt/ZGVzaWduLTEuanBn"
          alt=""
        />
      </span>
      <div className="p-5">
        <span >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            WEB DESIGN & DEVELOPMENT
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Crafting stunning websites and robust applications to elevate your
          online presence.
        </p>
      </div>
    </div>

    <div onClick={() => scrollToSection(appDesignRef)} className="service-card max-w-sm bg-white border shadow-xl shadow-gray-300 border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
      <span >
        <img
          className="rounded-t-lg h-72"
          src="https://imgs.search.brave.com/Jz505oZQ_f9kO9hQvVfGoanywxTqrEKtBjVNagnMLnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9hcnRpY2xl/cy82NDY0MDYvY29u/dmVyc2lvbnMvRW50/ZXJwcmlzZS1Nb2Jp/bGUtQXBwLURldmVs/b3BtZW50LVN0cmF0/ZWdpZXMtLVRpcHMt/LS1FeGFtcGxlcy1w/cmV2aWV3LmpwZw"
          alt=""
        />
      </span>
      <div className="p-5">
        <span >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            APP DESIGN & DEVELOPMENT
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Designing intuitive and engaging apps that drive user experience and
          business growth.
        </p>
      </div>
    </div>

    <div onClick={() => scrollToSection(digitalMarketingRef)} className="service-card max-w-sm bg-white shadow-xl shadow-gray-300 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
      <span >
        <img
          className="rounded-t-lg h-72"
          src="https://imgs.search.brave.com/lKF1j4LNdFHI0S12xtk8pdFSNceBskt3Bb4GN4jkc5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MjgxMTE4MC9waG90/by9kaWdpdGFsLW1h/cmtldGluZy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9cUJ2/MVcyclpaZWRqQm5h/OTRhUjVHREVnc0Vj/bUhyUnBvcUx2Yjcy/N1dlbz0"
          alt=""
        />
      </span>
      <div className="p-5">
        <span >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            DIGITAL MARKETING
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Driving growth with strategic digital marketing campaigns that
          amplify your brands reach.
        </p>
      </div>
    </div>
  </div>

  {/* second row */}
  <div  className="second-row my-6 flex md:flex-row flex-col p-2 gap-4 lg:gap-12">
    <div onClick={() => scrollToSection(brandingRef)}className="service-card max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
      <span>
        <img
          className="rounded-t-lg h-72"
          src="https://imgs.search.brave.com/1CKSagVJkm0CzBEyShz3bHeTnPdKcWiQZI1DnogG2kI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODUw/ODgxMzAwL3Bob3Rv/L2JyYW5kLWJ1c2lu/ZXNzLWNvbmNlcHQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhIa2RxSk5XNW45/bk9SSVZhMWhraEZW/STBtbk1ISi0yWWZL/WXpqY051YWM9"
          alt=""
        />
      </span>
      <div className="p-5">
        <span >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            BRANDING
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Building impactful brands with distinctive identities and compelling
          stories.
        </p>
      </div>
    </div>

    <div onClick={() => scrollToSection(graphicDesigningRef)} className="service-card max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
      <span >
        <img
          className="rounded-t-lg h-72"
          src="https://imgs.search.brave.com/OsbIzdoZ5IetD4PGUVke45lsaUyEUoK_Irs4ZFfVL9w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzc5LzM1LzYy/LzM2MF9GXzM3OTM1/NjI5OV9FQWp2QzRH/eTFHd3h5ejRBOHo3/ZmNOVXpjYXdnNFF5/OC5qcGc"
          alt=""
        />
      </span>
      <div className="p-5">
        <span >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            GRAPHIC DESIGNING
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Creating persuasive and engaging content that resonates with your
            audience and enhances your brand.
        </p>
      </div>
    </div>

    <div onClick={() => scrollToSection(contentWritingRef)} className="service-card max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl shadow-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:shadow-gray-400 dark:hover:shadow-black transition duration-300">
      <span >
        <img
          className="rounded-t-lg h-72"
          src="https://imgs.search.brave.com/8AIun6-sQRUMc4UKC4-Eo-uKDT02Qx5fqJapQEAOzGE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kcmlw/aWZ5LmlvL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAzLzMu/cG5n"
          alt=""
        />
      </span>
      <div className="p-5">
        <span >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            CONTENT WRITING
          </h5>
        </span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Designing visually striking graphics that capture attention and
            communicate your message effectively.
        </p>
      </div>
    </div>
  </div>
</div>



{/* all services */}

<div ref={webDesignRef} className=' web-services my-24'>
<h1 className='allServiceHead text-4xl text-center my-12 '> WEB SERVICES</h1>

<div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
      
        <SiPagespeedinsights class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Landing Page Development</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
      
        <CgWebsite class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ERP Development</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
      
        <IoMdCart class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">E-Commerce Website</h5>
    </div>
</a>

</div>

<div className='second-row flex justify-center gap-4 p-2 md:flex-row flex-col'>


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
      
        <FaCode class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Web Designing & Development</h5>
    </div>
</a>



</div>




{/* digital marketing services */}

<div ref={digitalMarketingRef} className='web-services'>
<h1 className='allServiceHead text-4xl text-center my-12'> DIGITAL MARKETING SERVICES</h1>

<div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
      
        <MdEmail class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SMO-Social Media Management</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <FaSearch  class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SEO - Search Engine Optimization</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <MdEmail class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Email Marketing Services</h5>
    </div>
</a>

</div>

<div className='second-row flex justify-center gap-4 p-2 md:flex-row flex-col'>


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <BsFillMouse3Fill class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PPC-Pay Per Click Advertising</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <BsGraphUpArrow class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SMM - Social Media Marketing Services</h5>
    </div>
</a>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <MdOutlineMessage class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SMS,Whatsapp & Calls(IVR) Marketing</h5>
    </div>
</a>

</div>

</div>
</div>


{/* BRANDIG SERVICES */}

<div ref={brandingRef} className='web-services'>
<h1 className='allServiceHead text-4xl text-center my-12'> BRANDING SERVICES</h1>

<div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <SiGooglemaps class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Google Maps & Reviews</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <MdBroadcastOnPersonal class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Branding</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <GiWireframeGlobe class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online Reputation Management</h5>
    </div>
</a>

</div>

<div className='second-row flex justify-center gap-4 p-2 md:flex-row flex-col'>


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <FaNewspaper class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Press Release & News Publishing</h5>
    </div>
</a>


</div>

</div>
</div>


{/* CONTENT MARKETING SERVICES */}

<div ref={contentWritingRef} className='web-services'>
<h1 className='allServiceHead text-4xl text-center my-12'> CONTENT MARKETING SERVICES</h1>

<div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <FaFileAlt class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Content Writing</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <FiVideo class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Video Creation/Editing</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <FaBloggerB class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog Management/Content Marketing</h5>
    </div>
</a>
</div>



</div>

{/* APP DEVELOPMENT SERVICES */}

<div ref={appDesignRef} className='web-services'>
<h1 className='allServiceHead text-4xl text-center my-12'> APP DEVELOPMENT SERVICES</h1>

<div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <ImAndroid class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Android Application Development</h5>
    </div>
</a>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <FaApple class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">iOS Application Development</h5>
    </div>
</a>




</div>


</div>


<div ref={graphicDesigningRef} className='web-services'>
<h1 className='allServiceHead text-4xl text-center my-12'> GRAPHIC DESIGNING SERVICES</h1>

<div className='first-row flex justify-center md:flex-row flex-col gap-4 p-2 '>

<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <IoIosCreate class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Logo Designing</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <AiOutlinePicture class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Poster Designing</h5>
    </div>
</a>



<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-green-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="flex items-center space-x-4">
        <MdLightbulbCircle class="text-4xl text-gray-900 dark:text-white" />
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Creative Designing</h5>
    </div>
</a>

</div>

</div>

    </>
  )
}
