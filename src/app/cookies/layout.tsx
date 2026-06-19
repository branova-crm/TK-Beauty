import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.cookies;

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
