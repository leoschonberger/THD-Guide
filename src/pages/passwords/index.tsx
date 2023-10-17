import Selection2 from "~/components/Selection2";

export default function Passwords() {
  return (
    <>
      <Selection2
        pageTitle="THD- Passwords"
        heading={"What password would you like to reset?"}
        startIndex={6}
        stopIndex={10}
        o1={"Duck ID"}
        o1d={"Email, Canvas, Microsoft, etc."}
        o1l={""}
        o2={"DuckWeb"}
        o2d={"Reset your DuckWeb password"}
        o2l={""}
        reset={false}
      />
      {/* <Footer /> */}
    </>
  );
}
