import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Restart from "~/components/Rewind";
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

type Selection2Props = {
  pageTitle: string;
  heading: string;
  startIndex: number;
  stopIndex: number;
  o1: string;
  o1d: string;
  o1l: string;
  o2: string;
  o2d: string;
  o2l: string;
  reset: boolean;
};

export default function Selection2({
  pageTitle,
  heading,
  startIndex,
  stopIndex,
  o1,
  o1d,
  o1l,
  o2,
  o2d,
  o2l,
  reset,
}: Selection2Props) {
  if (reset === true) {
    return (
      <div>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
          <ThdHeader />
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {FormatHeading({
              hed: heading,
              startIndex: startIndex,
              stopIndex: stopIndex,
            })}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-4 text-white hover:bg-white/20"
                href={o1l}
              >
                <h3 className="text-2xl font-bold">{o1}</h3>
                <div className="text-lg">{o1d}</div>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href={o2l}
              >
                <h3 className="text-2xl font-bold">{o2}</h3>
                <div className="text-lg">{o2d}</div>
              </Link>
            </div>
            <Restart />
          </div>
          <Footer />
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
          <ThdHeader />
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {FormatHeading({
              hed: heading,
              startIndex: startIndex,
              stopIndex: stopIndex,
            })}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href={o1l}
                // target="_blank"
              >
                <h3 className="text-2xl font-bold">{o1}</h3>
                <div className="text-lg">{o1d}</div>
              </Link>
              <Link
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href={o2l}
                // target="_blank"
              >
                <h3 className="text-2xl font-bold">{o2}</h3>
                <div className="text-lg">{o2d}</div>
              </Link>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
  }
}
