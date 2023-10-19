import Head from "next/head";
import Footer from "~/components/Footer";
import Restart from "~/components/Rewind";
import ThdHeader from "~/components/ThdHeader";
import SelectionBox from "./SelectionBox";

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
            <SelectionBox
              external={false}
              centered={false}
              link={o1l}
              title={o1}
              description={o1d}
            />
            <SelectionBox
              external={false}
              centered={false}
              link={o2l}
              title={o2}
              description={o2d}
            />
          </div>
          {reset ? <Restart /> : <div></div>}
        </div>
        <Footer />
      </main>
    </div>
  );
}
