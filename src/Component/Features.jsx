import anjingKucing1 from '../assets/anjing&kucing.png';
import anjingKucing2 from '../assets/anjing&kucing2.png';

const Features = () =>{
return(
    <div className='flex flex-col items-center pb-20 bg-slate-50'>
        <div className="self-center mt-28 text-6xl font-bold text-black max-md:mt-10 max-md:text-4xl">
          Our Features
        </div>
        <div className="self-center mt-5 w-full max-w-[1177px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={anjingKucing1}
                  className="ml-5 w-[90%] aspect-[2.33] max-md:mx-2.5"
                />
                <div className="flex flex-col items-center px-4 py-12 bg-white border border-solid border-zinc-300 rounded-[30px]">
                  <div className="text-4xl font-bold text-black leading-[80px]">
                    Pet Tinder
                  </div>
                  <div className="shrink-0 mt-2 h-[3px] w-[215px] bg-gradient-to-r from-pink-500 to-black"></div>

                  <div className="self-stretch mt-4 text-2xl leading-6 text-neutral-600">
                    Kawinkan Peliharaan anda dengan aman dan sehat dengan 4PET
                    APP
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center mt-36 max-md:mt-10">
                <div className="flex flex-col items-center px-4 pt-12 pb-16 bg-white border border-solid border-zinc-300 rounded-[30px]">
                  <div className="text-4xl font-bold text-black leading-[80px]">
                    Pet Market
                  </div>
                  <div className="shrink-0 mt-2 h-[3px] w-[215px] bg-gradient-to-r from-pink-500 to-black"></div>
                  <div className="self-stretch mt-6 text-2xl leading-5 text-neutral-600">
                    Anda dapat mengadopsi peliharaan yang anda sukai
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-3 grow max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={anjingKucing2}
                  className="w-[90%] ml-5 aspect-[2.44] max-md:mx-2.5"
                />
                <div className="flex flex-col items-center px-3.5 pt-16 pb-16 bg-white border border-solid border-zinc-300 rounded-[30px]">
                  <div className="mb-7 text-4xl font-bold leading-8 text-center text-black">
                    Pet Profile
                  </div>
                  <div className="shrink-0 mt-2 h-[3px] w-[215px] bg-gradient-to-r from-pink-500 to-black"></div>
                  <div className="self-stretch mt-6 text-2xl leading-5 text-neutral-600">
                    Kenalkan hewan anda dengan Pet Profile.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
);
}
export default Features;