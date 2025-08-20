import SelectionBox from "~/components/SelectionBox";
import SelectionPage from "~/components/SelectionPage";

export default function Print() {
  return (
    <SelectionPage
      pageTitle="THD- UO Printing"
      heading={"Where are you trying to print from?"}
      startIndex={24}
      stopIndex={29}
      boxesList={
        <>
          <SelectionBox
            external={true}
            centered={false}
            link="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140488"
            title="Personal Device"
            description="Learn to print from your laptop or smartphone."
          />
          <SelectionBox
            external={false}
            centered={false}
            link="/print/uodevice/"
            title="UO Device →"
            description="Learn how to print from a computer lab machine."
          />
        </>
      }
      reset={true}
    />
  );
}
