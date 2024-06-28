import React from 'react';
import iconDownload  from'../assets/iconDownload.png';
import gambarUtama from'../assets/OpenDoodlesPlaying.png';

function Header() {
  return (
    <div className="max-md:max-w-full mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-12 text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-8xl font-bold leading-[100px] max-md:max-w-full max-md:text-4xl max-md:leading-9">
                  Happy Pet
                  <br />
                  Happy Breeding
                </div>
                <div className="mt-8 text-2xl leading-5 max-md:max-w-full">
                  Aplikasi untuk anda yang ingin mencari peliharaan lain untuk
                  peliharaan anda.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet={gambarUtama}
                className="w-full aspect-[1.05] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
  );
}

export default Header;
