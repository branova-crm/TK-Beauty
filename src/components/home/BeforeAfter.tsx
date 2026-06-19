import SurfaceSection from "@/components/ui/SurfaceSection";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function BeforeAfter() {
    return (
        <SurfaceSection variant="surface">
            <Reveal>
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        Sichtbar verfeinerte Haut
                    </h2>
                </div>
            </Reveal>

            <div className="max-w-4xl mx-auto mt-8">
                <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.06]">
                    <Image
                        src="/images/12.png"
                        alt="Beispiel für verfeinerte Haut"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                    />
                </div>
                <p className="mt-4 text-center text-sm text-[#8A7A65] leading-relaxed max-w-2xl mx-auto">
                    Hinweis: Dieses Bild wurde mittels Künstlicher Intelligenz (KI) erzeugt. Es handelt sich um
                    ein fiktives Beispielbild.
                </p>
            </div>
        </SurfaceSection>
    );
}
