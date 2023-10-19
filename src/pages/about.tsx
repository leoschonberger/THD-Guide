import Restart from "~/components/Rewind";
import ThdHeader from "~/components/ThdHeader";

export default function About() {
  return (
    <div className="text-center">
      <ThdHeader />
      <div className="center">
        <h1>
          Hey, thanks for using this site. It's just a personal project for now.
        </h1>
      </div>
      <p>- Leo</p>
      <Restart />
    </div>
  );
}
