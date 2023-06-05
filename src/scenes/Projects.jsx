import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {projectsdetails} from "../Projects"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative ">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="project-section"  >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center mt-10">
        <motion.div
          className=""
         
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* ROW 1 */}

          <motion.div className="grid md:grid-cols-3 justify-center items-center m-0">
            {projectsdetails.map((item)=>(
              
      <div class="max-w-sm rounded overflow-hidden shadow-lg">

      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{item?.name}</div>
        <li class=" text-base">
         {item?.title1}
        </li>
        <li class=" text-base">
      {item?.title2}
        </li>
        <li class="text-base">
         {item?.title3}
        </li>
        <li class=" text-base">
         {item?.title4}
        </li>
{item?.title5 &&  <li class=" text-base">
         {item?.title5}
        </li> }
       
<li><a    target="_blank" href={item?.github}>Github: {item?.github}</a></li>

      </div>
      
      </div>
            ))}
    
          </motion.div>
   
      
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
