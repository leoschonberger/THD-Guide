import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import ThdHeader from "~/components/ThdHeader";

type FormatHeadingProps = {
  hed: string;
  startIndex: number;
  stopIndex: number;
};

function FormatHeading({ hed, startIndex, stopIndex }: FormatHeadingProps) {
  const first = hed.substring(0, startIndex);
  const middle = hed.substring(startIndex, stopIndex);
  const end = hed.substring(stopIndex, hed.length);

  return (
    <>
      <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {first} <span className="text-[#104735]">{middle}</span>
        {end}
      </h1>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>THD Portal</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <ThdHeader />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <FormatHeading
            hed={"What can we help you with today?"}
            startIndex={12}
            stopIndex={16}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
            {/*First box*/}
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-4 text-white hover:bg-white/30"
              href="/print/"
            >
              <h3 className="text-center text-2xl font-bold">Printing →</h3>
              <div className="text-center text-lg">Print at the UO</div>
            </Link>
            {/*Second box*/}
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-4 text-white hover:bg-white/30"
              href="/"
            >
              <h3 className="text-center text-2xl font-bold">Wifi →</h3>
              <div className="text-center text-lg">Get help getting online</div>
            </Link>
            {/*Third box*/}
            <Link
              className="max-w-s flex flex-col gap-4 rounded-xl bg-white/20 p-4 text-white hover:bg-white/30"
              href="/"
            >
              <h3 className="text-center text-2xl font-bold">Passwords →</h3>
              <div className="text-center text-lg">
                Reset your DuckID or DuckWeb
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
