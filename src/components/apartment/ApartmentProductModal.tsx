import { Check, X } from 'lucide-react'
import { type CommerceProduct } from '../../data/apartmentLandingData'

type ApartmentProductModalProps = {
  product: CommerceProduct
  salesWhatsAppUrl: string
  onAddToCart: (product: CommerceProduct) => void
  onClose: () => void
}

export function ApartmentProductModal({ product, salesWhatsAppUrl, onAddToCart, onClose }: ApartmentProductModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} detail`}
      onClick={onClose}
    >
      <div
        className="mx-auto grid max-w-4xl gap-6 rounded-[2rem] bg-[#f7f0e5] p-4 text-[#221f1a] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.7)] md:grid-cols-[0.95fr_1.05fr] md:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#8b7d67]">{product.category}</p>
              <h3 className="mt-2 font-['Georgia'] text-3xl">{product.name}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7d6b52]/20 bg-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <img src={product.image} alt={product.name} className="h-[320px] w-full rounded-[1.5rem] object-cover" />
          <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-[#584d41]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Commercial Fit</p>
            <p className="mt-2">
              This product is placed inside the residence story to support move-in readiness, smart living upgrades, or amenity-led monetization.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[1.5rem] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Product summary</p>
            <p className="mt-4 text-sm leading-7 text-[#584d41]">{product.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#efe5d8] px-3 py-1 text-xs font-medium text-[#5f503d]">{product.tag}</span>
              <span className="rounded-full bg-[#f7f1e8] px-3 py-1 text-xs font-medium text-[#5f503d]">{product.price}</span>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7d67]">Suggested order flow</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#584d41]">
              <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-[#847055]" /> Review the package and decide if it is furnishing, service, or amenity intent.</li>
              <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-[#847055]" /> Add to cart for assisted checkout tracking.</li>
              <li className="flex items-start gap-2"><Check className="mt-1 h-4 w-4 text-[#847055]" /> Continue to inquiry or WhatsApp follow-up.</li>
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-[#2b241c] p-5 text-[#f7f0e5]">
            <p className="text-xs uppercase tracking-[0.22em] text-[#cdbca3]">Action</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product)
                  onClose()
                }}
                className="rounded-full bg-[#f0dfc6] px-4 py-2 text-sm font-semibold text-[#271f17]"
              >
                Add to Cart
              </button>
              <a
                href="#apartment-contact"
                onClick={onClose}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
              >
                Continue to Inquiry
              </a>
              <a
                href={salesWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
              >
                Ask Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
