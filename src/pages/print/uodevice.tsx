import Selection2 from "~/components/Selection2";

export default function uoDevicePrinting() {
  return (
    <Selection2
      pageTitle="THD- UO Device Printing"
      heading={"What kind of UO device?"}
      startIndex={13}
      stopIndex={15}
      o1={"Labs Machine "}
      o1d={"For computer labs and library computers. (Win/Mac)"}
      o1l={
        "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140517"
      }
      o2={"Internet Kiosk"}
      o2d={"Print from our public kiosks."}
      o2l={
        "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140515"
      }
      reset={true}
    />
  );
}
