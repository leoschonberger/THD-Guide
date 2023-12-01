import Link from "next/link";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-20 w-full p-3 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="dark:text-midnight-400 text-sm text-black sm:text-center">
        © 2023{" "}
        <a
          href="https://github.com/leoschonberger"
          target="_blank"
          className="hover:underline"
        >
          Leo Schonberger
        </a>
      </span>
      <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-black  sm:mt-0">
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
    </footer>
  );
}
