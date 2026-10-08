import Ui from "../Components/Ui/Ui";
import Head from "next/head";
import { useEffect, useState } from "react";
import Home from "../Components/Main/Home";
import Skills from "../Components/Main/Skills";
import Projects from "../Components/Main/Projects";
import Contact from "@/Components/Main/Contact";
import About from "@/Components/Main/About";
import "animate.css";

export default function Gate() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const [current, setCurrent] = useState("home");
  return (
    <>
      <Head>
        <title>Sahhar Dhia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <main className="w-screen h-screen p-0 m-0 bg-[#1d1d20] overflow-hidden transition-all">
        {domLoaded && (
          <Ui
            current={current}
            setCurrent={setCurrent}
            Children={
              <div className="w-full h-full relative">
                <Home current={current} setCurrent={setCurrent} />
                <About current={current} setCurrent={setCurrent} />
                <Skills current={current} setCurrent={setCurrent} />
                <Projects current={current} />
                <Contact current={current} />
              </div>
            }
          ></Ui>
        )}
      </main>
    </>
  );
}
