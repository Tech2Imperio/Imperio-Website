// import { aboutHero } from "../../assets/Images";
// import { Description, Hero } from "../../components";
// import { aboutData } from "../../assets/Data";

// export const About = () => {
//   return (
//     <main>
//       <title>About Us - Imperio Railing</title>
//       <Hero
//         img={aboutHero}
//         header="About us"
//         altText="hero for aboutus"
//         subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//         curve
//       />
//       <section className="min-h-screen overflow-hidden">
//         <Description
//           yellowText="Our Company."
//           mainHeader="Crafting Excellence in Glass Railings."
//           text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
//         />

//         <div className="flex flex-col md:flex-row flex-wrap justify-center mt-16 space-x-0 md:space-x-8 space-y-4 md:space-y-0">
//           {aboutData.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border shadow-lg hover:shadow-black rounded-3xl
//                 cursor-pointer overflow-hidden text-center md:w-[20rem]  lg:w-[22rem] m-2 transform transition-transform duration-700
//                 hover:scale-105 flex flex-col  items-center"
//             >
//               <div className="flex items-center justify-center h-[17rem] w-full">
//                 <img
//                   src={item.img}
//                   title={item.title}
//                   alt={item.alt}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="mt-4 text-xl md:text-2xl font-semibold">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 text-gray-600 text-sm md:text-base">
//                   {item.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// };

// import { aboutHero, Middle } from "../../assets/Images";
// import { Description, Hero } from "../../components";
// import Metadata from "../../components/Metatag/Metatag";
// // import { aboutData } from "../../assets/Data";

