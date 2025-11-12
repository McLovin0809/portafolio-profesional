import React from "react";
import Section from "../components/templates/Section";
import SobreMi from "../data/SobreMi";

function Home(){
    return(
        <>
            <main>
                <Section content={SobreMi}/>
            </main>
        </>
    );
}
export default Home;