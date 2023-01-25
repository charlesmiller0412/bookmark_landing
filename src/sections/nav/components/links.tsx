import { Button } from "../../../components/button";
export const Links = () => {
    return (
        <ul className="nav__links uppercase text-black flex items-center md:gap-[1.5vw] lg:gap-[4.4vw]">
            <li className="nav__links--item">
                <a
                    href="#"
                    className="hover:text-red text-[1.3rem] tracking-[.15rem] leading-[1.7rem] transition-all"
                >
                    features
                </a>
            </li>
            <li className="nav__links--item">
                <a
                    href="#"
                    className="hover:text-red text-[1.3rem] tracking-[.15rem] leading-[1.7rem] transition-all"
                >
                    pricing
                </a>
            </li>
            <li className="nav__links--item">
                <a
                    href="#"
                    className="hover:text-red text-[1.3rem] tracking-[.15rem] leading-[1.7rem] transition-all"
                >
                    contact
                </a>
            </li>
            <li className="nav__links--item">
                <Button
                    className="bg-red text-white text-[1.3rem] tracking-[.15rem] leading-[1.7rem] hover:bg-transparent hover:text-red border-2 hover:border-red transition-all"
                    text="login"
                />
            </li>
        </ul>
    );
};
