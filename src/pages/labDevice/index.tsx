import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Restart from "~/components/Rewind";
import ThdHeader from "~/components/ThdHeader";

import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>UO Printing</title>
        <meta name="UOselection" content="UO Device" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <ThdHeader />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            What kind of <span className="text-[#104735]">UO</span> device?
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140517"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Labs Machine →</h3>
              <div className="text-lg">
                For computer labs and library computers. (Windows / Mac)
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140515"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Internet Kiosk →</h3>
              <div className="text-lg">
                For those not affilliated with the University of Oregon.
              </div>
            </Link>
          </div>
        </div>
        <Restart />
        <Footer />
      </main>
    </>
  );
}
