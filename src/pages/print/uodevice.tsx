import SelectionBox from "~/components/SelectionBox";
import SelectionPage from "~/components/SelectionPage";

export default function uoDevicePrinting() {
  return (
    <SelectionPage
      pageTitle="THD- UO Device Printing"
      heading={"What kind of UO device?"}
      startIndex={13}
      stopIndex={15}
      boxesList={
        <>
          <SelectionBox
            external={true}
            centered={false}
            link="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140517"
            title="Labs Machine "
            description="For computer labs and library computers. (Win/Mac)"
          />
          <SelectionBox
            external={true}
            centered={false}
            link="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140515"
            title="Internet Kiosk"
            description="Print from our public kiosks."
          />
        </>
      }
      reset={true}
    />
  );
}
