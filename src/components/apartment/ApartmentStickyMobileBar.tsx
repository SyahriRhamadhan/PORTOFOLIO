type ApartmentStickyMobileBarProps = {
  salesWhatsAppUrl: string
}

export function ApartmentStickyMobileBar({ salesWhatsAppUrl }: ApartmentStickyMobileBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 px-4 lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-full border border-[#7d6b52]/20 bg-[#f8f2e9]/95 p-2 shadow-[0_24px_50px_-30px_rgba(20,15,10,0.55)] backdrop-blur">
        <a href={salesWhatsAppUrl} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-[#1f1a14] px-4 py-3 text-center text-sm font-semibold text-[#f7f0e5]">
          Book Visit
        </a>
        <a href="#apartment-demo" className="flex-1 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#2a241d]">
          360 Demo
        </a>
      </div>
    </div>
  )
}
