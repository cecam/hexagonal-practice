import { SpendForm } from "../components/Spends/infraestructure/ui/SpendForm";
import { SpendList } from "@/components/Spends/infraestructure/ui/SpendList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SpendForm />
      <SpendList />
    </main>
  );
}
