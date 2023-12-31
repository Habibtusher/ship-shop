import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import preorder1 from "../../assets/preorder1.png";
const PreOrder = () => {
  return (
    <div className="container mx-auto pt-36">
      <div className="text-3xl text-center">
        <p>Featured Product For</p>
        <p> Pre-Order</p>
      </div>
      <div className="flex items-center justify-end -mt-6 cursor-pointer">
        <p className="text-xs mr-2 font-medium">Discover Our Products</p>
        <AiOutlineArrowRight />{" "}
      </div>
      <div className="grid grid-cols-4 mt-56 mb-56">
        <div className="mt-8">
        <div className="flex mt-6 cursor-pointer">
            <div className="left-arrow h-8 w-8 rounded-full hover:text-[#F4F4F4] text-[#001439] hover:bg-[#001439] bg-[#F4F4F4] mr-3 flex items-center justify-center">
              {/* <img src={leftarrow} alt="" /> */}
              <IoIosArrowBack />
            </div>
            <div className="right-arrow h-8 w-8 rounded-full hover:text-[#F4F4F4] text-[#001439] hover:bg-[#001439] bg-[#F4F4F4] flex items-center justify-center">
              {/* <img src={rightarrow} alt=""/>   */}
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div>
          <div className="h-56 w-52 bg-[#F5F5F5] rounded-2xl p-2 text-center">
            <img className="-mt-20 w-full" src={preorder1} alt="" />
            <p className="text-2xl font-semibold">VERSACE</p>
            <p className="font-semibold text-lg mt-2">
              EROS - W - <span className="text-xs font-medium">Women</span>
            </p>
            <p className="font-semibold text-lg mt-2">$285.00 USD</p>
          </div>
          <button className="btn ml-12 mt-10 btn-neutral  rounded-3xl">
            Order now
          </button>
        </div>
        <div>
          <div className="h-56 w-52 bg-[#F5F5F5] rounded-2xl p-2 text-center">
            <img className="-mt-20 w-full" src={preorder1} alt="" />
            <p className="text-2xl font-semibold">VERSACE</p>
            <p className="font-semibold text-lg mt-2">
              EROS - W - <span className="text-xs font-medium">Women</span>
            </p>
            <p className="font-semibold text-lg mt-2">$285.00 USD</p>
          </div>
          <button className="btn ml-12 mt-10 btn-neutral  rounded-3xl">
            Order now
          </button>
        </div>
        <div>
          <div className="h-56 w-52 bg-[#F5F5F5] rounded-2xl p-2 text-center">
            <img className="-mt-20 w-full" src={preorder1} alt="" />
            <p className="text-2xl font-semibold">VERSACE</p>
            <p className="font-semibold text-lg mt-2">
              EROS - W - <span className="text-xs font-medium">Women</span>
            </p>
            <p className="font-semibold text-lg mt-2">$285.00 USD</p>
          </div>
          <button className="btn ml-12 mt-10 btn-neutral  rounded-3xl">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreOrder;
