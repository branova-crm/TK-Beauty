import { Fragment, type ReactNode } from "react";

type AmpersandTextProps = {
    children: string;
    className?: string;
};

export default function AmpersandText({ children, className }: AmpersandTextProps) {
    const parts = children.split("&");

    if (parts.length === 1) {
        return <>{children}</>;
    }

    const nodes: ReactNode[] = [];
    parts.forEach((part, index) => {
        if (part) nodes.push(<Fragment key={`t-${index}`}>{part}</Fragment>);
        if (index < parts.length - 1) {
            nodes.push(
                <span key={`und-${index}`} className={`font-serif${className ? ` ${className}` : ""}`}>
                    und
                </span>
            );
        }
    });

    return <>{nodes}</>;
}
