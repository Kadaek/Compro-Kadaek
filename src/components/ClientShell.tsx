"use client";
import dynamic from "next/dynamic";

const AuroraCanvas = dynamic(() => import("@/components/AuroraCanvas"),   { ssr: false });
const Interactions = dynamic(() => import("@/components/Interactions"),   { ssr: false });

export default function ClientShell() {
  return (
    <>
      <AuroraCanvas />
      <Interactions />
    </>
  );
}
