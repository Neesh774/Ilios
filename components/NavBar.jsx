/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import styles from '../styles/QuickNav.module.css'
const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Resume', href: '/resume'},
  { name: 'Experience', href: '/#experience'},
  { name: 'Projects', href: '/#projects'},
  { name: 'Blog', href: '/#blog'},
  { name: 'Discord', href: 'https://discord.gg/4Hd8MxuJkv'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800 filter drop-shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-5 w-5" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 h-full flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link className="flex-shrink-0 flex items-center space-x-2" href="/" passHref>
                    <div className="flex-shrink-0 flex items-center space-x-2">
                    <img
                      className="block h-6 w-auto"
                      src="/favicon.svg"
                      alt="Star"
                    />
                    <div
                      className="block w-auto text-gray-300 text-2xl"
                    >Ilios</div>
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6 mt-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-gray-300 hover:text-starOrange',
                          'p-3 py-2 rounded-md text-xl font-medium quick-nav',
                          styles.quicknav
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    'text-gray-300',
                    'block px-3 py-2 rounded-md text-base font-medium',
                    styles.quicknav
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
