import Carrossel from "@/components/Carrossel";

export default function FactsPage() {
    return (
        <div className="flex flex flex-col items-flex-start py-12 px-8 w-full gap-6 min-h-screen">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-300 max-w-2xl">Climate Facts</h1>
            <Carrossel />
        </div>
    );
}