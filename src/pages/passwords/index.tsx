import SelectionBox from "~/components/SelectionBox";
import SelectionPage from "~/components/SelectionPage";

export default function Passwords() {
  return (
    <SelectionPage
      pageTitle="THD- Passwords"
      heading={"What password would you like to reset?"}
      startIndex={5}
      stopIndex={13}
      boxesList={
        <>
          <SelectionBox
            external={true}
            centered={false}
            link="https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=31467"
            title="Duck ID"
            description="Email, Canvas, Microsoft, etc."
          />
          <SelectionBox
            external={true}
            centered={false}
            link="https://duckweb.uoregon.edu"
            title="DuckWeb"
            description="Reset your DuckWeb password"
          />
        </>
      }
      reset={true}
    />
  );
}
