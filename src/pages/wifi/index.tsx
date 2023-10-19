// TODO: Abstract out the div with options instead of hardcoding selection2
import Link from "next/link";

export default function wifi() {
  return (
    <div>
      <Link
        href={
          "https://service.uoregon.edu/TDClient/2030/Portal/KB/?CategoryID=6954"
        }
      >
        Click here
      </Link>
    </div>
  );
}
