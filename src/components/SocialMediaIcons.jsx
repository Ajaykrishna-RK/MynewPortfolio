const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ajay-krishna-730488229/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto:ajaykrishnark73@gmail.com" 
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link"  style={{height:'30px'}} src="../assets/email.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Ajaykrishna-RK?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" style={{height:'30px'}} src="../assets/GitHub-.png" />
      </a>
     
      <a
        className="hover:opacity-50 transition duration-500"
        href="tel:7356970172"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" style={{height:'30px'}} src="../assets/phone_s.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://wa.me/7356970172"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" style={{height:'30px'}} src="../assets/WhatsApp.svg.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
