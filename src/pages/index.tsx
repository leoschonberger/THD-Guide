import Head from "next/head";
import Footer from "~/components/Footer";
import SelectionBox from "~/components/SelectionBox";
import ThdHeader from "~/components/ThdHeader";
import SelectionPage from "~/components/SelectionPage";

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
    <SelectionPage
      pageTitle={"THD GUIDE"}
      heading={"What can we help you with today?"}
      startIndex={12}
      stopIndex={16}
      boxesList={
        <>
          <SelectionBox
            external={false}
            centered={true}
            link="/print/"
            title="Printing 🖨️"
            description="Print at the UO"
          />
          <SelectionBox
            external={false}
            centered={true}
            link="/wifi/"
            title="Wifi 📡"
            description="Get help getting online"
          />
          <SelectionBox
            external={false}
            centered={true}
            link="/passwords/"
            title="Passwords 🔐"
            description="Reset your DuckID or DuckWeb"
          />
          <SelectionBox
            external={true}
            centered={true}
            link="https://service.uoregon.edu/TDClient/2030/Portal/Requests/TicketRequests/NewForm?ID=zVTv9AZb5zc_"
            title="Submit a ticket 🎫"
            description="Submit a ticket to the UO Service Portal"
          />
          <SelectionBox
            external={true}
            centered={true}
            link="https://service.uoregon.edu/TDClient/2030/Portal/Requests/ServiceCatalog"
            title="Extended Catalog 📚"
            description="All documentation on service.uoregon.edu"
          />
          <SelectionBox
            external={true}
            centered={true}
            link="https://service.uoregon.edu/TDClient/2030/Portal/Requests/PopularServices"
            title="View Popular Topics ❤️"
            description="Most Viewed Articles"
          />
        </>
      }
      backButton={false}
    />
  );
}
