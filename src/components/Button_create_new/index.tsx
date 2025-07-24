'use client';

import { useState } from 'react';
import NewSubmissionModal from '../NewSubmissionModal';

interface Button_create_newProps {
    size: 'sm' | 'md' | 'lg';
    classes?: string;
}

export default function Button_create_new({ size, classes }: Button_create_newProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button className={`
            ${size === 'sm' ? 'scale-100' : ''}
            ${size === 'md' ? 'scale-125' : ''}
            ${size === 'lg' ? 'scale-150' : ''}
            rounded-lg
            w-10 h-10
            ${classes || ''}
        `}
                onClick={() => setIsModalOpen(true)}>
                +
            </button>

            {isModalOpen && (
                <NewSubmissionModal
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={() => {
                        setIsModalOpen(false);

                        alert("Submissão criada com sucesso!");
                    }}
                />
            )}

        </div>
    );
}