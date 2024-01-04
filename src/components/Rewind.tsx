import { useRouter } from "next/router";

export default function Rewind() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className="pb-10">
      <h1 className="pb-10 text-5xl">⏮</h1>
    </button>
  );
}
