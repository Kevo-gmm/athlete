import logo from "@/assets/image.png";
import Image from "next/image";
// import SocialX from "@/assets/social-x.svg";
// import SocialInsta from "@/assets/social-insta.svg";
// import SocialLinedIn from "@/assets/social-linkedin.svg";
// import SocialPin from "@/assets/social-pin.svg";
// import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="dark:bg-black dark:text-[#BCBCBC] text-sm py-10 text-center bg-white text-black mt-auto justify-items-end  w-full">
      <div className="container mx-auto">
        <div className="inline-flex relative before:content-[''] before:top-0 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]  before:absolute">
          <Image src={logo} height={40} alt="saas" className="relative" />
        </div>

        <p className="mt-6">
          &copy; 2024 Undefined Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
