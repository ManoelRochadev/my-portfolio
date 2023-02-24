export function Skills() {
  return (
    <div className="bg-[#161616] h-[540px] flex flex-col">
      <h1 className="mt-9 mx-36 font-bold text-3xl text-[#70FF00] mb-28">Habilidades</h1>

      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-14 mb-16">
        <img src="/javascript.svg" alt=""/>
        <img src="/typescript.svg" alt="" />
        <img src="/html.svg" alt="" />
        <img src="/css.svg" alt="" />
        <img src="/react.svg" alt="" />
        <img src="/node.svg" alt="" />
        <img src="/nextjs.svg" alt="" />
        </div>
        <div className="flex gap-14">
        <img src="/nestjs.svg" alt="" />
        </div>
      </div>
    </div>
  )
}