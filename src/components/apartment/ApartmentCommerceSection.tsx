import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import {
  apartmentCommerceCategories,
  type CommerceCategory,
  type CommerceProduct,
} from '../../data/apartmentLandingData'
import { fadeUp } from './apartmentMotion'

type ApartmentCommerceSectionProps = {
  activeCategory: CommerceCategory | 'All'
  filteredProducts: CommerceProduct[]
  cart: CommerceProduct[]
  onSetCategory: (category: CommerceCategory | 'All') => void
  onViewProduct: (product: CommerceProduct) => void
  onAddToCart: (product: CommerceProduct) => void
}

export function ApartmentCommerceSection({
  activeCategory,
  filteredProducts,
  cart,
  onSetCategory,
  onViewProduct,
  onAddToCart,
}: ApartmentCommerceSectionProps) {
  return (
    <section id="apartment-commerce" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-8">
        <motion.div {...fadeUp} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-[#8b7d67]">Mini commerce</p>
            <h2 className="mt-3 font-['Georgia'] text-4xl md:text-5xl">A lightweight commercial layer inside the residence story.</h2>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => onSetCategory('All')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === 'All' ? 'bg-[#2b241c] text-[#f7f0e5]' : 'bg-white text-[#2b241c]'}`}
          >
            All
          </button>
          {apartmentCommerceCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onSetCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'bg-[#2b241c] text-[#f7f0e5]' : 'bg-white text-[#2b241c]'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <motion.article
              key={product.id}
              {...fadeUp}
              className="overflow-hidden rounded-[2rem] border border-[#7d6b52]/15 bg-white shadow-[0_30px_70px_-48px_rgba(20,15,10,0.6)]"
            >
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">{product.category}</p>
                    <h3 className="mt-2 font-['Georgia'] text-2xl">{product.name}</h3>
                  </div>
                  <span className="rounded-full bg-[#efe5d8] px-3 py-1 text-xs font-medium text-[#5f503d]">{product.tag}</span>
                </div>
                <p className="text-sm leading-7 text-[#5d5246]">{product.description}</p>
                <div className="flex items-center justify-between gap-3 border-t border-[#e8dece] pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Price</p>
                    <p className="mt-1 text-lg font-semibold text-[#241f18]">{product.price}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onViewProduct(product)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#352c21] px-4 py-2 text-sm font-semibold text-[#2b241c] transition hover:bg-[#2b241c] hover:text-[#f7f0e5]"
                    >
                      View Details
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#2b241c] px-4 py-2 text-sm font-semibold text-[#f7f0e5] transition hover:bg-[#3a3024]"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.aside {...fadeUp} className="h-fit rounded-[2rem] border border-[#7d6b52]/15 bg-[#1f1a14] p-6 text-[#f7f0e5] shadow-[0_30px_70px_-48px_rgba(20,15,10,0.7)] lg:sticky lg:top-28">
        <p className="text-xs uppercase tracking-[0.24em] text-[#c8b79f]">Cart / assisted checkout</p>
        <h3 className="mt-3 font-['Georgia'] text-3xl">Order summary</h3>
        <p className="mt-3 text-sm leading-7 text-[#dbcdbc]">
          MVP checkout stays simple. Users express intent here, then continue to WhatsApp or inquiry follow-up without a full payment gateway.
        </p>
        <div className="mt-6 space-y-3">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="font-medium">{item.name}</p>
                <p className="mt-1 text-sm text-[#d8cab8]">{item.price}</p>
              </div>
            ))
          ) : (
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-[#d8cab8]">
              No items yet. Add a furnishing, smart living bundle, service, or amenity pass to test the flow.
            </div>
          )}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
          <p className="text-sm text-[#d8cab8]">Checkout fields</p>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-[#f3e7d9]">
            <li>Name and WhatsApp</li>
            <li>Email and inquiry type</li>
            <li>Preferred date for services or visit</li>
            <li>Notes for furnishing or amenity requests</li>
          </ul>
        </div>
        <a
          href="#apartment-contact"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f0dfc6] px-5 py-3 text-sm font-semibold text-[#271f17] transition hover:bg-[#f6e9d6]"
        >
          Continue to Assisted Checkout
        </a>
      </motion.aside>
    </section>
  )
}
