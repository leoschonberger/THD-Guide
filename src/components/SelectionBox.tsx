import Link from "next/link";

export default function SelectionBox(props: {
  external: boolean;
  centered: boolean;
  link: string;
  title: string;
  description: string;
}) {
  if (props.external == false) {
    return (
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/20 p-4 text-white hover:bg-white/30"
        href={String(props.link)}
      >
        {props.centered == true ? (
          <div>
            <h3 className="text-center text-2xl font-bold">{props.title}</h3>
            <div className="p-3 text-center text-lg">{props.description}</div>
          </div>
        ) : (
          <div>
            <h3 className="text-left text-2xl font-bold">{props.title}</h3>
            <div className="p-2 text-left text-lg">{props.description}</div>
          </div>
        )}
      </Link>
    );
  } // Format for external links
  else {
    return (
      <Link
        className="flex max-w-xs flex-col gap-5 rounded-xl bg-white/20 p-4 text-white hover:bg-white/30"
        href={props.link}
        target="_blank"
      >
        {props.centered == true ? (
          <div>
            <h3 className="text-center text-2xl font-bold hover:underline">
              {props.title}
            </h3>
            <div className="p-2 text-center text-lg">{props.description}</div>
          </div>
        ) : (
          <div>
            <h3 className="text-left text-2xl font-bold hover:underline">
              {props.title}
            </h3>
            <div className="p-2 text-left text-lg">{props.description}</div>
          </div>
        )}
      </Link>
    );
  }
}
