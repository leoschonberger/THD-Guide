import Selection2 from "~/components/Selection2";

export default function Print() {
  return (
    <>
      <Selection2
        pageTitle="THD- UO Printing"
        heading={"Where are you trying to print from?"}
        startIndex={24}
        stopIndex={29}
        o1={"Personal Device"}
        o1d={"Learn to print from your laptop or smartphone."}
        o1l={
          "https://service.uoregon.edu/TDClient/2030/Portal/KB/ArticleDet?ID=140488"
        }
        o2={"UO Device →"}
        o2d={"Learn how to print from a computer lab machine."}
        o2l={"/print/uodevice/"}
        reset={false}
      />
      {/* <Footer /> */}
    </>
  );
}
