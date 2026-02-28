'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { useCart } from './cart-context'

const featuredProducts = [
    {
        id: 1,
        name: 'Classic Bob Cut',
        price: '₦45,000',
        originalPrice: '₦65,000',
        rating: 4.5,
        reviews: 128,
        image: '/wig1.jpeg',
        badge: 'Best Seller'
    },
    {
        id: 2,
        name: 'Long Wavy Style',
        price: '₦55,000',
        originalPrice: '₦75,000',
        rating: 4.8,
        reviews: 89,
        image: '/wig2.jpeg',
        badge: 'New Arrival'
    },
    {
        id: 3,
        name: 'Curly Afro Wig',
        price: '₦38,000',
        originalPrice: '₦58,000',
        rating: 4.3,
        reviews: 156,
        image: '/wig3.jpeg',
        badge: 'Hot Deal'
    },
    {
        id: 4,
        name: 'Straight Blonde',
        price: '₦62,000',
        originalPrice: '₦85,000',
        rating: 4.7,
        reviews: 203,
        image: '/wig4.jpeg',
        badge: 'Premium'
    },
    {
        id: 5,
        name: 'Brown Layered Cut',
        price: '₦48,000',
        originalPrice: '₦68,000',
        rating: 4.6,
        reviews: 92,
        image: '/wig5.jpeg',
        badge: 'Trending'
    },
    {
        id: 6,
        name: 'Short Pixie Style',
        price: '₦35,000',
        originalPrice: '₦52,000',
        rating: 4.4,
        reviews: 67,
        image: '/wig6.jpeg',
        badge: 'Sale'
    },
    {
        id: 7,
        name: 'Black Long Straight',
        price: '₦58,000',
        originalPrice: '₦82,000',
        rating: 4.9,
        reviews: 234,
        image: '/wig7.jpeg',
        badge: 'Popular'
    },
    {
        id: 8,
        name: 'Auburn Curls',
        price: '₦42,000',
        originalPrice: '₦65,000',
        rating: 4.2,
        reviews: 145,
        image: '/wig8.jpeg',
        badge: 'Limited'
    },
    {
        id: 9,
        name: 'Platinum Blonde',
        price: '₦68,000',
        originalPrice: '₦95,000',
        rating: 4.8,
        reviews: 178,
        image: '/wig9.jpeg',
        badge: 'Luxury'
    },
    {
        id: 10,
        name: 'Dark Brown Waves',
        price: '₦52,000',
        originalPrice: '₦75,000',
        rating: 4.5,
        reviews: 112,
        image: '/wig10.jpeg',
        badge: 'Classic'
    }
]

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`size-2 ${
                        star <= Math.floor(rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                    }`}
                />
            ))}
            <span className="text-xs text-gray-600 ml-1">({rating})</span>
        </div>
    )
}

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
                delay: 0.6,
            },
        },
    },
}

export const Featured = () => {
    const { addToCart } = useCart()
    const [addedToCart, setAddedToCart] = useState<Set<number>>(new Set())
    
    const handleAddToCart = (product: typeof featuredProducts[0]) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            badge: product.badge
        })
        
        // Show success feedback
        setAddedToCart(prev => new Set([...prev, product.id]))
        
        // Remove feedback after 1 second
        setTimeout(() => {
            setAddedToCart(prev => {
                const newSet = new Set(prev)
                newSet.delete(product.id)
                return newSet
            })
        }, 1000)
    }
    
    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <AnimatedGroup variants={transitionVariants}>
                    <div className="text-left mb-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-2 ">
                            Featured Products
                        </h2>
                       
                    </div>
                </AnimatedGroup>

                {/* Products Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
                <AnimatedGroup variants={transitionVariants}>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            {/* Product Image */}
                            <div className="relative overflow-hidden rounded-t-lg">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                
                                {/* Badge */}
                                {product.id <= 4 && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            
                            {/* Product Info */}
                            <div className="p-3 sm:p-4">
                                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {product.name}
                                </h3>
                                
                                {/* Rating */}
                                <div className="flex items-center gap-1 sm:gap-2 mb-2">
                                    <StarRating rating={product.rating} />
                                    <span className="text-xs text-gray-500">
                                        ({product.reviews})
                                    </span>
                                </div>
                                
                                {/* Price */}
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-base sm:text-lg font-bold text-gray-900">
                                        {product.price}
                                    </span>
                                    <span className="text-xs sm:text-sm text-gray-500 line-through">
                                        {product.originalPrice}
                                    </span>
                                </div>
                                
                                {/* Add to Cart Button */}
                                <Button 
                                    className={`w-full text-xs sm:text-sm py-1.5 sm:py-2 transition-colors ${
                                        addedToCart.has(product.id)
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                                    }`}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {addedToCart.has(product.id) ? 'Added!' : 'Add to Cart'}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                </AnimatedGroup>
                
                {/* View All Button */}
                <AnimatedGroup variants={transitionVariants}>
                    <div className="text-center mt-12">
                        <Link href="/shop">
                            <Button variant="outline" className="border-gray-40 text-gray-90 hover:bg-gray-500 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base cursor-pointer">
                                View All Products
                            </Button>
                        </Link>
                    </div>
                </AnimatedGroup>
            </div>
        </section>
    )
}
