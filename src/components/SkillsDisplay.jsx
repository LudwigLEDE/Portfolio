import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiTypescript,
  SiAmazonaws,
  SiAngular,
  SiBlender,
  SiCinema4D,
  SiMicrosoftoffice,
  SiPhp,
  SiSketchup,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import {
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaMarkdown,
  FaWordpress,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiSqllite } from "react-icons/di";

const SillsDisplay = () => {
  return (
    <section className="bg-white py-4">
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={FaJava} />
    <LogoItem Icon={IoLogoJavascript} />
    <LogoItem Icon={FaPython} />
    <LogoItem Icon={SiTypescript} />
    <LogoItem Icon={FaHtml5} />
    <LogoItem Icon={FaCss3} />
    <LogoItem Icon={DiSqllite} />
    <LogoItem Icon={SiPhp} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={FaReact} />
    <LogoItem Icon={FaBootstrap} />
    <LogoItem Icon={SiTailwindcss} />
    <LogoItem Icon={FaMarkdown} />
    <LogoItem Icon={FaWordpress} />
    <LogoItem Icon={SiAngular} />
    <LogoItem Icon={SiAmazonaws} />
    <LogoItem Icon={SiBlender} />
    <LogoItem Icon={SiCinema4D} />
    <LogoItem Icon={SiMicrosoftoffice} />
    <LogoItem Icon={SiSketchup} />
    <LogoItem Icon={TbBrandVscode} />
    <LogoItem Icon={FaGithub} />
  </>
);

export default SillsDisplay;
