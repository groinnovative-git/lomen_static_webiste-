import React from 'react'
import Hero from '../components/Hero'
import CategorySection from '../components/CategorySection'
import BannerSection from '../components/BannerSection'
import TrendingSection from '../components/TrendingSection'
import TrustedSection from '../components/TrustedSection'
import CustomerReviewSection from '../components/CustomerReviewSection'
import InstagramSection from '../components/InstagramSection'
import FAQSection from '../components/FAQSection'

const HomePage = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>

      <CategorySection />
      <BannerSection />
      <TrendingSection />
      <TrustedSection />
      <CustomerReviewSection />
      <FAQSection />
      <InstagramSection />
    </div>
  )
}

export default HomePage
