import React from "react";
import ChooseBank from "./components/choose-bank";
import DigitalBank from "./components/digital-bank";
import Articles from "./components/articles";

function Home() {
    return (
        <div>
            <DigitalBank />
            <ChooseBank />
            <Articles />
        </div>
    );
}
export default Home;