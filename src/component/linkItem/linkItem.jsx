
import { LinkData } from "../../linkData";
import Slack from "../assets/slack.svg";
import Github from "../assets/github.svg";


const Links = () => {
  return (
    <div className="my-10 max-w-[1152px] mx-auto">
      {LinkData.map((link, index) => {
        return (
          <div key={index} className=" flex flex-col py-[8px] ruonded-[8px]">
            <button
              id={link.id}
              className="bg-[#EAECF0] py-4 font-medium text-[18px] rounded-lg bg-grey disabled:bg-disabledGrey hover:bg-hoverGrey active:bg-activeGrey"
            >
              <a href={link.link} className="text-[#101828] leading-7">
                {link.linkName}
              </a>
            </button>
          </div>
        );
      })}
      <div className="flex justify-center items-center gap-4 mt-8">
        <img src={Slack} alt="" />
        <img src={Github} alt="" />
      </div>
    </div>
  );
};

export default Links;