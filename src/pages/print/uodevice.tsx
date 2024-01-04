import SelectionPage from "~/components/SelectionPage";
import SelectionBox from "~/components/SelectionBox";

export default function uoDevicePrinting() {
  return (
    <SelectionPage
      pageTitle={"UO Device Printing"}
      heading={"What kind of UO device?"}
      startIndex={13}
      stopIndex={15}
      boxesList={
        <>
          <SelectionBox
            external={true}
            centered={false}
            link={
              "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140517"
            }
            title={"Labs Machine"}
            description={"Computer labs and library computers. (Win/Mac)"}
          />
          <SelectionBox
            external={true}
            centered={false}
            link={
              "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140515"
            }
            title={"Internet Kiosk"}
            description={"Print from our public kiosks."}
          />
        </>
      }
      backButton={true}
    />
  );
}
