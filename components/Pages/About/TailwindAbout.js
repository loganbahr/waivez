/**
 * @file /components/Pages/About/TailwindAbout.js
 * @author Logan Bahr
 * @description
 * @since 7/23/22
 */

import AboutHero from "./AboutHero";
import AboutFaq from "./AboutFaq";
import AboutTeam from "./AboutTeam";
import AboutStepper from "./AboutStepper";

const TailwindAbout = () => {

    return (
        <div>
            <AboutHero/>
            <AboutStepper/>
            <AboutFaq/>
            <AboutTeam/>
        </div>
    )
}

export default TailwindAbout;