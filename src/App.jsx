import * as React from "react";

import NavigationBar from "./Component/NavigationBar";
import Header from "./Component/Header";
import Features from "./Component/Features";
import HowToWork from "./Component/HowToWork";
import Review from "./Component/Review";
import Footer from "./Component/Footer";

function App() {
    return (
        <div className="flex flex-col items-center bg-slate-50">
            <NavigationBar/>
            <div id="content" className="mx-12 max-md:mx-4">
                <div className="flex flex-col mt-12 w-full max-w-[1300px] max-md:mt-10 max-md:max-w-full max-md:px-4">
                    <div id="home">
                        <Header/>
                    </div>
                    <div id="features">
                        <Features/>
                    </div>
                </div>
                <div id="howToWork" className="w-full max-md:px-4 flex justify-center items-center mb-20">
                    <HowToWork/>
                </div>
                {/* <div id="review" className="w-full max-md:px-4">
                    <Review/>
                </div> */}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
