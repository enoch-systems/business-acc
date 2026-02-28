'use client'
import React, { useState } from 'react'
import { Star, Heart, ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import Footer from '@/components/footer'

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
    },
    {
        id: 11,
        name: 'Red Velvet Style',
        price: '₦71,000',
        originalPrice: '₦98,000',
        rating: 4.6,
        reviews: 95,
        image: '/wig11.jpeg',
        badge: 'Exclusive'
    },
    {
        id: 12,
        name: 'Natural Brown Bob',
        price: '₦39,000',
        originalPrice: '₦59,000',
        rating: 4.7,
        reviews: 187,
        image: '/wig12.jpeg',
        badge: 'Eco-Friendly'
    },
    {
        id: 13,
        name: 'Golden Highlights',
        price: '₦64,000',
        originalPrice: '₦88,000',
        rating: 4.4,
        reviews: 123,
        image: '/wig13.jpeg',
        badge: 'Stylish'
    },
    {
        id: 14,
        name: 'Silver Gray Cut',
        price: '₦56,000',
        originalPrice: '₦78,000',
        rating: 4.8,
        reviews: 201,
        image: '/wig14.jpeg',
        badge: 'Modern'
    },
    {
        id: 15,
        name: 'Copper Long Waves',
        price: '₦73,000',
        originalPrice: '₦99,000',
        rating: 4.3,
        reviews: 156,
        image: '/wig15.jpeg',
        badge: 'Elegant'
    },
    {
        id: 16,
        name: 'Jet Black Straight',
        price: '₦47,000',
        originalPrice: '₦69,000',
        rating: 4.9,
        reviews: 267,
        image: '/wig16.jpeg',
        badge: 'Professional'
    },
    {
        id: 17,
        name: 'Honey Blonde Curls',
        price: '₦61,000',
        originalPrice: '₦85,000',
        rating: 4.5,
        reviews: 143,
        image: '/wig17.jpeg',
        badge: 'Trendy'
    },
    {
        id: 18,
        name: 'Mahogany Layers',
        price: '₦54,000',
        originalPrice: '₦76,000',
        rating: 4.6,
        reviews: 189,
        image: '/wig18.jpeg',
        badge: 'Sophisticated'
    },
    {
        id: 19,
        name: 'Plum Purple Style',
        price: '₦67,000',
        originalPrice: '₦92,000',
        rating: 4.7,
        reviews: 174,
        image: '/wig19.jpeg',
        badge: 'Bold'
    },
    {
        id: 20,
        name: 'Natural Light Brown',
        price: '₦41,000',
        originalPrice: '₦63,000',
        rating: 4.4,
        reviews: 198,
        image: '/wig20.jpeg',
        badge: 'Versatile'
    },
    {
        id: 21,
        name: 'Rose Gold Waves',
        price: '₦59,000',
        originalPrice: '₦83,000',
        rating: 4.8,
        reviews: 225,
        image: '/wig21.jpeg',
        badge: 'Chic'
    },
    {
        id: 22,
        name: 'Sandy Blonde Bob',
        price: '₦44,000',
        originalPrice: '₦66,000',
        rating: 4.3,
        reviews: 167,
        image: '/wig22.jpeg',
        badge: 'Casual'
    },
    {
        id: 23,
        name: 'Chocolate Curls',
        price: '₦49,000',
        originalPrice: '₦71,000',
        rating: 4.6,
        reviews: 212,
        image: '/wig23.jpeg',
        badge: 'Rich'
    },
    {
        id: 24,
        name: 'Pearl White Long',
        price: '₦76,000',
        originalPrice: '₦105,000',
        rating: 4.9,
        reviews: 289,
        image: '/wig24.jpeg',
        badge: 'Pure'
    },
    {
        id: 25,
        name: 'Bronze Shimmer Cut',
        price: '₦53,000',
        originalPrice: '₦77,000',
        rating: 4.5,
        reviews: 156,
        image: '/wig25.jpeg',
        badge: 'Glamorous'
    },
    {
        id: 26,
        name: 'Ivory Cream Style',
        price: '₦65,000',
        originalPrice: '₦89,000',
        rating: 4.7,
        reviews: 194,
        image: '/wig26.jpeg',
        badge: 'Soft'
    },
    {
        id: 27,
        name: 'Charcoal Black Layers',
        price: '₦57,000',
        originalPrice: '₦81,000',
        rating: 4.8,
        reviews: 238,
        image: '/wig27.jpeg',
        badge: 'Dramatic'
    },
    {
        id: 28,
        name: 'Peach Pink Waves',
        price: '₦70,000',
        originalPrice: '₦96,000',
        rating: 4.4,
        reviews: 178,
        image: '/wig28.jpeg',
        badge: 'Playful'
    },
    {
        id: 29,
        name: 'Slate Gray Bob',
        price: '₦46,000',
        originalPrice: '₦68,000',
        rating: 4.6,
        reviews: 201,
        image: '/wig29.jpeg',
        badge: 'Urban'
    },
    {
        id: 30,
        name: 'Midnight Blue Curls',
        price: '₦63,000',
        originalPrice: '₦87,000',
        rating: 4.9,
        reviews: 245,
        image: '/wig30.jpeg',
        badge: 'Mystical'
    },
    {
        id: 31,
        name: 'Coral Orange Style',
        price: '₦72,000',
        originalPrice: '₦98,000',
        rating: 4.5,
        reviews: 187,
        image: '/wig31.jpeg',
        badge: 'Vibrant'
    },
    {
        id: 32,
        name: 'Teal Green Layers',
        price: '₦58,000',
        originalPrice: '₦82,000',
        rating: 4.7,
        reviews: 223,
        image: '/wig32.jpeg',
        badge: 'Fresh'
    },
    {
        id: 33,
        name: 'Lavender Purple Waves',
        price: '₦69,000',
        originalPrice: '₦94,000',
        rating: 4.3,
        reviews: 166,
        image: '/wig33.jpeg',
        badge: 'Dreamy'
    },
    {
        id: 34,
        name: 'Mint Green Bob',
        price: '₦51,000',
        originalPrice: '₦74,000',
        rating: 4.8,
        reviews: 254,
        image: '/wig34.jpeg',
        badge: 'Cool'
    },
    {
        id: 35,
        name: 'Burgundy Red Curls',
        price: '₦75,000',
        originalPrice: '₦102,000',
        rating: 4.6,
        reviews: 198,
        image: '/wig35.jpeg',
        badge: 'Passionate'
    },
    {
        id: 36,
        name: 'Pearlescent White Long',
        price: '₦82,000',
        originalPrice: '₦115,000',
        rating: 4.9,
        reviews: 312,
        image: '/wig36.jpeg',
        badge: 'Ultimate'
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

const Shop = () => {
    const [selectedSort, setSelectedSort] = useState('Featured')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 10

    const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low']
    const categories = ['All', 'Lace', 'Human Hair', 'Curly', 'Straight', 'Colored']

    // Calculate pagination
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = featuredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(featuredProducts.length / productsPerPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages: number[] = []
        const maxVisiblePages = 5
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= maxVisiblePages; i++) {
                    pages.push(i)
                }
            } else if (currentPage >= totalPages - 2) {
                for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
                    pages.push(i)
                }
            } else {
                for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                    pages.push(i)
                }
            }
        }
        return pages
    }

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section className="py-8 mt-16 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <AnimatedGroup variants={transitionVariants}>
                            <div className="text-left mb-8">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-700 mb-2">
                                    Shop 
                                </h2>
                            </div>
                        </AnimatedGroup>

                        {/* Filters */}
                        <AnimatedGroup variants={transitionVariants}>
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
                                {/* Categories */}
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors${
                                                selectedCategory === category
                                                    ? 'bg-amber-700 text-white bg-amber-700 border border-gray-400'
                                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>

                                {/* Sort Options */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">Sort by:</span>
                                    <select
                                        value={selectedSort}
                                        onChange={(e) => setSelectedSort(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                                    >
                                        {sortOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </AnimatedGroup>

                        {/* Products Grid - Same as featured: 2 cols on mobile, 3 on tablet, 4 on desktop */}
                        <AnimatedGroup variants={transitionVariants}>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                                {currentProducts.map((product) => (
                                    <div key={product.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300">
                                        {/* Product Image */}
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-48 sm:h-56 object-cover transition-transform duration-300"
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
                                            <Button className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300 text-xs sm:text-sm py-1.5 sm:py-2">
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedGroup>

                        {/* Pagination */}
                        <AnimatedGroup variants={transitionVariants}>
                            <div className="flex justify-center items-center mt-8 gap-3">
                                <button 
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                    className="flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <div className="flex gap-3">
                                    {getPageNumbers().map((pageNumber) => (
                                        <button
                                            key={pageNumber}
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={`flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors${
                                                pageNumber === currentPage
                                                    ? 'text-amber-900 bg-amber-50 border border-amber-900 hover:bg-amber-100'
                                                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                                            }`}
                                        >
                                            {pageNumber}
                                        </button>
                                    ))}
                                </div>
                                <button 
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>

                {/* Page footer */}
                <Footer />
            </main>
        </>
    )
}

export default Shop
