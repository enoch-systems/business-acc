'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselProps {
    images: {
        src: string
        alt: string
        title: string
        description: string
    }[]
    className?: string
}

export const Carousel = ({ images, className }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000) // Auto-advance every 5 seconds

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <div className={cn('relative w-full mt-4 h-full overflow-hidden', className)}>
            {/* Main carousel container */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        )}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay content */}
                        <div className="absolute  inset-0 bg-black/40 flex items-center justify-center">
                            <div className="text-center text-white px-6 max-w-4xl">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                                    {image.title}
                                </h1>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                                    {image.description}
                                </p>
                                <div className="flex gap-3 justify-center">
                                   
                                    <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
                                        Shop Wigs
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/3 mt-15 -translate-y-1/2 bg-white/1 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="size-5" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/3 mt-15 -translate-y-1/2 bg-white/1 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="size-5" />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            'w-3 h-3 rounded-full transition-all duration-300',
                            index === currentIndex
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
