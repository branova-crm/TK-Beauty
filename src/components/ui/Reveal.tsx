"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
}

export default function Reveal({ children, width = "100%", delay = 0, className = "" }: RevealProps) {
    return (
        <div style={{ position: "relative", width }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98] // Premium ease-out
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