// export const About = () => {
//   return (
//     <>
//       <Metadata
//         title={"About Us - Imperio Railing"}
//         description={
//           " Learn more about Imperio Railing System, your trusted provider of aluminum glass railings. Our commitment to quality, safety, and innovative design sets us apart in the industry. With years of experience, we specialize in creating stylish and durable railing solutions for both residential and commercial properties. Discover how our passion for excellence drives us to deliver the best products and services to enhance your living spaces."
//         }
//         keywords={
//           "About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
//         }
//       />
//       <main>
//         <Hero
//           img={aboutHero}
//           header="About us"
//           altText="hero for aboutus"
//           subHeader="Discover the perfect blend of safety and sophistication with Imperio's glass railing systems."
//           curve
//         />
//         <section className="max-h-screen overflow-hidden px-4 md:px-8 mb-24">
//           <Description
//             yellowText="Our Company."
//             mainHeader="Crafting Excellence in Glass Railings."
//             text="At Imperio, we specialize in creating beautiful, glass railing systems that enhance any space. With a focus on innovation and quality, our team is dedicated to delivering top-notch solutions for both residential and commercial projects."
//           />
//         </section>
//         <div className=" bg-[#292929] w-[100vw] h-[58rem] flex">
//           <div className=" grid md:grid-cols-3 justify-between items-center mx-10 my-auto xl:px-[15rem] gap-10 md:gap-14">
//             <div className=" flex flex-col justify-center rounded-2xl md:mt-32 shadow-md shadow-[#f5ce02]">
//               <h2 className=" text-[#f5ce02] text-center md:text-xl py-2 lg:text-[2rem] Raleway  uppercase ">
//                 Our Mission
//               </h2>
//               <p className="text-[10px] lg:text-[0.900rem] px-2 text-[#d4d5d6] text-justify ">
//                 At{" "}
//                 <strong className=" text-white ">
//                   Imperio Railing Systems,
//                 </strong>{" "}
//                 our mission is to design and deliver cutting-edge, high-quality
//                 glass railing systems that enhance safety and elevate the
//                 aesthetic appeal of any space. We specialize in creating elegant
//                 and durable railings for balconies, staircases, and building
//                 facades. Our commitment to innovation ensures that each system
//                 not only meets but exceeds industry standards. By integrating
//                 advanced technology with sustainable practices, we aim to
//                 provide environmentally friendly and long-lasting solutions. Our
//                 goal is to transform spaces with stylish and secure glass
//                 railings, fostering a culture of excellence and customer
//                 satisfaction. Trust us to deliver the perfect railing system for
//                 your home or building project.
//               </p>
//             </div>
//             <div className=" flex flex-col justify-center rounded-2xl shadow-md shadow-[#f5ce02]">
//               <h2 className=" text-[#f5ce02] text-center text-xl py-2 lg:text-[2rem] Raleway uppercase ">
//                 Our Values
//               </h2>
//               <p className=" text-[10px] lg:text-[0.900rem] px-2 text-[#d4d5d6] text-justify">
//                 At{" "}
//                 <strong className=" text-white ">
//                   Imperio Railing Systems,
//                 </strong>{" "}
//                 our core values are the bedrock of our business and guide every
//                 decision we make. We are unwavering in our commitment to
//                 integrity, reliability, and accountability, ensuring that these
//                 principles underpin all our operations. Our dedication to
//                 product quality and glass railing durability reflects our belief
//                 in delivering top-notch, high-quality glass railings for both
//                 residential and commercial applications. We prioritize trust and
//                 transparency in our customer relationships, fostering long-term
//                 partnerships built on mutual respect and satisfaction. By
//                 adhering to these fundamental values, we strive to set the
//                 standard for excellence in glass railing solutions and maintain
//                 our reputation as a leader in the industry. Our mission is to
//                 consistently provide elegant glass railings that enhance the
//                 safety and aesthetics of every space, ensuring unparalleled
//                 performance and lasting durability.
//               </p>
//             </div>
//             <div className=" flex flex-col justify-center h-auto rounded-2xl md:mt-32 shadow-md shadow-[#f5ce02]">
//               <h2 className=" text-[#f5ce02] text-center text-xl py-2 lg:text-[2rem] Raleway uppercase ">
//                 Our Vision
//               </h2>
//               <p className=" text-[10px] lg:text-[0.900rem] px-2 text-[#d4d5d6] text-justify">
//                 Our vision is to become the global leader in advanced glass
//                 railing solutions, known for our relentless pursuit of
//                 innovation and excellence. We aspire to set the standard for
//                 superior design and unmatched craftsmanship in the glass railing
//                 industry. By focusing on delivering cutting-edge, high-quality
//                 glass railings for residential and commercial spaces, including
//                 balconies, staircases, and building facades, we aim to elevate
//                 the aesthetic and safety of every project. We are committed to
//                 utilizing the latest technology and sustainable practices to
//                 offer durable and stylish glass railings. Our goal is to be the
//                 preferred choice for customers seeking elegant and reliable
//                 glass railing systems that enhance their spaces and exceed their
//                 expectations.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* second section open */}
//         <div className=" flex flex-col lg:flex-row py-24 justify-centre mx-auto">
//           <div className=" xl:h-[70vh] md:w-[35rem] xl:w-[30rem] py-4 border-double rounded-3xl border-[#f5ce02] border-4 border-r-transparent mx-1 md:mx-4 xl:mx-40">
//             <img
//               className=" w-[24.5rem] h-auto md:min-w-[35rem] lg:min-w-[28rem] lg:h-[50rem] xl:min-w-[30rem] xl:h-full  rounded-2xl flex mx-[0.35rem] md:mx-14 lg:mx-6 xl:mx-14"
//               src={Middle}
//               alt=""
//             />
//           </div>
//           <div className=" mx-14 px-2 flex flex-col">
//             <h1 className=" text-4xl font-normal py-8  md:text-[4rem] md:font-light Raleway  text-[#f5ce02]">
//               Our Value
//             </h1>
//             <div className="py-1 text-[0.900rem]">
//               <ul className="flex flex-col gap-4 text-[#03237b] text-justify">
//                 <li className=" flex flex-row gap-6 ">
//                   <span className=" border-[#03237b] border max-h-8  min-w-8 rounded-full flex justify-center items-center">
//                     1
//                   </span>
//                   Imperio Railing Systems offers contemporary balcony railings
//                   that elevate the aesthetic appeal of your home. Our glass
//                   railings provide a seamless look, creating an open and
//                   inviting outdoor space. Experience the perfect blend of style
//                   and sophistication with our modern designs.
//                 </li>
//                 <li className=" flex flex-row gap-6">
//                   <span className=" border-[#03237b] max-h-8 min-w-8 border rounded-full flex justify-center  items-center">
//                     2
//                   </span>
//                   Built with high-quality materials, our glass railings ensure
//                   maximum safety without compromising style. Engineered to
//                   withstand harsh weather conditions, they provide long-lasting
//                   performance for any residential building. Enjoy peace of mind
//                   with railings that prioritize your family’s safety.
//                 </li>
//                 <li className=" flex flex-row gap-6">
//                   <span className=" border-[#03237b] max-h-8 min-w-8 border rounded-full flex justify-center  items-center">
//                     3
//                   </span>{" "}
//                   We understand that every home is unique, which is why we offer
//                   customizable balcony railings. Tailor our designs to fit your
//                   specific style and functional needs, providing a personalized
//                   touch to your property. Transform your outdoor area with
//                   solutions that reflect your vision.
//                 </li>
//                 <li className=" flex flex-row gap-6">
//                   <span className="  border-[#03237b] max-h-8 min-w-8 border rounded-full flex justify-center  items-center">
//                     4
//                   </span>
//                   Our balcony railing systems are designed for easy
//                   installation, making the process hassle-free for homeowners
//                   and contractors alike. Additionally, our glass materials
//                   require minimal maintenance, ensuring they remain pristine for
//                   years to come. Enjoy elegance and convenience with every
//                   railing solution.
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* second section close */}
//       </main>
//     </>
//   );
// };

