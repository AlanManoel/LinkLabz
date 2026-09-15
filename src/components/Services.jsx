import { useState } from 'react'
import { SERVICES } from "../data/data"


function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="w-full border-b border-brand-dark/20">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[22px] font-bold text-brand-dark md:text-[32px]">{item.title}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" stroke="#373840" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <p className="min-h-0 text-[15px] leading-relaxed text-brand-gray md:text-[16px]">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export const Services = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="servicos" className="min-h-screen px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-[30px] font-black text-brand-black md:text-[64px]">Serviços</h2>
        <h2 className="text-[30px] font-black text-brand-black md:text-[64px]">Disponíveis</h2>
        <p className="mt-4 text-[15px] text-brand-dark md:text-[18px]">
          Soluções digitais que impulsionam negócios,<br /> do conceito ao {' '}
          <span className="text-[var(--orange-1)]">código.</span>
        </p>
      </div>

      <div className=" text-[var(--black-3)] mx-auto mt-10 max-w-2xl md:mt-16">
        {SERVICES.map((item, i) => (
          <AccordionItem
            key={item.title}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}
