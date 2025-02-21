import React from 'react';
import HoverCard from '@/components/ui/Card'

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 dark:text-white">
            <div className="rounded-xl p-6 max-w-4xl w-full animate-fadeIn bg-gray-200 dark:bg-gray-600">
                <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
                <p className="text-lg mb-4 text-center">
                    Hello! I'm Tanish Rastogi, and this is a brief overview of my life achievements.
                </p>
                <div className="space-y-4">
                    <HoverCard/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;