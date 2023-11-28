import Restart from "~/components/Rewind";
import ThdHeader from "~/components/ThdHeader";

export default function About() {
  return (
    <div className="">
      <ThdHeader />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <h1 className="border-r-yellow-300 text-xl">
          Hey, thanks for using this site. Feel free to bookmark and share it!
        </h1>
        <h1 className="text-xl">- Leo</h1>
        <div className="p-12">
          <Restart></Restart>
        </div>
      </main>
    </div>
  );
}
