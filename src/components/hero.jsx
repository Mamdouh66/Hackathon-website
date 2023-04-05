import styles from "../style";
import { robot } from "../assets";
import Button2 from "./Button2";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mb-6 ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-12 sm:ml-20 ml-0 sm:mt-0 mt-20`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-[#26281E] ss:leading-[100.8px] leading-[75px]">
          FastHacks<br className="sm:block hidden" />{" "}
            <span className="text-gradient">A Hackathon</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-[#26281E] ss:leading-[100.8px] leading-[75px] w-full">
          Ramadan-inspired.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] text-[#26281E] mt-5`}>
          A ramadan-inspired Hackathon From The Programming Club and Google Developers Student Club in IAU
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <Button2/>
          </div> 
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[80%] h-[100%] relative mr-10 " />
        {/* 
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter} py-6 mb-20`}>
      <Button2 />
      </div>
    </section>
  );
};

export default Hero;