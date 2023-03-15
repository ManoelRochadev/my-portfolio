import { LinkedinLogo } from "phosphor-react";
import { Link } from "react-scroll";

export function Footer() {
  return (

    <footer className="p-4 mt-24 h-[280px] bg-[#161616] rounded-lg shadow md:px-6 md:py-8 flex flex-col items-center">
      <div className="flex gap-4 mb-6 mt-14">
        <a target="_blank" href="https://github.com/manoelRochadev/">
          <img src="/github.svg" className="w-10 h-10" alt="" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/manoel-rocha-7b44871b6/">
          <LinkedinLogo size={40} color="#fff" weight="bold" />
        </a>
      </div>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <Link to="main" smooth className="flex sm:items-center sm:justify-between mb-2 hover:cursor-pointer">
          <span
            className="self-center text-2xl font-semibold whitespace-nowrap text-gray-400"
          >
            Manoel
            <span className='text-white'> Rocha</span>
          </span>
        </Link>
        Todos direitos reservados
      </span>
    </footer>
  )
}