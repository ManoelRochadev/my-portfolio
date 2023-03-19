import { Element } from "react-scroll"

export function Main() {
  return (
    <div className="flex flex-row gap-44 max-sm:mx-6 mx-32 my-20 lg:justify-center">
      <div className="flex flex-col font-bold">
        <p className=" text-2xl">Olá, sou</p>
        <span className="mt-6 text-6xl max-sm:text-4xl text-[#70FF00]">&lt; Manoel<br /> Rocha &gt;</span>
        <p className="text-4xl max-sm:text-2xl mt-8">Fullstack Developer</p>

        <div className="mt-6 text-2xl text-[#828282] flex flex-row max-sm:text-lg gap-12 max-sm:gap-4">
          <div className="flex flex-row font-normal max-sm:text-sm">
            <span className="mx-3 text-6xl max-sm:text-4xl leading-none font-bold">2</span>de experiência  <br /> 
            em desenvolvimento
          </div>  
          <div className="flex flex-row font-normal max-sm:text-sm">
            <span className="mx-3 text-6xl max-sm:text-4xl leading-none font-bold">13</span> Projetos pessoais <br />
            concluidos
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img 
        className="object-contain h-[380px] w-[450px]"
        src="dev.svg" alt="Foto do desenvolvedor"
         />
      </div>
    </div>
  )
}