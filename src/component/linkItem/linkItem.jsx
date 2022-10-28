
import { LinkData } from "../../linkData";
import Slack from "../assets/slack.svg";
import Github from "../assets/github.svg";


const Links = () => {
  return (
    <div className="mt-10 max-w-[1152px] mx-auto">
      {LinkData.map((link, index) => {
        return (
          <div key={index} className=" flex flex-col py-[8px] rounded-[8px] border-none">
            <button
              id={link.id}
              className="bg-[#EAECF0] py-4 font-medium text-[18px] rounded-lg "
            >
              <a href={link.link} target="blank" className="text-[#101828] leading-7">
                {link.linkName}
              </a>
            </button>
          </div>
        );
      })}
      <div className="flex items-center justify-center gap-4 py-4 mt-[8px]">
        <img src={Slack} alt="" />
        <img src={Github} alt="" />
      </div>
    </div>
  );
};

export default Links;