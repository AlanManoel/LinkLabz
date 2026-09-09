import { TfiWorld } from "react-icons/tfi";


function Navbar() {
    const links = [
        { name: "SOBRE", href: "#sobre" },
        { name: "SERVIÇOS", href: "#servicos" },
        { name: "PROJETOS", href: "#projetos" },
        { name: "CONTATO", href: "#contato" },
        { name: "PT", href: "#PT", icon: TfiWorld }
    ];

    return (
        <nav className="flex items-center justify-between py-6 px-10">
            <div className="flex items-center gap-4">
                <img src="img/icon-light.svg" alt="" />
                <h4>Link Labz</h4>
            </div>
            <div>
                {links.map((item, index) => (
                    <a key={index} className="px-2 link-animado inline-flex items-center gap-1" href={item.href} >
                        {item.name} {item.icon && <item.icon />}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
