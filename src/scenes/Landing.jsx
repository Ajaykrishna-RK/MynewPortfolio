import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-28  flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
        
          className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[300px] before:h-full before:border-2 before:border-blue before:z-[-1]"
         
          >
            <img
            style={{borderTopLeftRadius:"400px",borderTopRightRadius:"400px"}}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[300px] before:rounded-t-[300px]"
              src="assets/20230115120046__MG_7791.jpg"
            />
          </div>
        ) : (
          <img
          style={{borderTopLeftRadius:"400px",borderTopRightRadius:"400px"}}
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-2.JPG"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Ajay Krishna R k
          </p>
          <p className="text-md font-semibold mt-7 font-playfair z-10 text-center md:text-start">
          MERN STACK DEVELOPER
          </p>

          <p className="mt-7  text-sm text-center md:text-start">
            I am a passionate, self-taught developer who thrives on using
            cutting-edge technologies to creatively solve digital problems. With
            a specialization in web technologies, I am driven to craft
            exceptional solutions that make a lasting impact.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <div
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
            <a
        
        href="https://drive.google.com/file/d/17fEE2QxWh1d6mUNeA6llvb-fTCJDoqZV/view"
        target="_blank"
        rel="noreferrer"
      >My Resume</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
