import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import TreatmentPageTemplate from "@/components/behandlungen/TreatmentPageTemplate";
import {
    motusAxIntro,
    motusAxBenefits,
    motusAxProcess,
    motusAxFaqs,
} from "@/data/motus-ax-content";
import {
    motusFrauenEinzel,
    motusFrauenKombi,
    motusMaennerEinzel,
    motusMaennerKombi,
} from "@/data/motus-preise";

const laserSubtitle = "Alexandrit-Laser Motus AX (DEKA)";

export default function MotusAxPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />
            <TreatmentPageTemplate
                eyebrow="Alexandrit-Laser Motus AX (DEKA)"
                title="Dauerhafte Haarentfernung mit Motus AX in Nürnberg"
                intro={motusAxIntro}
                benefits={motusAxBenefits}
                process={motusAxProcess}
                priceTitle="Preise nach Körperzone"
                priceSections={[
                    {
                        id: "motus-frau-einzel",
                        title: "Einzelpreise (Frauen)",
                        subtitle: laserSubtitle,
                        iconKey: "zap",
                        items: motusFrauenEinzel,
                    },
                    {
                        id: "motus-frau-kombi",
                        title: "Kombi-Pakete (Frauen)",
                        subtitle: laserSubtitle,
                        iconKey: "package",
                        items: motusFrauenKombi,
                        fallbackLabel: "Kombi-Pakete",
                    },
                    {
                        id: "motus-mann-einzel",
                        title: "Einzelpreise (Männer)",
                        subtitle: laserSubtitle,
                        iconKey: "zap",
                        items: motusMaennerEinzel,
                    },
                    {
                        id: "motus-mann-kombi",
                        title: "Kombi-Pakete (Männer)",
                        subtitle: laserSubtitle,
                        iconKey: "package",
                        items: motusMaennerKombi,
                        fallbackLabel: "Kombi-Pakete",
                    },
                ]}
                faqs={motusAxFaqs}
                serviceName="Motus AX Laserhaarentfernung"
                serviceDescription={motusAxIntro}
                path="/behandlungen/motus-ax"
                breadcrumbs={[
                    { name: "Startseite", path: "/" },
                    { name: "Behandlungen", path: "/behandlungen" },
                    { name: "Motus AX", path: "/behandlungen/motus-ax" },
                ]}
                imageSrc="/images/10.jpg"
                imageAlt="Motus AX Laserhaarentfernung Nürnberg"
                relatedLinks={[
                    { href: "/behandlungen/microneedling", label: "Microneedling" },
                    { href: "/behandlungen/kosmetische-behandlungen", label: "Kosmetische Behandlungen" },
                ]}
            />
            <Footer />
        </main>
    );
}
