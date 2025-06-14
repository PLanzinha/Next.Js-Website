"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificateData = [
    {
        id: 1,
        title: "Data Engineer in Python",
        imageUrl: "/images/7.png",
        pdfUrl: "/pdf/d7.pdf",
        description: "DataCamp"
    },
    {
        id: 2,
        title: "Associate Data Engineer in SQL",
        imageUrl: "/images/8.png",
        pdfUrl: "/pdf/d8.pdf",
        description: "DataCamp"
    },
    {
        id: 3,
        title: "Git Fundamentals",
        imageUrl: "/images/9.png",
        pdfUrl: "/pdf/d9.pdf",
        description: "DataCamp"
    },
    {
        id: 4,
        title: "Introduction to Java",
        imageUrl: "/images/10.png",
        pdfUrl: "/pdf/d10.pdf",
        description: "DataCamp"
    },
    {
        id: 5,
        title: "Introduction to Object-Oriented Programming in Java",
        imageUrl: "/images/11.png",
        pdfUrl: "/pdf/d11.pdf",
        description: "DataCamp"
    },
    {
        id: 6,
        title: "Data Types and Exceptions in Java",
        imageUrl: "/images/12.png",
        pdfUrl: "/pdf/d12.pdf",
        description: "DataCamp"
    },
    {
        id: 7,
        title: "Practical Python for Beginners",
        imageUrl: "/images/4.png",
        pdfUrl: "/pdf/d5.pdf",
        description: "Pluralsight"
    },
    {
        id: 8,
        title: "Exploratory Data Analysis with Python",
        imageUrl: "/images/6.png",
        pdfUrl: "/pdf/d6.pdf",
        description: "Pluralsight"
    },
    {
        id: 9,
        title: "Basic Proficiency in KNIME Analytics Platform",
        imageUrl: "/images/2.png",
        pdfUrl: "/pdf/d0.pdf",
        description: "KNIME"
    },
    {
        id: 10,
        title: "ETL and ELT in Python",
        imageUrl: "/images/1.png",
        pdfUrl: "/pdf/d2.pdf",
        description: "DataCamp"
    },
    {
        id: 11,
        title: "Intermediate SQL",
        imageUrl: "/images/3.png",
        pdfUrl: "/pdf/d3.pdf",
        description: "DataCamp"
    },
    {
        id: 12,
        title: "Introduction to SQL",
        imageUrl: "/images/5.png",
        pdfUrl: "/pdf/d4.pdf",
        description: "DataCamp"
    },
];

interface Certificate {
    id: number;
    title: string;
    imageUrl: string;
    pdfUrl: string;
    description: string;
}

interface CertificateCarouselProps {
    certificates: Certificate[];
}


const CertificateCarousel: React.FC<CertificateCarouselProps> = ({ certificates }) => {
    if (!certificates || certificates.length === 0) {
        return <p className="text-center text-gray-500">No certificates to display yet.</p>;
    }

    const settings = {
        dots: true,
        // infinite: certificates.length > 2,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: certificates.length > 1,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: certificates.length > 0,
                }
            }
        ]
    };

    return (
        <div className="px-4 py-6 bg-gray-800 rounded-lg shadow-md">
            <Slider {...settings}>
                {certificates.map((cert) => (
                    <div key={cert.id} className="px-2 md:px-3">
                        <div className="bg-white p-4 rounded shadow text-center h-full flex flex-col justify-between min-h-[250px]">
                            <a
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity duration-200 flex-grow flex flex-col"
                                aria-label={`View certificate: ${cert.title}`}
                            >
                                <img
                                    src={cert.imageUrl || "https://via.placeholder.com/200x150?text=Certificate"}
                                    alt={`Thumbnail for ${cert.title}`}
                                    className="w-full h-40 object-contain mb-3 rounded border"
                                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/200x150?text=Error+Loading")}
                                />
                                <h3 className="font-semibold text-black text-sm mb-1 mt-auto">{cert.title}</h3>
                            </a>
                            <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default CertificateCarousel;
export { certificateData };