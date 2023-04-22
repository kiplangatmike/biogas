import Image from "next/image";
import { Inter } from "next/font/google";
import MainData from "@/components/Admin/MainData";
// import Sidebar from '@/components/Admin/Sidebar/Sidebar'
import WelcomeBanner from "@/components/WelcomeBanner";
import PieChart from "@/components/PieChart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-contain bg-[url('/wall2.jpg')] p-14 ${inter.className}`}
    >
      <WelcomeBanner />
      <MainData />
    </main>
  );
}
