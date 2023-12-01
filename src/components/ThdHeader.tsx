import Link from "next/link";

export default function ThdHeader() {
  return (
    <>
      <header
        className="top-30 left-0 z-10 flex w-full place-content-center items-center sm:fixed sm:top-10 sm:justify-center sm:px-0 sm:py-2 md:items-center md:py-5
      "
      >
        <ul>
          <li>
            <div className="flex py-3 hover:underline md:p-1">
              <Link
                href="/"
                className="py-1 text-lg font-extrabold tracking-tight text-white outline outline-gray-800 sm:text-[1rem] md:p-1.5"
                style={{ padding: "0.5rem" }}
              >
                THD Guide
              </Link>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
}
