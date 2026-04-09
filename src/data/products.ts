export interface Product {
  id: number
  name: string
  description: string
  originalPrice: number
  discountedPrice: number
  stock: number
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Student Database',
    description: 'Comprehensive database of student records across India including names, contact details, educational institutions, and course information.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 2,
    name: 'Doctors Database',
    description: 'Verified database of registered medical professionals including specialization, clinic details, and contact information.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 3,
    name: 'Business Pincode Database',
    description: 'Complete business listings sorted by pincode, ideal for targeted local marketing campaigns and logistics planning.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 4,
    name: 'State City B2B Database',
    description: 'B2B contact database organized by state and city, covering all major industries with decision-maker contacts.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 5,
    name: 'Pincode Data Full',
    description: 'Full pincode dataset for all of India with area names, district, state mapping and demographic data.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 6,
    name: 'Category Data',
    description: 'Industry-wise categorized business database covering retail, manufacturing, services and more for targeted outreach.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
  {
    id: 7,
    name: '40 Crore Mobile Database',
    description: 'Massive verified mobile number database with 40 crore+ entries across all Indian states, ideal for bulk SMS campaigns.',
    originalPrice: 499,
    discountedPrice: 99,
    stock: Math.floor(Math.random() * 5) + 1,
  },
]

export default products
