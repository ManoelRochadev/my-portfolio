export function Main() {
  return (
    <div className="flex flex-row gap-44 mx-32 my-20">
      <div className="flex flex-col font-bold">
        <p className=" text-2xl">Olá, sou</p>
        <span className="mt-6 text-6xl text-[#70FF00]">&lt; Manoel<br /> Rocha &gt;</span>
        <p className="text-4xl mt-8">Fullstack Developer</p>

        <div className="mt-6 text-2xl text-[#828282] flex flex-row gap-12">
          <div className="flex flex-row font-normal">
            <span className="mx-3 text-6xl leading-none font-bold">2</span>Years of <br /> experience
          </div>  
          <div className="flex flex-row font-normal">
            <span className="mx-3 text-6xl leading-none font-bold">13</span> Projects Completed <br />
            around the world
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