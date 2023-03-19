import { Element } from "react-scroll"

export function Skills() {
  return (
    <Element name="skills" className="bg-[#161616] h-[640px] max-sm:h-auto flex flex-col">
      <h1 className="mt-9 flex justify-center font-bold text-3xl text-[#70FF00] mb-28">Habilidades</h1>

        <div className="grid grid-cols-4 justify-center gap-28 mx-auto mb-16 max-sm:grid-cols-2 max-sm:gap-24">
        <img className="mt-auto" src="/javascript.svg" alt=""/>
        <img className="mt-auto" src="/typescript.svg" alt="" />
        <img className="mt-auto" src="/html.svg" alt="" />
        <img className="mt-auto" src="/css.svg" alt="" />
        <img className="mt-auto" src="/react.svg" alt="" />
        <img className="mt-auto" src="/node.svg" alt="" />
        <img className="mt-auto" src="/nextjs.svg" alt="" />
        <img className="mt-auto" src="/nestjs.svg" alt="" />
        </div>
    </Element>
  )
}
