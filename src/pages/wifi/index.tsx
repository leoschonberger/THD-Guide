import SelectionBox from "~/components/SelectionBox";
import SelectionPage from "~/components/SelectionPage";

export default function test() {
  return (
    <SelectionPage
      pageTitle={"Connect to Wifi"}
      heading={"What are you trying to connect with?"}
      startIndex={23}
      stopIndex={30}
      boxesList={
        <>
          <SelectionBox
            external={true}
            centered={true}
            link={
              "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=73248"
            }
            title={"Mac 🍏"}
            description={""}
          />
          <SelectionBox
            external={true}
            centered={true}
            link={
              "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=73459"
            }
            title={"Windows 💻"}
            description={""}
          />{" "}
          <SelectionBox
            external={true}
            centered={true}
            link={
              "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=33324"
            }
            title={"Android 👽"}
            description={""}
          />
          <SelectionBox
            external={true}
            centered={true}
            link={
              "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=33321"
            }
            title={"iPhone 🍎"}
            description={""}
          />
        </>
      }
      backButton={true}
    />
  );
}
