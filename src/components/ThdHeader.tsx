import Link from "next/link";

export default function ThdHeader() {
  return (
    <>
      <header className="fixed left-0 top-0 z-20 w-full border-t border-gray-200 dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="" className="hover:underline">
            Leo Schonberger
          </a>
        </span>
        <ul>
          <li>
            <Link
              href="/"
              className="text-center text-lg font-extrabold tracking-tight text-white outline sm:text-[2rem]"
            >
              THD Portal
            </Link>
          </li>
        </ul>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6">
              About
            </Link>
          </li>
          {/* <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li> */}
          <li>
            <Link
              href="mailto:leoschonberger@gmail.com"
              className="hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}
