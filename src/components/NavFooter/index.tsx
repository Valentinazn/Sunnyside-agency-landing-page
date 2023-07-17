import { INav } from "../Nav";

const NavFooter = (props: INav) => {
  return (
    <ul className="flex justify-center items-center gap-[57px]">
      {[props.linkAbout, props.linkServices, props.linkProject].map((i) => {
        return (
          <li
            key={i}
            className="text-[#458D7E] leading-[25px] tracking-[-0.129px] hover:text-white text-[18px]"
          >
            <a href="#">{i}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavFooter;
