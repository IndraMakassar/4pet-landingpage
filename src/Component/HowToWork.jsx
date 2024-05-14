import prototype4Pet from '../assets/prototype4Pet.png';
const HowToWork = () =>{
    return(
        <div>
            <div className="self-start mt-16 ml-11 text-4xl font-bold text-black leading-[79.92px] max-md:mt-10 max-md:ml-2.5">
          How To Work
        </div>
        <div className="shrink-0 mt-3.5 ml-11 h-[6px] w-[198px] bg-gradient-to-r from-pink-500 to-black max-md:ml-2.5" />
        <div className="self-center mt-20 w-full max-w-[1088px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={prototype4Pet}
                className="grow w-full aspect-[1.27] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-bold leading-8 max-md:max-w-full">
                  Find a pet you want to breed
                </div>
                <div className="shrink-0 mt-3 h-px max-md:max-w-full" />
                <div className="mt-6 text-xl leading-5 max-md:max-w-full">
                  Anda dapat mencari hewan yang anda suka{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className="self-start mt-16 ml-11 text-4xl font-bold text-black leading-[79.92px] max-md:mt-10 max-md:ml-2.5">
          How To Work
        </div>
        <div className="shrink-0 mt-3.5 ml-11 h-[6px] w-[198px] bg-gradient-to-r from-pink-500 to-black max-md:ml-2.5" />
        <div className="self-center mt-20 w-full max-w-[1088px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={prototype4Pet}
                className="grow w-full aspect-[1.27] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-bold leading-8 max-md:max-w-full">
                  Find a pet you want to breed
                </div>
                <div className="shrink-0 mt-3 h-px max-md:max-w-full" />
                <div className="mt-6 text-xl leading-5 max-md:max-w-full">
                  Anda dapat mencari hewan yang anda suka{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
    );

}
export default HowToWork;