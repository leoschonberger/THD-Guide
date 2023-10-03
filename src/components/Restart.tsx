import { useRouter } from "next/router";

export default function Restart() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <p className="text-4xl">⏮</p>
    </button>
  );
}
