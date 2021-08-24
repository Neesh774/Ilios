import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto">
        <div className="text-center mt-10 sm:mt-8 md:mt-20 space-y-5">
            <div className="text-7xl sm:text-5xl md:text-6xl">
                404
            </div>
            <div className="md:flex justify-center">
                <div className="text-3xl">
                    Looks like you got lost!&nbsp;
                </div>
                <Link href="/" passHref>
                    <a className="text-3xl underline border-b-4 border-starOrange styles.quicknav">
                        Here&apos;s the path home.
                    </a>
                </Link>
            </div>
            <img src="/404_image.svg" alt="404" className="w-64 sm:w-96 mx-auto"/>
        </div>
    </div>
  )
}