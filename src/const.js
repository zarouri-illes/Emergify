import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Offer";
import MultiParallax from "./MultiParallax";
import Footer from "./Footer";
import More from "./components/More";

const nav = {
    links: [
        {
            title: "Home",
            goTo: "#home"
        },
        {
            title: "Service",
            goTo: "#services"
        },
        {
            title: "About",
            goTo: "#more"
        },
        
    ],

    buttons : [
        {
            title: "Sign Up",
            goTo: "signup",
            color: ""
        },
        {
            title: "Log in",
            goTo: "login",
            color: "",
        }
    ]
}

export {
    Navbar,
    nav,
    MultiParallax,
    Hero,
    More,
    Footer,
    About
}