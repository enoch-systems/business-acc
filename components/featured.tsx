'use client'

import React from 'react'
import Image from 'next/image'
import { Star, Heart, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredProducts = [
    {
        id: 1,
        name: 'Natural Wave Bob',
        price: '₦134,985',
        originalPrice: '₦194,985',
        rating: 4.5,
        reviews: 128,
        image: '/wig21.jpeg',
        badge: 'Best Seller'
    },
    {
        id: 2,
        name: 'Silky Straight Long',
        price: '₦179,985',
        originalPrice: '₦254,985',
        rating: 4.8,
        reviews: 89,
        image: '/wig22.jpeg',
        badge: 'New Arrival'
    },
    {
        id: 3,
        name: 'Curly Afro Style',
        price: '₦119,985',
        originalPrice: '₦179,985',
        rating: 4.3,
        reviews: 156,
        image: '/wig23.jpeg',
        badge: 'Hot Deal'
    },
    {
        id: 4,
        name: 'Blonde Highlights',
        price: '₦209,985',
        originalPrice: '₦284,985',
        rating: 4.7,
        reviews: 203,
        image: '/wig24.jpeg',
        badge: 'Premium'
    },
    {
        id: 5,
        name: 'Wavy Brown Style',
        price: '₦149,985',
        originalPrice: '₦224,985',
        rating: 4.6,
        reviews: 92,
        image: '/wig25.jpeg',
        badge: 'Trending'
    },
    {
        id: 6,
        name: 'Short Pixie Cut',
        price: '₦104,985',
        originalPrice: '₦149,985',
        rating: 4.4,
        reviews: 67,
        image: '/wig26.jpeg',
        badge: 'Sale'
    },
    {
        id: 7,
        name: 'Long Black Straight',
        price: '₦164,985',
        originalPrice: '₦239,985',
        rating: 4.9,
        reviews: 234,
        image: '/wig27.jpeg',
        badge: 'Popular'
    },
    {
        id: 8,
        name: 'Auburn Curls',
        price: '₦142,485',
        originalPrice: '₦202,485',
        rating: 4.2,
        reviews: 145,
        image: '/wig28.jpeg',
        badge: 'Limited'
    },
    {
        id: 9,
        name: 'Platinum Blonde',
        price: '₦224,985',
        originalPrice: '₦299,985',
        rating: 4.8,
        reviews: 178,
        image: '/wig29.jpeg',
        badge: 'Luxury'
    },
    {
        id: 10,
        name: 'Dark Brown Waves',
        price: '₦127,485',
        originalPrice: '₦187,485',
        rating: 4.5,
        reviews: 112,
        image: '/wig30.jpeg',
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

export const Featured = () => {
    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-2 ">
                        Featured Products
                    </h2>
                   
                </div>

                {/* Products Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                            {/* Product Image */}
                            <div className="relative group overflow-hidden rounded-t-lg">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                
                                {/* Badge */}
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                    {product.badge}
                                </span>
                                
                                {/* Heart Icon */}
                                <button className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-white transition-colors">
                                    <Heart className="size-3 sm:size-4 text-gray-600 hover:text-red-500" />
                                </button>
                                
                                {/* Quick Add Button */}
                                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button size="sm" className="w-full bg-gray-900 text-white hover:bg-gray-800 text-xs sm:text-sm py-1.5 sm:py-2">
                                        <ShoppingCart className="size-3 sm:size-4 mr-1 sm:mr-2" />
                                        Quick Add
                                    </Button>
                                </div>
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
                                <Button className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300 text-xs sm:text-sm py-1.5 sm:py-2">
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View All Button */}
                <div className="text-center mt-12">
                    <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
}
