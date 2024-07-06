import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <a onClick={()=>window.location.reload()}
        className="mx-2 w-10 text-3xl cursor-pointer font-medium decoration-white tracking-wider">
        Sd
      </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/souvik-de-06a006137/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Souvikde07" target="_blank"><FaGithub /></a>
        <a href="https://x.com/dsouvik_07" target="_blank"><FaSquareXTwitter/></a>
        <a href="https://leetcode.com/u/Souvikd07/" target="_blank"><TbBrandLeetcode /></a>
        <a download="/SOUVIK DE RESUME_Jan24.pdf" className="cursor-pointer">CV</a>
    </div>
  </nav>
  );
};

export default Navbar