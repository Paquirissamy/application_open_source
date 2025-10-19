import { Palette } from "lucide-react";

function About() {
  return (
    <div className="">
      <div className="flex m-10 ">
        <Palette size={35} className=" text-blue-400    hover:scale-110" />
        <h2 className="italic hover:underline "> Formation</h2>
      </div>
      <div className="justify-center flex h-150 w-150 bg-amber-200 rounded-xl ">
        <h1 className="inline-block"> Venez essayer l'application </h1>
      </div>
      <br />
      <h1 className="flex text-5xl justify-center"> My Skills </h1>
      <br />
      <div className=" flex justify-center text-center">
        <span className="bg-blue-400 rounded-xs  text-left overflow-hidden text-clip font-medium ">
          Founded with a vision to create cutting-edge web applications, we
          combine creativity with technical expertise to deliver exceptional
          digital experiences. Our journey began with a simple belief:
          technology should be accessible, efficient, and beautifully designed.
          Today, we work with clients worldwide, transforming ideas into reality
          through clean code and innovative solutions.
        </span>
      </div>

      <br />
      <a
        href="https://www.google.fr "
        className=" text-blue-700 hover:underline"
      >
        Cliquer ici{" "}
      </a>
    </div>
  );
}

export default About;
