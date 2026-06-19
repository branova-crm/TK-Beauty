import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import TreatmentPageTemplate from "@/components/behandlungen/TreatmentPageTemplate";
import {
    microneedlingIntro,
    microneedlingPreise,
    microneedlingBenefits,
    microneedlingFaqs,
} from "@/data/microneedling-preise";
import { siteImages } from "@/data/site-images";

export default function MicroneedlingPage() {
    return (
        <main className="min-h-screen bg-creme pt-32">
            <Header />
            <TreatmentPageTemplate
                eyebrow="Hauterneuerung"
                title="Microneedling in Nürnberg"
                intro={microneedlingIntro}
                benefits={microneedlingBenefits}
                priceTitle="Microneedling Preise"
                priceItems={microneedlingPreise}
                faqs={microneedlingFaqs}
                serviceName="Microneedling"
                serviceDescription={microneedlingIntro}
                path="/behandlungen/microneedling"
                breadcrumbs={[
                    { name: "Startseite", path: "/" },
                    { name: "Behandlungen", path: "/behandlungen" },
                    { name: "Microneedling", path: "/behandlungen/microneedling" },
                ]}
                imageSrc={siteImages.microneedling.src}
                imageAlt={siteImages.microneedling.alt}
                relatedLinks={[
                    { href: "/behandlungen/motus-ax", label: "Motus AX Laser" },
                    { href: "/behandlungen/kosmetische-behandlungen", label: "Kosmetische Behandlungen" },
                ]}
            />
            <Footer />
        </main>
    );
}
