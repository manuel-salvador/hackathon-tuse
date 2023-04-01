import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
    label: string;
    content: string;
};

export default function Accordion({ label, content }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className="w-full">
            <AnimatePresence>
                <motion.div
                    key="question"
                    className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2  cursor-pointer font-open border -2 border-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div className="font-bold ml-1">{label}</motion.div>
                </motion.div>

                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ opacity: 0, height: 0, padding: '0px 8px' }}
                        animate={{
                            opacity: 1,
                            padding: '2px 8px',
                            height: 'unset',
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{ opacity: 0, height: 0, padding: '0px 8px' }}
                        className="text-lg  border-l border-gray-300"
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
