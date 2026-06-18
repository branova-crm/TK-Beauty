import Image from "next/image";

type TreatmentHeroImageProps = {
    src: string;
    alt: string;
};

export default function TreatmentHeroImage({ src, alt }: TreatmentHeroImageProps) {
    return (
        <div className="relative aspect-[4/5] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-premium border border-[#3A3A3A]/[0.05] group bg-[#FAF8F5]">
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
            />
        </div>
    );
}
