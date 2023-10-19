import Selection2 from "~/components/Selection2";

export default function Passwords() {
  return (
    <>
      <Selection2
        pageTitle="THD- Passwords"
        heading={"What password would you like to reset?"}
        startIndex={5}
        stopIndex={13}
        o1={"Duck ID"}
        o1d={"Email, Canvas, Microsoft, etc."}
        o1l={
          "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=31467"
        }
        o2={"DuckWeb"}
        o2d={"Reset your DuckWeb password"}
        o2l={"https://duckweb.uoregon.edu"}
        reset={true}
      />
    </>
  );
}
