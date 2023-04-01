import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <div className="container mx-auto">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
        
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">1</h1></div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Important Date 1</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Description of important date 1</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">2</h1></div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Important Date 2</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Description of important date 2</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">3</h1></div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Important Date 3</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Description of important date 3</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">4</h1></div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-gray-800 text-xl">Important Date 4</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Description of important date 4</p>
          </div>
        </div>
  
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl rounded-full w-20 h-20"><h1 className="mx-auto font-semibold text-lg text-white">5</h1></div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Important Date 5</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Description of important date 5</p>
          </div>
        </div>
      </div>
    </div>
);

export default Testimonials;