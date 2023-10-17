import Link from "next/link";

export default function ThdHeader() {
  return (
    <>
      <header
        className="fixed left-0 top-10 z-20 flex w-full place-content-center items-center md:items-center md:p-4
      "
      >
        <ul>
          <li>
            <div className="flex py-3 hover:underline md:p-1">
              <Link
                href="/"
                className="py-1 text-lg font-extrabold tracking-tight text-white outline sm:text-[1rem] md:p-1.5"
                style={{ padding: "0.5rem" }}
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
