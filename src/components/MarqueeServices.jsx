import { useEffect, useState } from "react";
import { MARQUEE_ITEMS } from "../data/data";

export const Marquee = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * 0.12);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="relative h-[100px] w-full overflow-hidden bg-[var(--white-1)]">

            <div
                className="absolute left-[-2%] top-[18px] z-20 w-[104%] -rotate-[1deg] bg-[var(--black-3)] py-6 ">
                <div
                    className="flex w-max items-center pl-6"
                    style={{
                        transform: `translateX(-${offset}px)`,
                    }}
                >
                    {MARQUEE_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center"
                        >
                            <span className="px-5 text-[15px] font-black uppercase text-white md:px-6 md:text-[17px]">
                                {item}
                            </span>

                            <img
                                src="/img/icon-light-3.svg"
                                alt=""
                                className="h-6 w-6 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className=" absolute left-[-2%] top-[30px] z-10 w-[104%] rotate-[1deg] bg-[var(--black-4)] py-10">
                <div className="flex w-max items-center pl-6">
                </div>
            </div>

        </section>
    );
};