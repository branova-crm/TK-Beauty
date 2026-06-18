import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import TreatmentPageTemplate from "@/components/behandlungen/TreatmentPageTemplate";
import {
    kosmetikIntro,
    kosmetikPreise,
    kosmetikBenefits,
    kosmetikFaqs,
} from "@/data/kosmetik-preise";

export default function KosmetischeBehandlungenPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />
            <TreatmentPageTemplate
                eyebrow="Gesichtspflege"
                title="Kosmetische Behandlungen in Nürnberg"
                intro={kosmetikIntro}
                benefits={kosmetikBenefits}
                priceTitle="Behandlungen und Preise"
                priceItems={kosmetikPreise}
                faqs={kosmetikFaqs}
                serviceName="Kosmetische Behandlungen"
                serviceDescription={kosmetikIntro}
                path="/behandlungen/kosmetische-behandlungen"
                breadcrumbs={[
                    { name: "Startseite", path: "/" },
                    { name: "Behandlungen", path: "/behandlungen" },
                    { name: "Kosmetische Behandlungen", path: "/behandlungen/kosmetische-behandlungen" },
                ]}
                imageSrc="/images/7.png"
                imageAlt="Kosmetische Behandlung Nürnberg"
                relatedLinks={[
                    { href: "/behandlungen/motus-ax", label: "Motus AX Laser" },
                    { href: "/behandlungen/microneedling", label: "Microneedling" },
                ]}
            />
            <Footer />
        </main>
    );
}
