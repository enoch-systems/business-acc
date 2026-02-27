'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Carousel } from '@/components/ui/carousel'
import { HeroHeader } from './header'

const carouselImages = [
    {
        src: '/wig1.jpeg',
        alt: 'Premium Wig Collection',
        title: 'Premium Quality Wigs',
        description: 'Discover our exclusive collection of high-quality wigs designed for style and comfort.'
    },
    {
        src: '/wig2.jpeg',
        alt: 'Fashion Wigs',
        title: 'Trendy Fashion Styles',
        description: 'Stay ahead of the trends with our latest fashion-forward wig designs.'
    },
    {
        src: '/wig3.jpeg',
        alt: 'Natural Look Wigs',
        title: 'Natural Looking Wigs',
        description: 'Achieve the perfect natural look with our realistic hairline and texture options.'
    },
    {
        src: '/wig4.jpeg',
        alt: 'Colorful Wigs',
        title: 'Vibrant Color Collection',
        description: 'Express yourself with our wide range of vibrant and natural color options.'
    },
    {
        src: '/wig5.jpeg',
        alt: 'Luxury Wigs',
        title: 'Luxury Hair Solutions',
        description: 'Experience premium luxury with our handcrafted designer wig collection.'
    }
]

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <div className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                    <input
                                        type="text"
                                        placeholder="Search products...."
                                        className="text-foreground text-sm bg-transparent outline-none w-64 placeholder:text-muted-foreground"
                                    />
                                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500 flex items-center justify-center">
                                        <Search className="m-auto size-3" />
                                    </div>
                                </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        {/* Carousel Section */}
                        <div className="relative h-[600px] w-full">
                            <Carousel images={carouselImages} className="h-full" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
