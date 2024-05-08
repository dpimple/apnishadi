import one from "./New folder/logo.png";
import first from "./New folder/1.png";
import second from "./New folder/2.png";
import third from "./New folder/3.png";
import fourth from "./New folder/4.png";
import five from "./New folder/5.png";
import six from "./New folder/6.png";
import seven from "./New folder/icon.png";

function App() {
  return (
    <div>
      <nav className="flex items-center justify-between border-b border-gray-300">
        <div className="ml-8 md:ml-16 mt-5">
          <img src={one} alt="Icon" className="md:ml-16 mt-5 mb-5" />
        </div>
        <div className="flex justify-center align-middle md:hidden">
          <img src={seven} alt="Icon" />
        </div>
        <div className="hidden md:flex mr-16 justify-center align-middle">
          <div className="m-4">Home</div>
          <div className="m-4">About</div>
          <div className="m-4">Mission</div>
          <div className="m-4">Services</div>
          <div className="m-4">Contact Us</div>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row justify-center items-center md:mt-20">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left mt-20 md:mt-14 ml-0 md:ml-14">
          <p className="font-bold text-4xl md:text-5xl text-left md:text-center">Welcome to TMDC</p>
          <p className="font-bold text-2xl md:text-3xl mt-5 text-left md:text-center">Technology Mind Dynamic Creators</p>
          <p className="font-bold text-xl md:text-3xl mt-3 text-left md:text-center">"Unleashing innovation and expertise to shape the future of IT solutions."</p>
          <button className="bg-black text-white font-bold text-sm md:text-base h-10 w-36 rounded mt-5">Contact Us</button>
        </div>

        <div className="flex flex-col w-96 md:w-80 h-auto justify-center p-11 shadow-3xl mt-20 md:mt-0 rounded ml-0 md:ml-12">
          <label className="mb-2">Your name</label>
          <input type="text" className="border border-gray-300 rounded px-2 py-1 mb-2"/>
          <label className="mb-2">Your email</label>
          <input type="text" className="border border-gray-300 rounded px-2 py-1 mb-2"/>
          <label className="mb-2">Your phone</label>
          <input type="text" className="border border-gray-300 rounded px-2 py-1 mb-2"/>
          <label className="mb-2">Your City</label>
          <input type="text" className="border border-gray-300 rounded px-2 py-1 mb-2"/>
          <button className="bg-blue-600 text-white font-bold h-10 w-36 rounded ml-auto">Submit</button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center m-10 md:m-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:ml-20">
          <p className="font-bold text-3xl">About Us</p>
          <p className="md:text-lg">Welcome to TMDC an IT Consultancy, where innovation meets expertise in the realm of IT solutions. With a passion for technology and a commitment to excellence, we strive to empower businesses of all sizes to navigate the complexities of the digital landscape with confidence. Our team of seasoned professionals brings together a wealth of experience spanning across various industries, offering comprehensive consultancy services tailored to your unique needs. Whether you’re seeking strategic guidance, implementation support, or ongoing maintenance, we’re dedicated to delivering cutting-edge solutions that drive efficiency, scalability, and sustainable growth.</p>
          <button className="bg-black text-white font-bold h-10 w-36 rounded mt-5">Contact Us</button>
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
          <img src={first} className="w-96 h-96 md:h-96 object-cover" />
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center m-10">
        <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center">
          <img src={second} className="w-96 h-96 md:h-96 object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start  md:mr-20">
          <p className="font-bold text-3xl">Our Mission</p>
          <p className="font-bold text-2xl">Empowering Your Digital Future</p>
          <p className="md:text-lg">Our mission is to empower businesses with innovative IT solutions that drive growth, enhance efficiency, and elevate the overall digital experience. We strive to be a trusted partner in our clients’ success, offering tailored solutions that align with their unique goals and challenges.</p>
          <button className="bg-black text-white font-bold h-10 w-36 rounded mt-5">Contact Us</button>
        </div>
      </div>
      
      <div className="text-center font-bold text-4xl md:text-6xl">Our Services</div>


 <div className="flex flex-col-reverse md:flex-row justify-center items-center m-10 md:m-20">
 <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:ml-20"><p className="font-bold text-3xl">Website Development</p>
   <p className="md:text-lg">  Transform your online presence with TMDC. Our team crafts stunning websites that captivate audiences and drive results. From sleek designs to seamless functionality, we create tailored solutions that elevate your brand. Let’s build something remarkable together. Get in touch today!</p>
   <button className="bg-black text-white font-bold h-10 w-36 rounded mt-5">Contact Us</button>
   </div>
   <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center" > <img src={third} className="w-96 h-96 md:h-96 object-cover"/ ></div>

 </div>

 <div className="flex flex-col md:flex-row justify-center items-center m-10">
 <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center" > <img src={fourth} className="w-96 h-96 md:h-96 object-cover"/ ></div>
   <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start  md:mr-20"><p className="font-bold text-3xl">Digital Marketing</p>
   <p className="md:text-lg">Empower your brand’s online presence with TMDC. Our comprehensive digital marketing solutions are tailored to suit the unique needs of Indian businesses. From SEO and PPC to social media and content marketing, we’re here to amplify your reach, drive engagement, and boost conversions. Let’s write your success story in the digital realm. Get in touch today! </p>
   <button className="bg-black text-white font-bold h-10 w-36 rounded mt-5">Contact Us</button>
   </div>
   

 </div>

 
 <div className="flex flex-col-reverse md:flex-row justify-center items-center m-10 md:m-20 ">
 <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start md:ml-20"><p className="font-bold text-3xl">Software Development</p>
   <p className="md:text-lg">Unlock the potential of custom software tailored to your unique requirements. Our seasoned developers craft robust and scalable applications that streamline your processes, boost productivity, and provide a competitive edge in your industry.</p>
   <button className="bg-black text-white font-bold h-10 w-36 rounded mt-5">Contact Us</button>
   </div>
   <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center" > <img src={five} className="w-96 h-96 md:h-96 object-cover"/ ></div>

 </div>
 <div className="flex flex-col md:flex-row justify-center items-center m-10 ">
 <div className="w-full md:w-1/2 mt-5 md:mt-0 flex justify-center" > <img src={six} className="w-96 h-96 md:h-96 object-cover"/ ></div>
 <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start  md:mr-20"><p className="font-bold text-2xl">Social Media Management</p>
   <p className="md:text-lg">Harness the power of social media to elevate your brand with TMDC. Our expert team specializes in crafting compelling content, engaging with your audience, and driving results that matter. From strategy to execution, we’re your partners in building a vibrant online presence that resonates with your target market. Let’s unlock your brand’s potential together. Get started today! </p>
   <button className="bg-black text-white font-bold h-10 w-36 rounded mt-5">Contact Us</button>
   </div>
  

 </div>





 <div className="flex m-10 flex-col justify-center items-center mb-10">
        <p className="text-4xl font-bold mb-5">Contact Us</p>
        <p className="w-full md:w-1/2 text-center mb-8 md:text-lg">Ready to take your IT infrastructure to the next level? Let’s connect and explore how we can empower your business with innovative solutions. Whether you have questions about our services, want to discuss a project, or simply need expert advice, our team is here to help. Reach out to us today and let’s embark on a journey towards digital excellence together!</p>
        <button className="bg-black text-white font-bold h-10 w-36 rounded">Contact Us</button>
      </div>
      <div className="border-b border-gray-300"></div>
      <div className="flex flex-col justify-center items-center m-8 ">
        <p>Copyright © 2024</p>
      </div>
    </div>
  );
}

export default App;