


export const About = () => {
    return (
        <section
            id="sobre"
            className="min-h-screen bg-[var(--white-1)] px-6 py-12 md:px-10 md:py-20"
        >
            <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:gap-20">

                <div className="flex shrink-0 items-center justify-center">
                    <img src="/img/icon-light-2.svg" alt="Logo Link Labz" className="w-[180px] md:w-[360px]" />
                </div>

                <div className="w-full max-w-[580px] text-center md:text-left">

                    <h1 className="text-[36px] font-black leading-none tracking-tight text-[var(--black-3)] md:text-[64px]">
                        Por que escolher a
                    </h1>

                    <h1 className="mt-1 inline-block bg-[var(--orange-1)] px-1 text-[36px] font-black leading-none tracking-tight text-white md:text-[64px]">
                        Link Labz?
                    </h1>
                    
                    <p className="mx-auto mt-5 text-[14px] leading-[1.4] text-[var(--black-4)] md:mx-0 md:text-[18px]">
                        Na Link Labz, desenvolvemos soluções sob medida, pensadas
                        exatamente para as necessidades do seu negócio. Unimos
                        desempenho, design moderno e tecnologia de ponta para criar
                        sistemas rápidos, seguros e eficientes. Nosso atendimento é
                        direto e personalizado, acompanhando você em cada etapa do
                        projeto, sempre com transparência e proximidade. Além disso,
                        trabalhamos com código bem estruturado e seguro, garantindo
                        qualidade, escalabilidade e tranquilidade para o futuro da
                        sua empresa.
                    </p>

                </div>
            </div>
        </section>
    );
};