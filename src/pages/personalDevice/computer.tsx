import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Restart from "~/components/Rewind";

export default function ik() {
  return (
    <>
      <Head>
        <title>Personal Printing</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#007030] to-[#FEE11A]">
        <div>
          <h1 className="flex flex-col text-center text-4xl">
            Printing from your personal computer
          </h1>
          <div className="flex flex-col text-left text-lg">
            <p>1. Connect to the UO Secure Network</p>
            <p>
              2. Download the
              <Link
                className="bg-midnight underline"
                href="http://is-duckprints:9163/setup"
              >
                Duckprints Installer
              </Link>
              , run it, and follow the instructions
            </p>
            <p>3. Select "FindMeBw" or "FindMeColor" when printing</p>
            <p>
              3. Swipe your UO ID card at a print station + click print on your
              doccument
            </p>
          </div>
          <div>
            <Restart />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