import { useState } from "react";
import { aboutHero, Middle } from "../../assets/Images";
import { Hero } from "../../components";
// import Metadata from "../../components/Metatag/Metatag";
import { motion, AnimatePresence } from "framer-motion";
import Metadata from "../../components/Metatag/Metatag";
// import { aboutData } from "../../assets/Data";

interface TabContent {
  title: string;
  content: {
    short: string;
    long: string;
  };
}

interface TabContentMap {
  [key: string]: TabContent;
}
export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("mission");

  const tabContent: TabContentMap = {
    mission: {
      title: "Our Mission",
      content: {
        short:
          "At Imperio Railing Systems, we are dedicated to providing high-quality glass railings that seamlessly blend safety, durability, and style. Our innovative solutions are crafted to enhance any space, from balconies to facades, ensuring your property looks stunning while adhering to the highest safety standards.",
        long: "At Imperio Railing Systems, our mission is to revolutionize the railing industry with cutting-edge glass railing systems that prioritize safety and elevate the aesthetic appeal of any environment. We specialize in designing elegant and durable railings for balconies, staircases, and building facades. Our commitment to innovation drives us to exceed industry standards, integrating advanced technology with sustainable practices to create environmentally friendly solutions. We aim to transform spaces with stylish and secure glass railings, fostering a culture of excellence and unwavering customer satisfaction. Trust us to deliver the perfect railing system that complements your home or building project.",
      },
    },
    values: {
      title: "Our Values",
      content: {
        short:
          "At Imperio Railing Systems, we prioritize reliability and quality in our glass railing solutions, ensuring long-lasting performance and customer satisfaction. Our commitment to craftsmanship and adherence to safety standards guarantees that every installation enhances your space while providing peace of mind.",
        long: "At Imperio Railing Systems, our core values—integrity, reliability, and accountability—are the foundation of our business. We are dedicated to delivering high-quality glass railings for both residential and commercial applications, emphasizing trust and transparency in our customer relationships. Our unwavering dedication to product quality and durability sets the standard for excellence in glass railing solutions. We strive to provide elegant railings that enhance safety and aesthetics, ensuring outstanding performance and lasting durability in every space. Our innovative designs and customer-centric approach are key to redefining industry standards and elevating our clients' experiences.",
      },
    },
    vision: {
      title: "Our Vision",
      content: {
        short:
          "At Imperio Railing Systems, we envision leading the industry through innovation and sustainability. We aim to deliver eco-friendly glass railing solutions that prioritize customer satisfaction while setting the standard for quality and safety in every project.",
        long: "Imperio Railing Systems is at the forefront of the railing industry, offering cutting-edge, frameless glass railing systems that harmoniously combine safety, style, and durability. Our innovative designs and unwavering commitment to quality make us the preferred choice for residential and commercial projects worldwide. We specialize in designing, manufacturing, and installing high-quality, frameless glass railings for a diverse range of applications, including balconies, staircases, and building facades. Our products are engineered to meet the highest standards, ensuring safety and longevity. With a strong focus on innovation and sustainability, we provide a variety of styles and finishes that complement any architectural vision, paving the way for a more beautiful and secure future.",
      },
    },
  };

  const valuePoints: { title: string; description: string }[] = [
    {
      title: "Unmatched Quality Craftsmanship",
      description:
        "Discover the art of premium craftsmanship with Imperio Railing Systems. Our aluminum and glass railings are not just products; they are masterpieces designed to enhance your residential or commercial spaces. Experience durability and style like never before, as our innovative designs transform your outdoor areas into stunning showcases of elegance.",
    },
    {
      title: "Safety First: Your Peace of Mind",
      description:
        "At Imperio Railing Systems, safety is our top priority. Our glass railings are engineered to meet the highest safety standards without compromising on aesthetics. Enjoy the perfect blend of beauty and security, knowing that our durable products provide robust protection for your family and guests. Elevate your space with confidence!",
    },
    {
      title: "Tailored Solutions for Unique Spaces",
      description:
        "Every home and business is unique, and so are our railing solutions. With Imperio, you can customize your balcony and staircase railings to match your specific style and functional needs. Let our expert team bring your vision to life, creating personalized designs that enhance the beauty and functionality of your outdoor spaces.",
    },
    {
      title: "Seamless Installation & Low Maintenance",
      description:
        "Say goodbye to installation headaches! Our railing systems are designed for effortless installation, making it a breeze for homeowners and contractors alike. Plus, our glass materials require minimal maintenance, ensuring your railings stay pristine for years to come. Enjoy the perfect combination of elegance and convenience with Imperio Railing Systems.",
    },
  ];

  return (
    <>
      <Metadata
        title={"About Us - Imperio Railing | balcony glass railing"}
        description={
          "aluminum glass railings in Mumbai, Maharashtra in India. Our commitment to quality, safety, and innovative design sets us apart. With years of experience, we specialize in creating stylish and durable railing solutions for both residential and commercial properties. Discover how our passion for excellence drives us to deliver the best products and services to enhance your living spaces. Architectural Glass is your premier online resource for glass fabrication including architectural glass, textured glass, & decorative glass."
        }
        keywords={
          "About Imperio Railing, Aluminum Glass Railings, Railing Solutions, Quality Craftsmanship, Innovative Designs, Residential Railings, Commercial Railings, Safety Standards, Durable Products, Stylish Aesthetics, Experience, Trust, Quality, Design, Innovation, Safety, Glass Railings, Aluminum Railings, Railing Systems, Outdoor Spaces, Home Improvement, Custom Designs, Stylish Solutions, Architectural Design, Premium Railing Solutions, Expert Installation Services, Reliable Railing Provider"
        }
        ogImage={aboutHero}
        ogUrl={"https://www.imperiorailing.com/aboutus"}
      />
      <main>
        <Hero
          img={aboutHero}
          header="About us"
          altText="hero for aboutus"
          subHeader="Elevate your space with Imperio's elegant, frameless glass railing systems, offering unparalleled security and a sleek, minimalist look."
          curve
        />
        <section className="max-h-screen overflow-hidden px-4 md:px-8 mb-24">
          {/* <Description
            yellowText="Our Company."
            mainHeader="Crafting Excellence in Glass Railings."
            text={`Transform your living spaces with our premium balcony and staircase glass railings, expertly crafted for modern aesthetics in Delhi, Karnataka, Rajasthan, Jharkhand, Uttar Pradesh, Mumbai, and Maharashtra. Our durable and stylish glass railing systems ensure safety while enhancing the elegance of your home or business. With custom installation options and competitive prices, we provide architectural designs that blend functionality with beauty. Proudly supplying products globally, including Dubai and across India, we are your trusted partner for innovative and secure glass railing solutions. Experience the perfect fusion of style and safety with our exquisite glass railing offerings.`}
          /> */}
          <div className="max-w-7xl flex flex-col md:flex-row mx-auto mt-10 md:mt-24 gap-4">
            <div className="flex flex-col md:w-[60%] gap-1 tablet:gap-6">
              <h2 className="YellowText text-lg sm:text-2xl lg:text-[2rem] 2xl:text-[2.5rem]">
                Imperio Glass Railings
              </h2>
              <h3 className="text-[--third] flex flex-wrap md:max-w-2xl Raleway tracking-wider w-full text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] 2xl:text-5xl">
                High-Quality Glass Railing Solutions for Your Home
              </h3>
            </div>
            <div className="md:w-[40%]">
              <p className="text-justify italic text-[--grey]">
                "Enhance your living spaces with our premium balcony and
                staircase glass railings, designed for modern aesthetics in
                Delhi, Karnataka, Rajasthan, Jharkhand, Uttar Pradesh, Mumbai,
                and Maharashtra. Our stylish and durable glass railing systems
                ensure safety while adding elegance to your home or business.
                <br />
                <br />
                With custom installation options and competitive pricing, we
                offer innovative architectural designs. Proudly supplying
                globally, including Dubai and across India, we are your trusted
                partner for secure glass railing solutions that blend style and
                safety."
              </p>
            </div>
          </div>
        </section>
        <div className="min-h-screen bg-white text-gray-800">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto "
          >
            <div className="flex flex-col lg:flex-row mb-20">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 mx-auto"
              >
                <div className="relative">
                  <img
                    src={Middle}
                    alt="Imperio Railing Systems"
                    // width={800}
                    // height={600}
                    className="object-cover w-full h-[400px] md:h-[55rem] p-4 rounded-3xl md:w-auto lg:h-[43rem] lg:w-auto xl:w-[800px] xl:h-[600px] md:p-14 lg:rounded-[4rem]"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 p-6"
              >
                <div className="space-y-8">
                  <div className="flex space-x-4 mb-6">
                    {Object.keys(tabContent).map((tab) => (
                      <button
                        key={tab}
                        className={`py-2 px-4 text-lg font-semibold transition-all duration-300 border-b-2 ${
                          activeTab === tab
                            ? "text-[#f5ce02] border-[#03237b]"
                            : "text-gray-600 border-transparent hover:text-gray-600"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tabContent[tab].title}
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#292929] p-8 rounded-lg"
                    >
                      <p className="text-[#f1efe7] leading-relaxed text-lg text-justify">
                        {window.innerWidth < 768
                          ? tabContent[activeTab].content.short
                          : tabContent[activeTab].content.long}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className=""
            >
              <h2 className=" text-center Raleway text-[35px] md:text-[4rem] text-[#f5ce02]">
                Our Value Proposition
              </h2>
              <div className="grid md:grid-cols-2 gap-12 p-4 md:p-14 lg:p-24 ">
                {valuePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    {/* <div className="flex-shrink-0 w-8 h-8 bg-[#03237b] text-white rounded-full flex items-center justify-center text-xl font-semibold">
                      {index + 1}
                    </div> */}
                    <div>
                      <h3 className="text-xl Raleway-regular text-[#03237b] mb-2">
                        {point.title}
                      </h3>
                      <p className="text-[--grey] text-sm md:text-base leading-relaxed text-justify">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
};
