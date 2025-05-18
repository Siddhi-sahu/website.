import Navbar from "@/components/Navbar";
import { Main } from "@/components/Main";

export default function Home() {
  return <div>
    <Navbar />
    <main className="p-8">

      <div >
        <Main />
      </div>
    </main>
  </div>
}
