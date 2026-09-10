import {Button} from "./button/Button"
import { IoIosArrowForward } from "react-icons/io";



export const Hero = () => {
    return (
        <div className="flex flex-col h-[calc(100vh-88px)] justify-center items-center md:gap-4 text-center px-8">
            <h3 className="color-black-4">SOLUÇÕES WEB E MOBILE SOB MEDIDA</h3>
            <img src="img/logo-light.png" alt="imagem da logo branco" />
            <h3 className="color-black-4 text-center max-w-4xl">CRIAMOS WEBSITES, APLICATIVOS E LANDING PAGES PARA IMPULSIONAR SEU NEGÓCIO.</h3>
            <Button href="#contato" icon={<IoIosArrowForward size={32} />} >Entre em contato</Button>
        </div>
    )
}
