import React, { useEffect, useState } from 'react';
import { GET } from '../Helpers/Api.jsx';
import BGImage from "../assets/Freshroots1.png";
import Logo from "../assets/Freshroots1.png"
import Slide1 from "../assets/slide5.jpg";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.jpg";
import Slide4 from "../assets/slide1.png"
import About from "../assets/about.jpg";
import Blog1 from "../assets/blog7.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog5.jpg";
import Blog4 from "../assets/blog4.jpg";
import Blog5 from "../assets/blog6.jpg";
import Blog6 from "../assets/blog1.jpg";
import Map from "../assets/worldmap.png"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faPhone, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faPinterest, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function LandingPage() {

  useEffect(() => {
    Aos.init();
  }, []);

  const services = [
    { title: "Supporting Farmers", desc: "We empower farmers by providing them with a direct-to-consumer platform. By buying from Fresh Roots, you support small-scale farmers, strengthen local agriculture, and promote sustainable farming practices." },
    { title: "Fair Pricing", desc: "Fresh Roots ensures transparent pricing by eliminating intermediaries. Farmers receive fair compensation for their hard work, and consumers enjoy affordable prices for fresh produce—creating a win-win for everyone." },
    { title: "Secure Payments", desc: "Shop with confidence using our safe and secure payment system. We offer multiple payment options with encrypted transactions, ensuring a hassle-free and trustworthy shopping experience for both farmers and buyers." },
    { title: "Fast Delivery", desc: "Enjoy quick and efficient delivery with our streamlined logistics network. We ensure that farm-fresh produce reaches your doorstep in the shortest time possible, maintaining freshness and quality at every step." },
    { title: "Freshness Guaranteed", desc: "We deliver farm-fresh produce directly from farmers to your doorstep. Our commitment is to provide organic, high-quality, and pesticide-free products, ensuring you always receive the freshest and healthiest food possible." },
  ];

  const blogs = [
    {
      title: "The Rise of Direct-to-Consumer Farming: A Game Changer for Local Farmers",
      desc: "The traditional agricultural supply chain has long been dominated by middlemen, wholesalers, and retailers, often leaving farmers with minimal profits. However, direct-to-consumer (D2C) farming is revolutionizing the industry by allowing farmers to sell their produce directly to consumers, eliminating unnecessary intermediaries and ensuring fair pricing. By cutting out middlemen, farmers earn better profits, reduce post-harvest losses, and create a sustainable and efficient agricultural ecosystem. As this trend continues to grow, direct-to-consumer farming is proving to be a game changer for local farmers, empowering them to thrive in today’s digital age. 🚜🌱",
      img: Blog5,
    },
    {
      title: "Sustainable Agriculture: How Eco-Friendly Farming Benefits Everyone",
      desc: "Sustainable agriculture is more than just a farming practice—it’s a movement toward a healthier planet and a better future. By using eco-friendly methods such as organic farming, crop rotation, composting, and reduced pesticide use, farmers can preserve soil fertility, reduce pollution, and promote biodiversity. By supporting eco-friendly farming, we contribute to a healthier food system, a cleaner environment, and a more resilient agricultural economy. 🌱🌍",
      img: Blog1,
    },
    {
      title: "Technology in Agriculture: Innovations That Are Changing Farming Forever",
      desc: "The agricultural industry is undergoing a technological revolution, transforming traditional farming into a more efficient and sustainable process. Innovations such as drones, AI-powered analytics, precision farming, and IoT-based smart irrigation are helping farmers maximize crop yields while minimizing resource waste. These advancements are not just making farming easier but are also paving the way for a sustainable, productive, and tech-driven agricultural future. 🚜🌾",
      img: Blog4,
    },
    {
      title: "The Importance of Supporting Local Farmers in Today’s Economy",
      desc: "Supporting local farmers is essential for building a stronger, more sustainable economy. When consumers buy directly from farmers, they help keep money within the community, boosting local businesses and creating jobs. By choosing local, we not only support hardworking farmers but also contribute to a healthier environment, stronger food security, and a thriving agricultural sector. 🌾🥕",
      img: Blog3,
    },
    {
      title: "From Farm to Table: The Journey of Fresh Produce",
      desc: "The journey of fresh produce from farm to table is a carefully managed process that ensures quality, nutrition, and sustainability. It starts with farmers planting and cultivating crops using eco-friendly techniques to maintain soil health. Once harvested, the produce is carefully sorted, packed, and transported to local markets or directly to consumers. This farm-to-table approach strengthens local economies, promotes healthy eating, and ensures a transparent food supply chain. 🌱🥦",
      img: Blog2,
    },
    {
      title: "Why Organic Food is Better for Your Health and the Environment",
      desc: "Organic food is gaining popularity as people become more conscious of their health and environmental impact. Unlike conventional farming, organic farming avoids harmful pesticides, synthetic fertilizers, and genetically modified organisms (GMOs). As a result, organic produce contains higher nutritional value and fewer chemical residues. Additionally, organic farming preserves soil health, reduces pollution, and promotes biodiversity.By choosing organic, consumers support sustainable farming while ensuring a healthier diet and a cleaner environment.🥬",
      img: Blog6,
    }
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById("blog-container");
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 5; // Scroll by 5px each interval
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Reset to the start when it reaches the end
        }
      }
    }, 100); // Adjust time interval for scroll speed

    // Cleanup the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);



  return (
    <div>

      <div>
        <nav class="bg-[#AFE1AF] w-full border-gray-200 dark:bg-gray-900  fixed z-10" >
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex  items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} class="h-14 w-full" alt="Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black text-black"><b>FRESH ROOTS</b></span>
            </a>
            <a href='/home' class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" class="text-white bg-green-800 hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Shop Now</button>
              <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </a>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#AFE1AF] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#home-container" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                </li>
                <li>
                  <a href="#about-container" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                </li>
                <li>
                  <a href="#service-container" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                </li>
                <li>
                  <a href="#contact-container" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
                <li>
                  <a href="#blog" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                </li>
                <li>
                  <a href="/login" class="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>


      <div id="home-container"className='flex justify-center pt-10'>

        <div className='w-1/2 h-1/2 flex justify-center items-center'>

          <div data-aos="fade-up" data-aos-duration="2000" className='p-20 justify-center items-center flex pt-40'>
            <p>
              <h1 className='text-5xl text-green-800 pt-6'><b>Welcome to Fresh Roots</b></h1>
              <br />
              <h3 className='text-2xl items-center pl-10 text-green-500'><em>Empowering Farmers, Connecting Consumers.</em></h3>
              <br />
              <h3 className='font-medium text-2xl items-center '>Fresh Roots is an innovative platform designed to redefine agricultural trade by empowering farmers and ensuring direct farm-to-market sales. By cutting out intermediaries, we help farmers maximize their earnings while providing consumers with fresh, organic, and affordable produce straight from the source. Join us in nurturing a sustainable farming ecosystem!
              </h3>
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className='w-1/2 h-1/2 pt-9 flex justify-center items-center '>
          <img src={Slide1} alt='Slide' />
        </div>
      </div>

      <div className='flex justify-center'>
        <div data-aos="zoom-in-right" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <img src={Slide2} alt='Slide2' />
        </div>

        <div data-aos="zoom-in-right" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <p>
            <h1 className='text-5xl text-green-800 pl-52 pt-11'><b>Mission</b></h1>
            <br />
            <h3 className='font-medium text-lg items-center p-3 pt-10'>Fresh Roots is dedicated to revolutionizing the agricultural market by bridging the gap between farmers and consumers. Our mission is to create a fair, transparent, and sustainable marketplace where farmers receive the earnings they deserve while consumers access fresh, high-quality produce. By eliminating middlemen, we ensure that farmers maximize their profits while buyers enjoy farm-to-table freshness at competitive prices. We are committed to building a trust-based, community-driven platform that supports small-scale farmers, strengthens local economies, and promotes healthier living. Through innovation and ethical trade, Fresh Roots transforms the way food is sourced, sold, and consumed.</h3>
          </p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div data-aos="zoom-in" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <p>
            <h1 className='text-5xl text-green-800 pl-60 pt-20'><b>Vision</b></h1>
            <br />
            <h3 className='font-medium text-xl items-center p-6 pt-10'>
              At Fresh Roots, we envision a future where farmers are economically empowered, and consumers have direct access to fresh, high-quality produce at fair prices. By eliminating middlemen, we aim to create a transparent, sustainable, and farmer-centric marketplace that ensures better profits for farmers and healthier choices for consumers. Our vision is to revolutionize the agricultural industry by fostering trust, fairness, and innovation. We aspire to build a self-sustaining ecosystem where farming communities thrive, food security is strengthened, and consumers connect directly with the hands that feed them, ensuring a healthier and more sustainable future for all.
            </h3>
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000" className='w-1/2 h-1/2 flex justify-center items-center'>
          <img src={Slide3} alt='Slide3' />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" id='about-container' className='flex justify-center items-center'>
        <div className='w-1/2 h-1/2 flex justify-center items-center'>
        <img src={About} alt='About' />
        </div>
        <div className='w-1/2 h-1/2 '>
        <p>
          <h1 className='text-green-800 text-5xl pl-5 pb-10'>
            <b>About Us</b></h1>
            <h1 className='text-[#2fb62f] text-4xl pl-5'>We Produce Organic Food For Your Family!</h1>
            <h4 className='p-2 pl-5 pt-5 text-lg'>Fresh Roots is a farmer-first online marketplace dedicated to removing middlemen, ensuring fair earnings for farmers, and providing fresh, healthy produce to consumers. We bridge the gap between farmers and buyers, creating a transparent, sustainable, and efficient food supply chain. Our mission is to support local agriculture, promote ethical trade, and bring farm-fresh goodness directly to your doorstep. Every purchase on Fresh Roots strengthens farming communities, empowers small-scale farmers, and supports a healthier food ecosystem. Join us in revolutionizing agriculture and making a difference—one harvest at a time!</h4>
          
          <div className='flex justify-center items-center fa-4x'>
            <div className='w-1/2 h-1/2 pl-5'>
          <FontAwesomeIcon icon={faSeedling} style={{color: "#AFE1AF"}}/>
          <h5 className='text-xl font-bold'>100% Organic</h5>
          <h6 className='text-sm text-green-800'>We guarantee pure, chemical-free, and naturally grown produce. No pesticides, no GMOs—just fresh, healthy, and eco-friendly food straight from the farm to your table. </h6>

          </div>
          <div className='w-1/2 h-1/2 pl-5'>
          <FontAwesomeIcon icon={faAward} style={{color: "#AFE1AF"}} />
          <h5 className='text-xl font-bold'>Award Winning</h5>
          <h6 className='text-sm text-green-800'>Fresh Roots is proud to be recognized for its commitment to quality, sustainability, and farmer empowerment. Experience excellence with every purchase!</h6>

          </div>
          </div>
          </p>
        </div>
      </div>

      <div id='service-container' className="flex flex-col items-center">
        <h1 data-aos="fade-up" data-aos-duration="2000" className="text-5xl text-green-800 pt-10 font-bold">Services</h1>

        {/* Container for Cards */}
        <div className="flex justify-center items-center gap-6 mt-10 flex-wrap">
          {services.map((service, index) => (
            <div data-aos="flip-left" data-aos-duration="2000"
              key={index}
              className="w-[250px] h-[300px] bg-[#AFE1AF] rounded-[20px] flex flex-col items-center justify-center 
            p-4 text-center shadow-lg backdrop-blur-[10px] transition-all duration-500 ease-in-out 
            hover:cursor-pointer hover:scale-105"
            >
              <h2 className="text-xl font-bold text-green-900 pb-5">{service.title}</h2>
              <p className="text-sm text-black mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="blog">
      <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col items-center w-full py-10">
        <h1 className="text-5xl text-green-800 font-bold mb-10">Our Blog</h1>

        {/* Horizontal Scrolling Container without scrollbar */}
        <div
          id="blog-container"
          className="w-full overflow-hidden flex gap-8"
          style={{
            scrollBehavior: "smooth", // Smooth scroll effect
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="min-w-[600px] max-w-[600px] h-[500px] bg-[#AFE1AF] rounded-[20px] 
            shadow-lg overflow-hidden transition-all duration-500 ease-in-out hover:cursor-pointer hover:scale-105"
            >
              <img src={blog.img} alt={blog.title} className="w-full h-[250px] object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-green-900">{blog.title}</h2>
                <p className="text-sm text-black mt-2">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      </div>


      <div id='contact-container' data-aos="fade-up" data-aos-duration="2000" className='flex-col w-full bg-white h-100 text-black'>
        <div className='flex flex-col-3 w-full'>
        <div className='w-1/3'>
        <a class="flex items-center space-x-3 rtl:space-x-reverse pl-10 pt-24">
        <img src={BGImage} class="h-10" alt='Logo' />
        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-black text-green-800'><b>Fresh Roots</b></span>
        </a>
        <p className='pl-10 text-green-600'><em>Empowering Farmers, Connecting Consumers.</em></p>
        </div>
        <div className='flex justify-center items-center w-1/3'>
        <p>
          <h2 className='text-2xl p-2 font-semibold whitespace-nowrap dark:text-black text-green-800'><b>Quick Links</b></h2>
          <a href='#home-container' className='hover:text-green-700'>
            <FontAwesomeIcon icon={faArrowRight} className='pr-2' />Home<br />
          </a>
          <a href='#about-container' className='hover:text-green-700'>
            <FontAwesomeIcon icon={faArrowRight} className='pr-2' />About Us<br />
          </a>
          <a href='#services-container' className='hover:text-green-700'>
            <FontAwesomeIcon icon={faArrowRight} className='pr-2' />Our Services<br />
          </a>
          <a href='#blog' className='hover:text-green-700'>
            <FontAwesomeIcon icon={faArrowRight} className='pr-2' /> Our Blog<br />
          </a>
          <a href='#contact-container' className='hover:text-green-700'>
            <FontAwesomeIcon icon={faArrowRight} className='pr-2' />Contact Us<br />
          </a>
        </p>
        </div>
        <div className='flex justify-center items-center w-1/3'>
        <p>
        <h2 className='text-2xl p-2 pt-24 font-semibold whitespace-nowrap dark:text-black text-green-800'><b>Contact Us</b></h2>
        <a className='hover:text-green-700'>
        <FontAwesomeIcon icon={faPhone} className='pr-2' />+91 7260040597<br />
        </a>
        <a className='hover:text-green-700'>
        <FontAwesomeIcon icon={faEnvelope} className='pr-2'/>freshroots@gmail.com<br />
        </a>
        <img src={Map} alt='Map' className='p-2'/>
        </p>
        </div>
        </div>
        <div className='flex justify-center items-center p-4 gap-4 pb-7'>
          <FontAwesomeIcon icon={faTwitter} className='h-10'/>
          <FontAwesomeIcon icon={faSquareInstagram} className='h-10' />
          <FontAwesomeIcon icon={faFacebook} className='h-10' />
          <FontAwesomeIcon icon={faPinterest} className='h-10' />
          </div>
        <div className="flex justify-center text-xl ">
          <p className='text-green-800 p-2'>©Fresh Roots 2025. All rights are reserved!</p>
        </div>
      </div>


    </div>
  )
}

export default LandingPage