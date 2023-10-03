import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Restart from "~/components/Restart";

import { api } from "~/utils/api";

export default function Personal() {
  return (
    <>
      <Head>
        <title>Personal Printing</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className=" text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            What kind of <span className="text-[#104735]">personal device</span>
            ?
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140488"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Computer →</h3>
              <div className="text-lg">Mac / Windows</div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140488"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Phone →</h3>
              <div className="text-lg">Android / IOS</div>
            </Link>
          </div>
        </div>
        <Restart />
        <Footer />
      </main>
    </>
  );
}
