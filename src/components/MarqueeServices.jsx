function MarqueeServices() {
  const items = [
    "Websites",
    "Aplicativos",
    "Landing Pages",
    "UI/UX Design",
  ];

  return (
    <div className="overflow-hidden bg-[#3f3f46] py-4">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-white font-semibold">
            <img src="img/logo-icon.png" alt="" className="w-6" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeServices;