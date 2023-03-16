import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { EnvelopeSimple, GithubLogo, LinkedinLogo, List } from 'phosphor-react'
import { Link } from 'react-scroll';

export function Header() {
  // Função para abrir o menu mobile em react
  const [open, setOpen] = useState(false)
  function openMenu() {
    setOpen(true)
  }
  function closeMenu() {
    setOpen(false)
  }

  return (
    <>
      {
        open ? (
          <div className="fixed top-0 left-0 w-full h-full bg-zinc-800  z-10" onClick={closeMenu}>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <div className="flex flex-col gap-10 items-center">
                <Link
                  to='about'
                  smooth
                  className="text-2xl font-medium text-white hover:text-gray-300 hover:cursor-pointer"
                  onClick={closeMenu}
                >
                  Sobre mim
                </Link>
                <Link
                  to='skills'
                  smooth
                  className="text-2xl font-medium text-white hover:text-gray-300 hover:cursor-pointer"
                  onClick={closeMenu}
                >
                  habilidades
                </Link>
                <Link
                  to='projects'
                  smooth
                  className="text-2xl font-medium text-white hover:text-gray-300 hover:cursor-pointer"
                  onClick={closeMenu}
                >
                  Projetos
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <Popover id='main' className="relative">
            <div className="mx-auto max-sm:w-screen max-w-7xl px-6 ">
              <div
                className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10"
              >
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to='main' smooth className='hover:cursor-pointer'>
                    <h1 className='max-sm:text-lg md:text-xl lg:text-2xl font-extrabold text-gray-400'>Manoel<span className='text-white'> Rocha</span></h1>
                  </Link>
                </div>

                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                  <Link
                    to='about'
                    smooth
                    className="text-base font-medium text-white hover:text-gray-300 hover:cursor-pointer"
                  >
                    Sobre mim
                  </Link>
                  <Link
                    to='skills'
                    smooth
                    className="text-base font-medium text-white hover:text-gray-300 hover:cursor-pointer"
                  >
                    habilidades
                  </Link>
                  <Link
                    to='projects'
                    smooth
                    className="text-base font-medium text-white hover:text-gray-300 hover:cursor-pointer"
                  >
                    Projetos
                  </Link>

                </Popover.Group>
                <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 gap-5">
                  <a target="_blank" href="https://github.com/manoelRochadev/" className="whitespace-nowrap text-white text-base flex font-medium text-whitehover:text-gray-900 flex-row">
                    <LinkedinLogo size={24} color="#fff" weight="bold" />
                    Linkedin
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/manoelRochadev/"
                    className="whitespace-nowrap text-white text-base flex font-medium text-whitehover:text-gray-900 flex-row">
                    <img src="/github.svg" alt="" className='w-6 h-6 text-white' />
                    Github
                  </a>
                  <button className="text-base flex font-medium p-1 px-2 text-white hover:text-gray-200 flex-row border-solid border-green-600 rounded-md border-4">
                    <EnvelopeSimple size={24} weight="bold" />
                    Contate-me
                  </button>
                </div>

                <div className='lg:hidden md:hidden' onClick={openMenu}>
                  <List size={32} />
                </div>
              </div>
            </div>

            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            </Transition>
          </Popover>
        )
      }
    </>
  )
}