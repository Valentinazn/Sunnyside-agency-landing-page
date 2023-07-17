import IconFacebookSvg from "../../assets/svg/IconFacebookSvg";
import IconInstagramSvg from "../../assets/svg/IconInstagramSvg";
import IconPinterestSvg from "../../assets/svg/IconPinterestSvg";
import IconTwitterSvg from "../../assets/svg/IconTwitterSvg";
import LogoSvg from "../../assets/svg/LogoSvg";
import NavFooter from "../NavFooter";

const Footer = () => {
  return (
    <footer className="bg-[#90D4C6] w-full grid grid-cols-1 gap-[40px]">
      <div className="justify-self-center mt-[70px]">
        <LogoSvg color="#2C7566" />
      </div>
      <div className="justify-self-center">
        <NavFooter
          linkAbout="About"
          linkServices="Services"
          linkProject="Project"
          linkContact=""
        />
      </div>
      <div className="justify-self-center mt-[39px]">
        <div className="flex justify-between items-center gap-9 mb-[80px] ">
          <a href="#">
            <IconFacebookSvg color="#2C7566" hoverColor="hover:fill-white" />
          </a>
          <a href="#">
            <IconInstagramSvg color="#2C7566" hoverColor="hover:fill-white" />
          </a>
          <a href="#">
            <IconTwitterSvg color="#2C7566" hoverColor="hover:fill-white" />
          </a>
          <a href="#">
            <IconPinterestSvg color="#2C7566" hoverColor="hover:fill-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
