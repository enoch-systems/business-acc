export interface Product {
    id: number
    name: string
    price: string
    originalPrice: string
    rating: number
    reviews: number
    image: string
    images: string[]
    description: string
    features: string[]
    colors: string[]
    sizes: string[]
    inStock: boolean
    badge: string
    category?: string
}

export const products: Product[] = [
    // Generate 36 products programmatically
    ...Array.from({ length: 36 }, (_, index) => {
        const id = index + 1
        const wigNumber = id
        const categories = ['Bob', 'Long', 'Curly', 'Straight', 'Layered', 'Short', 'Wavy', 'Blonde']
        const category = categories[Math.floor(Math.random() * categories.length)]
        const styles = ['Classic', 'Modern', 'Elegant', 'Trendy', 'Vintage', 'Bold', 'Natural', 'Luxury']
        const style = styles[Math.floor(Math.random() * styles.length)]
        const types = ['Cut', 'Style', 'Wig', 'Hair', 'Look', 'Design', 'Piece', 'Collection']
        const type = types[Math.floor(Math.random() * types.length)]
        const name = `${style} ${category} ${type}`

        const prices = ['₦35,000', '₦38,000', '₦42,000', '₦45,000', '₦48,000', '₦52,000', '₦55,000', '₦58,000', '₦62,000', '₦65,000', '₦68,000', '₦71,000', '₦75,000', '₦82,000']
        const priceIndex = Math.floor(Math.random() * prices.length)
        const price = prices[priceIndex]
        const originalPrice = prices[Math.min(priceIndex + 2, prices.length - 1)]

        const ratings = [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9]
        const rating = ratings[Math.floor(Math.random() * ratings.length)]
        const reviews = Math.floor(Math.random() * 200) + 50

        const colorPalettes = [
            ['Natural Black', 'Dark Brown', 'Chestnut Brown'],
            ['Jet Black', 'Off Black', 'Charcoal'],
            ['Platinum Blonde', 'Icy Blonde', 'Diamond Blonde'],
            ['Auburn Red', 'Burgundy Red', 'Copper Red'],
            ['Honey Brown', 'Caramel Brown', 'Chocolate Brown']
        ]
        const colors = colorPalettes[Math.floor(Math.random() * colorPalettes.length)]

        const badges = ['Best Seller', 'New Arrival', 'Hot Deal', 'Premium', 'Trending', 'Sale', 'Popular', 'Luxury', 'Exclusive', 'Eco-Friendly']
        const badge = Math.random() > 0.3 ? badges[Math.floor(Math.random() * badges.length)] : ''

        return {
            id,
            name,
            price,
            originalPrice,
            rating,
            reviews,
            image: `/wig${wigNumber}.jpeg`,
            images: [`/wig${wigNumber}.jpeg`, `/wig${wigNumber}-2.jpeg`, `/wig${wigNumber}-3.jpeg`, `/wig${wigNumber}-4.jpeg`],
            description: `Experience exceptional quality with our ${name}. This ${style.toLowerCase()} design features premium synthetic fibers that provide a natural look and feel. Perfect for those seeking ${category.toLowerCase()} styling with maximum comfort and versatility.`,
            features: [
                'Premium synthetic fibers',
                'Comfortable cap construction',
                'Adjustable fit',
                'Breathable design',
                'Easy maintenance',
                'Versatile styling'
            ],
            colors,
            sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
            inStock: Math.random() > 0.1, // 90% in stock
            badge,
            category
        } as Product
    })
]

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Get all products
export const getAllProducts = async (): Promise<Product[]> => {
    await delay(300) // Simulate API call
    return products
}

// Get product by ID
export const getProductById = async (id: number): Promise<Product | null> => {
    await delay(200) // Simulate API call
    return products.find(product => product.id === id) || null
}

// Get products by category
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
    await delay(250) // Simulate API call
    return products.filter(product =>
        product.category?.toLowerCase() === category.toLowerCase()
    )
}

// Search products
export const searchProducts = async (query: string): Promise<Product[]> => {
    await delay(150) // Simulate API call
    const lowerQuery = query.toLowerCase()
    return products.filter(product =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.category?.toLowerCase().includes(lowerQuery)
    )
}
