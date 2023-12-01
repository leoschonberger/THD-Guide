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
    <>
      <Head>
        <title>THD Portal</title>
      </Head>
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <ThdHeader />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6 ">
          <FormatHeading
            hed={"What can we help you with today?"}
            startIndex={12}
            stopIndex={16}
          />
          <div className="grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 md:gap-10">
            {/*Box #1*/}
            <SelectionBox
              external={false}
              centered={true}
              link="/print/"
              title="Printing 🖨️"
              description="Print at the UO"
            />
            {/*Box #2*/}
            <SelectionBox
              external={false}
              centered={true}
              link="/wifi/"
              title="Wifi 📡"
              description="Get help getting online"
            />
            {/*Box #3*/}
            <SelectionBox
              external={false}
              centered={true}
              link="/passwords/"
              title="Passwords 🔐"
              description="Reset your DuckID or DuckWeb"
            />
            {/*Box #4*/}
            <SelectionBox
              external={true}
              centered={true}
              link="https://service.uoregon.edu/TDClient/2030/Portal/Requests/TicketRequests/NewForm?ID=zVTv9AZb5zc_"
              title="Submit a ticket 🎫"
              description="Submit a ticket to the UO Service Portal"
            />
            {/*Box #5*/}
            <SelectionBox
              external={true}
              centered={true}
              link="https://service.uoregon.edu/TDClient/2030/Portal/Requests/ServiceCatalog"
              title="Extended Catalog 📚"
              description="All documentation on service.uoregon.edu"
            />
            {/*Box #6*/}
            <SelectionBox
              external={true}
              centered={true}
              link="https://service.uoregon.edu/TDClient/2030/Portal/Requests/PopularServices"
              title="View Popular Topics ❤️"
              description="Most Viewed Articles"
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

// TODO: Implement SelectionPage for this page
