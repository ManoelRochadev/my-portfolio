import { Element, Link } from 'react-scroll';

export function About() {
  return (
    <Element 
    name='about'  
    className="flex flex-col lg:flex-row justify-center items-center gap-28 mt-40 mb-52 md:flex-col max-sm:flex-col">
      <div className="w-[340px] lg:w-[480px] ">
        <h2 className="font-bold text-3xl text-[#70FF00]">Sobre mim</h2>
        <p className="mt-8">
          Como desenvolvedor Fullstack, tenho vasta experiência em tecnologias como Javascript, Typescript, React, Next.js, Node.js e Nest.js. Isso me torna um profissional altamente capacitado e preparado para assumir projetos desafiadores em qualquer etapa do ciclo de desenvolvimento de software.
          <br />
          Minha especialização em Javascript e Typescript permite que eu desenvolva aplicativos web altamente interativos e escaláveis. Com a minha experiência em React e Next.js, posso criar interfaces de usuário modernas e atraentes, entregando uma experiência de usuário de alta qualidade.
          <br />
          Além disso, sou experiente em Node.js e Nest.js, o que me permite criar aplicativos back-end robustos e escaláveis. Essa combinação de habilidades me permite trabalhar em todas as etapas do ciclo de desenvolvimento de software e me torna um membro valioso da equipe em qualquer projeto.
        </p>
      </div>
      <div className="flex flex-col font-bold gap-2 font-courier">
        <div className="h-[137px] w-[569px] max-sm:w-[324px] max-sm:h-[104px] max-sm: flex flex-row items-center justify-between bg-[#4F4F4F] rounded-lg gap-12 max-sm:gap-8">
          <div className="ml-8 flex flex-col">
            <span className="text-3xl max-sm:text-xl">Fullstack Developer</span>
            <Link to='projects' smooth href="#" className="text-[#70FF00] mt-4 max-sm:mt-2 underline font-normal text-lg">Projetos</Link>
          </div>
          <img className="mr-16" src="/code.svg" alt="" />
        </div>
        <div className="h-[137px] w-[569px] max-sm:w-[324px] max-sm:h-[104px] flex flex-row items-center justify-between bg-[#4F4F4F] rounded-lg gap-12 max-sm:gap-8">
          <div className="ml-8 flex flex-col">
            <span className="text-3xl max-sm:text-xl">Freelancer</span>
            <a href="mailto: manoelmelo367@gmail.com" className="text-[#70FF00] mt-4 max-sm:mt-2 underline font-normal text-lg">Contrate-me</a>
          </div>
          <img className="mr-16" src="/code-2.svg" alt="" />
        </div>
        <div>
        </div>
      </div>
    </Element >
  )
}