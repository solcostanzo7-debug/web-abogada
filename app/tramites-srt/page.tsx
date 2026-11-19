import type { Metadata } from "next";
import { SrtProcedures } from "@/components/sections/srt-procedures";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Trámites SRT ante las Comisiones Médicas",
  description:
    "Trámites que podés iniciar ante las Comisiones Médicas de la SRT cuando no estás de acuerdo con la ART: rechazo, alta, prestaciones, reingreso e incapacidad.",
  alternates: { canonical: "/tramites-srt" },
};

export default function TramitesSrtPage() {
  return (
    <>
      <SrtProcedures />
      <ScrollReveal />
    </>
  );
}
