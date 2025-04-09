import React from 'react';
import CertificateCarousel, { certificateData } from "@/components/CertificateCarousel";

export default function About() {
    return (
        <div className="px-4 py-8 md:px-8 lg:px-16">
            <h1 className="text-3xl font-bold mb-8 text-center">
                
            </h1>
            <div className="max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Who am I?
                </h2>
                <p className="mb-4">
                    As an experienced Analyst and Software Developer, I have over 3 years of hands-on experience with SQL, and C#, as well as having 2 years of experience as a QA Tester,
                    my skillset includes Data Curation, Power Bi, Python, SQL, Knime, Data Analysis, Docker and Machine Learning, with several projects I made both to learn as well as to display my knowledge of these skills.
                </p>
                <p className="mb-4">
                    In my past roles, I had a close collaboration with Product Owners, Stakeholders and Project Managers, utilizing agile methodologies such as Scrum, to deliver solutions in a timely manner,
                    with the usage of refinements, planning sessions, daily stand-ups, and retrospectives, ensuring comprehensibility and communication among all members so as to contribute to project success.
                </p>
                <p className="mb-4">
                    I'm adept at teamwork, working closely with colleagues to analyse data and to translate business needs into technical solutions.
                </p>
                <p className="mb-4">
                    With expertise in modern web technologies, I aim to bring ideas to life
                    through clean, and efficient code.
                </p>
            </div>
            <div className="mt-12 max-w-5xl mx-auto" style={{ paddingTop: '150px' }}>
                <h2 className="text-2xl font-semibold mb-6 text-center">
                    My Certificates
                </h2>
                <CertificateCarousel certificates={certificateData} />
            </div>
        </div>
    );
}