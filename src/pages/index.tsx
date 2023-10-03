import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Restart from "~/components/Restart";
import ThdHeader from "~/components/ThdHeader";

// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>THD Portal</title>
        <meta
          name="description"
          content="University of Oregon - Printing Portal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <ThdHeader />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Where are you trying to{" "}
            <span className="text-[#104735]">print</span> from?
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/personalDevice/"
              // target="_blank"
            >
              <h3 className="text-2xl font-bold">Personal Device →</h3>
              <div className="text-lg">
                Learn to print from your laptop or smartphone.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/labDevice"
              // target="_blank"
            >
              <h3 className="text-2xl font-bold">UO Device →</h3>
              <div className="text-lg">
                Learn how to print from a computer lab machine.
              </div>
            </Link>
          </div>
        </div>
        <Restart />
      </main>
      <Footer />
    </>
  );
}
