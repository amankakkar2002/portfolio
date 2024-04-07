import React from 'react';
import { FaYoutube, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3" style={{backgroundColor:'#0c233b'}}>
      <div className="container text-center">
        <a href='https://www.linkedin.com/in/aman-kakkar-2355291b3/' target="_blank" className='mx-2 h3 text-white'><span><FaLinkedin className='linkedin'/></span></a>
        <a href='https://github.com/amankakkar2002' target="_blank" className='mx-2 h3 text-white'><span><FaGithub className='github'/></span></a>
        <a href='https://www.youtube.com/channel/UCaZvyFmrHfUymcMFwcqcFJw' target="_blank" className='mx-2 h3 text-white'><span className='youtubeicon'><FaYoutube /></span></a>
        <a href='https://www.instagram.com/_the.mist_' target="_blank" className='mx-2 h3 text-white'><span className='instaicon'><FaInstagram /></span></a>
      </div>
      <div className="container text-center py-2" style={{userSelect:'none'}}>
        <span className="text-white">© {new Date().getFullYear()} <a href='https://www.linkedin.com/in/aman-kakkar-2355291b3/' target="_blank" className='text-white font-weight-bold'>Aman Kakkar</a></span>
      </div>
    </footer>
  );
};

export default Footer;
