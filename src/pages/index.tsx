import Head from "next/head";
import Footer from "~/components/Footer";
import SelectionBox from "~/components/SelectionBox";
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
            <SelectionBox
              external={false}
              centered={true}
              link="/print/"
              title="Printing 🖨️"
              description="Print at the UO"
            />
            {/*Second box*/}
            <SelectionBox
              external={true}
              centered={true}
              link="https://service.uoregon.edu/TDClient/2030/Portal/KB/?CategoryID=6954"
              title="Wifi 📡"
              description="Get help getting online"
            />
            {/*Third box*/}
            <SelectionBox
              external={false}
              centered={true}
              link="/passwords/"
              title="Passwords 🔐"
              description="Reset your DuckID or DuckWeb"
            />
            {/*Fourth box*/}
            <SelectionBox
              external={true}
              centered={true}
              link="https://www.google.com"
              title="Title"
              description="Alrighty"
            />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
