import Head from "next/head";
import Link from "next/link";
import Footer from "~/foot";

export default function ik() {
  return (
    <div>
      <h1 className=" flex text-center text-xl">
        Printing from your personal computer
      </h1>
      <div>
        <Footer />
      </div>
    </div>
  );
}
