import Head from "next/head";
import Footer from "~/components/Footer";
import BackButton from "~/components/Rewind";
import ThdHeader from "~/components/ThdHeader";
import { ReactNode } from "react";

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

type SelectionPage = {
  pageTitle: string;
  heading: string;
  startIndex: number;
  stopIndex: number;
  boxesList: ReactNode;
  backButton: boolean;
};

export default function SelectionPage({
  pageTitle,
  heading,
  startIndex,
  stopIndex,
  boxesList,
  backButton,
}: SelectionPage) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <ThdHeader />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6">
          {FormatHeading({
            hed: heading,
            startIndex: startIndex,
            stopIndex: stopIndex,
          })}
          <div className="grid grid-cols-3 items-center justify-center gap-4 sm:grid-cols-3 md:gap-10">
            {boxesList}
          </div>
          {backButton ? <BackButton /> : <></>}
        </div>
        <Footer />
      </main>
    </div>
  );
}
