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
        <div style={{ position: "relative", width }} className={`${className} flex flex-col`}>
            <motion.div
                className="h-full flex flex-col"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                    duration: 0.6,
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98] // Premium ease-out
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
