import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: '☎️ Call', href: 'tel:+13083043979' },
  { name: '📧 Email', href: 'mailto:jenniferjones@atlasmedstaff.com' },
  { name: '💬 Text', href: 'sms:+13083043979' },
  { name: '📲 Facebook', href: 'https://www.facebook.com/profile.php?id=100091658103630&mibextid=LQQJ4d' },
  { name: '🌐 Atlas Profile', href: 'https://atlasmedstaff.com/atlas-team/jennifer-jones/?fbclid=IwAR3UwbSpFdJfr-5zdGIuuqCkXNCvlMpmIoDxd_NhaHVj46NJ-Ec1hnSL0LA' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-tr from-blue-500 to-blue-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className=" flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Jennifer Jones</span>
              <h1 className="h-8 w-auto font-cursive text-3xl text-blue-200">
                👩🏼 Jennifer Jones
              </h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 pr-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 text-blue-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Jennifer Jones</span>
                <h1 className="h-8 w-auto font-cursive text-3xl text-blue-600">
                  👩🏼 Jennifer Jones
                </h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-4 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="mt-5 block rounded-lg px-3 py-2 text-2xl font-bold leading-7 tracking-wider text-blue-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-24">
          <div className="text-center">
            <h1 className="text-3xl text-blue-100 sm:text-6xl">
              Guiding Nurses to Their <b>Dream Careers</b>
            </h1>
            <p className="mt-6 text-sm sm:text-lg leading-2 sm:leading-8 text-blue-100">
              Meet Jennifer Jones, your dedicated nursing recruiter. Jennifer is
              a mother of three and is married to Johnathan Jones. Currently
              living in a camper in the beautiful state of Tennessee, her
              mobile lifestyle allows her to work with nurses from all over the
              country.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
