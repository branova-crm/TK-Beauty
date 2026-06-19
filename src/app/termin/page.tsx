import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import PlanityWidget from "@/components/planity/PlanityWidget";

export default function TerminPage() {
    return (
        <main className="min-h-screen bg-background pt-32">
            <Header />

            <section className="mx-auto w-full max-w-[1240px] px-[4%] py-6 md:px-8 md:py-8">
                <h1 className="sr-only">Termin buchen – TK BEAUTYSTUDIO Nürnberg</h1>
                <PlanityWidget />
            </section>

            <Footer />
        </main>
    );
}
