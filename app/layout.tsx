import type { Metadata } from "next";
import { Archivo, Bebas_Neue } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-body", subsets: ["latin"] });
const bebas = Bebas_Neue({ variable: "--font-display", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Garage | Manutenção e reparos automotivos",
  description: "Manutenção, diagnóstico e reparos automotivos com atendimento claro e serviço de confiança.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="pt-BR" className={`${archivo.variable} ${bebas.variable}`}><body>{children}</body></html>;
}
