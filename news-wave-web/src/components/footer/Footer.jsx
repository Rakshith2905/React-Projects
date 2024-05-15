import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <span className="name">
        &copy; 2024 Newswave Inc. - Developed by Rakshith Keshavamurthy
      </span>
      <hr style={{ width: '90%' }} />
      <div className="iconContainer">
        <a href="https://github.com/Rakshith2905" target="__blank">
          <GitHubIcon sx={{ color: '#fff' }} fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/rakshith-keshavamurthy-a34b8412b"
          target="__blank"
        >
          <LinkedInIcon sx={{ color: '#fff' }} fontSize="large" />
        </a>
        <a href="mailto:rakshithk1996.rk@gmail.com" target="__blank">
          <EmailIcon sx={{ color: '#fff' }} fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
