import Head from "next/head";
import Link from "next/link";
import Footer from "~/components/Footer";
import Restart from "~/components/Restart";

export default function ik() {
  return (
    <div>
      <h1>Printing from an internet Kiosk</h1>
      <div>
        <Restart />
        <Footer />
      </div>
    </div>
  );
}
