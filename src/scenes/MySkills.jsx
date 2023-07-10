import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const skills = [
  {
    image: "../assets/html.png",
  },
  {
    image: "../assets/css.svg",
  },
  {
    image: "../assets/janascript.png",
  },
  {
    image: "../assets/mongodb.png",
  },
  {
    image: "../assets/express.png",
  },
  {
    image: "../assets/react.png",
  },
  {
    image: "../assets/nodejs.png",
  },
  {
    image: "../assets/next.png",
  },
  {
    image: "../assets/taillwindcss.png",
  },
  {
    image: "../assets/github-skill.png",
  },
];

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className=" ">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between text-center md:gap-16 mt-5">
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <div className="grid md:grid-cols-4 grid-cols-2">
            {skills.map((item) => (
              <div class="max-w-sm rounded overflow-hidden shadow-lg md:m-10 m-5">
                <div className="justify-center items-center flex bg-gray-100 p-3">
                  <img
                    class="w-24 h-24"
                    src={item.image}
                    alt="Sunset in the mountains"
                  />
                </div>

                <div class="px-6 py-4"></div>
              </div>
            ))}
          </div>
        </motion.div>

        
      </div>

      {/* EXPERIENCE*/}
<div className="grid justify-center items-center ">
<p className="font-playfair font-semibold text-4xl mt-5 mb-5">MY <span className="text-red ">EXPERIENCE</span></p>
</div>
     
      <div className="grid md:grid-cols-2 mt-10 gap-5">
        <div class=" rounded overflow-hidden shadow-lg bg-red">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2">
            
             
              React js Developer
            
            </div>
            <div class="font-bold text-xl mb-2">Enfono Technologies </div>
            <p className="text-xs mb-2"> feb-2023 (present) </p>
            
            <p className=" mb-2">Deepflow-Expert</p>
            <ul style={{listStyleType:"circle"}} className="ml-5">
            <li>It is a start-up Project</li>

<li>Worked on the API Integration</li>

    
<p className=" mt-2">Family Tree</p>
<li className=" mt-2">It is a family website project</li>


<p className=" mt-2">Listing App</p>
<li className=" mt-2">It is a Dashboard for showing the users Lists,subscriptions etc..</li>

            </ul>
           
          </div>
        </div>


        <div class=" rounded overflow-hidden shadow-lg  bg-red">
          <div class="px-6 py-4">
            <div class="font-bold text-2xl mb-2">
            
             
             Web developer (Internship)
            
            </div>
            <div class="font-bold text-xl mb-2">WebSoullabs</div>
            <p className="text-xs mb-2"> Aug-2022 feb-2023</p>
            <ul style={{listStyleType:"circle"}} className="ml-5">

            <p className=" mb-2">Internmantra</p>
       <li>It is a Internship and online traning platform . This website helps students find internships and help them get the best possible start to their careers</li>

            <li>Worked on front end and backend</li>
            <li>collaborate with two other developers</li>

            <p className=" mb-2">D2d pro</p>
       <li>Created the front end of the project </li>
            </ul>
   

                

          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
