import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <div  id="timeline" className="container mx-auto">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-[#6B705C] shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">1</h1></div>
          <div className="order-1 bg-[#A5A58D] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl font-poppins">Open Registration</h3>
            <p className="leading-snug tracking-wide text-gray-900 text-[18px] text-opacity-100 font-poppins">4th of April</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-[#6B705C] shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">2</h1></div>
          <div className="order-1 bg-[#A5A58D] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Begin
Hackathon</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">9th of April</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-[#6B705C] shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">3</h1></div>
          <div className="order-1 bg-[#A5A58D] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">End
Hackathon</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">13th of April</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-[#6B705C] shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">4</h1></div>
          <div className="order-1 bg-[#A5A58D] rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">Demo Day</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">15th of April</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-[#6B705C] shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">5</h1></div>
          <div className="order-1 bg-[#A5A58D] rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Announce Winners</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">16th of April</p>
          </div>
        </div>
      </div>
    </div>
);

export default Testimonials;