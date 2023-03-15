import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Element } from "react-scroll";

export function Projects() {
  return (
    <Element name="projects">
      <h3 className="text-3xl text-[#70FF00] mt-12 flex justify-center mb-10">Projetos</h3>
    <div className="flex justify-center items-center flex-col ">
    <Carousel className="w-[940px] max-sm:w-80">
      <div>
        <img src="petshop.jpg" />
        <p className="legend">Petshop Project</p>
      </div>
      <div>
        <img src="crypto.jpg" />
        <p className="legend">Crypto-price</p>
      </div>
    </Carousel>
    </div>
    </Element>
  )
}