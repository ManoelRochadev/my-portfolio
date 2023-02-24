export function About() {
  return (
    <div className="flex flex-row justify-center items-center gap-28 mt-40 mb-52">
      <div className="w-[420px]">
        <h2 className="font-bold text-3xl text-[#70FF00]">Sobre mim</h2>
        <p className="mt-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste alias provident repellendus ad! Dolores incidunt explicabo est nostrum deserunt, non harum veniam eum, error rem saepe voluptate obcaecati, dolorum labore.
        </p>
      </div>
      <div className="flex flex-col font-bold gap-2 font-courier">
      <div className="h-[137px] w-[569px] flex flex-row items-center justify-between bg-[#4F4F4F] rounded-lg gap-12">
        <div className="ml-8 flex flex-col">
        <span className="text-3xl">Fullstack Developer</span>
        <a href="#" className="text-[#70FF00] mt-4 underline font-normal text-lg">Projetos</a>
        </div>
        <img className="mr-16" src="/code.svg" alt="" />
      </div>
      <div className="h-[137px] w-[569px] flex flex-row items-center justify-between bg-[#4F4F4F] rounded-lg gap-12">
        <div className="ml-8 flex flex-col">
        <span className="text-3xl">Freelancer</span>
        <a href="#" className="text-[#70FF00] mt-4 underline font-normal text-lg">Contrate-me</a>
        </div>
        <img className="mr-16" src="/code-2.svg" alt="" />
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}