import Link from "next/link";

export default function ThdHeader() {
  return (
    <>
      <header
        className="fixed left-0 top-0 z-20 flex w-full place-content-center items-center border-t dark:border-gray-600 dark:bg-gray-800 md:flex md:items-center md:p-4
      "
      >
        <ul>
          <li>
            <div className="flex hover:underline md:p-1">
              <Link
                href="/"
                className="text-lg font-extrabold tracking-tight text-white outline sm:text-[1rem] md:p-1.5"
              >
                THD Portal
              </Link>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
