import { Navbar, Hero, About, MultiParallax, Footer, More } from "./const"
import { useEffect, useState } from "react"
function App() {

    const [data,setData] = useState(null);
    useEffect(() => {
        fetch("/api")
        .then(res => res.json())
        .then(data => console.log(data))
        .then(err => console.log(err))
    });

    return (
        <section className="overflow-hidden bg-transparent">
            <Navbar/>
            <MultiParallax/>
            <About />
            <More />
            <Footer />
        </section>
    )
}

export default App
