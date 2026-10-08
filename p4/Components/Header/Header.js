import TypeWriterText from "../AnimatedText/TypeWriterText.js/TypeWriterText";
import FullGlowingText from "../AnimatedText/GlowingText/FullGlowingText";
import CityNightEffect from "../AnimatedText/BouncyText/BouncyText";
function Header() {
  return (
    <div
      className={`w-screen h-full bg-black  flex justify-start min-w-screen min-h-[800px] 
        items-center`}
    >
      {/* <TypeWriterText /> */}
      <FullGlowingText />
      {/* <CityNightEffect /> */}
    </div>
  );
}

export default Header;
