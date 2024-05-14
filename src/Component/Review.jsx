const Review = () =>{
    return(
        <div className="flex flex-col items-center pb-20 bg-slate-50">
            <div className="mt-36 font-bold text-5xl leading-5 text-black max-md:mt-10 max-md:text-4xl">
        2000+ Happy Users
      </div>
      <div className="px-5 mt-20 w-full max-w-[1073px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start pt-4 pr-12 pb-20 pl-5 mx-auto w-full text-white bg-red-300 border-2 border-solid shadow-sm border-stone-300 rounded-[30px] max-md:pr-5 max-md:mt-8">
              <div className="flex gap-4 text-3xl font-semibold leading-5">
                <div className="shrink-0 w-20 h-20 rounded-full bg-zinc-300" />
                <div className="flex flex-col my-auto">
                  <div className="mb-4">Putra T</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a527e8e14fb38eeb95253a19f0996aa7c9c56ab0e19b219265c2c06f87ba2d0?"
                    className="aspect-[5.56] w-[83px]"
                  />
                </div>
              </div>
              <div className="mt-4 text-base leading-5">
              "I recently started using 4PET for managing my pet's health records and reminders. The app is incredibly user-friendly and has made it so much easier to keep track of vaccinations and vet appointments. Highly recommend it to all pet owners!"
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-4 pr-11 pb-20 pl-5 mx-auto w-full text-white bg-red-300 border-2 border-solid shadow-sm border-stone-300 rounded-[30px] max-md:px-5 max-md:mt-8">
              <div className="flex gap-4 text-3xl font-semibold leading-5">
                <div className="shrink-0 w-20 h-20 rounded-full bg-zinc-300" />
                <div className="flex flex-col my-auto">
                  <div className="mb-4">Rino P</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a527e8e14fb38eeb95253a19f0996aa7c9c56ab0e19b219265c2c06f87ba2d0?"
                    className="aspect-[5.56] w-[83px]"
                  />
                </div>
              </div>
              <div className="mt-4 text-base leading-5">
              "The features offered by 4PET are fantastic. I love the reminder notifications for feeding and grooming schedules. The interface is clean and intuitive, making it a pleasure to use. My dogs are definitely benefiting from the organized care I'm now able to provide."
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pt-4 pb-20 mx-auto w-full text-white bg-red-300 border-2 border-solid shadow-sm border-stone-300 rounded-[30px] max-md:px-5 max-md:mt-8">
              <div className="flex gap-4 text-3xl font-semibold leading-5">
                <div className="shrink-0 w-20 h-20 rounded-full bg-zinc-300" />
                <div className="flex flex-col my-auto">
                  <div className="mb-4">Indra A</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a527e8e14fb38eeb95253a19f0996aa7c9c56ab0e19b219265c2c06f87ba2d0?"
                    className="aspect-[5.56] w-[83px]"
                  />
                </div>
              </div>
              <div className="mt-4 text-base leading-5">
              "4PET has transformed the way I manage my pet's daily activities. The breeding tracking feature is particularly useful for breeders like myself. It's comprehensive and covers all the details I need. Kudos to the developers for creating such a thorough tool!"
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Review;