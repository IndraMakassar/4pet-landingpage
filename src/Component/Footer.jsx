const Footer = () => {
    return(
        <div className="flex justify-center items-center px-16 py-20 text-white bg-neutral-700 rounded-[40px_40px_0px_0px] max-md:px-5 w-full">
      <div className="flex flex-col mt-6 w-full max-w-[1016px] max-md:max-w-full">
        <div className="self-center text-5xl font-bold leading-[80.16px] max-md:max-w-full max-md:text-4xl">
          Ready to Get Started
        </div>
        <div className="flex gap-5 mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 self-start mt-11 max-md:mt-10">
            <div className="text-5xl leading-5 max-md:text-4xl">4PET</div>
            <div className="mt-7 text-2xl leading-[49.92px]">
              Dating App For Your Lovely Pet
            </div>
          </div>
          <div className="flex flex-1 gap-5 justify-between font-bold leading-[50px]">
            <div className="text-xl">
              <span className="text-4xl">Services</span>
              <br />
              <span className="">How It’s Works</span>
              <br />
              <span className="">Features</span>
              <br />
              <span className="">Pricing</span>
            </div>
            <div className="text-5xl max-md:text-4xl max-md:leading-10">
              <span className="text-4xl">Company</span>
              <br />
              <span className="text-xl ">About</span>
              <br />
              <span className="text-xl ">Terms</span>
              <br />
              <span className="text-xl ">Privacy Policy</span>
              <br />
              <span className="text-xl ">Careers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Footer;