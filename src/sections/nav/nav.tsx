import { Logo } from "../../components/logo";
import { Links } from "./components/links";

export default function Nav() {
    return (
        <div className="nav w-full hidden md:flex justify-between items-center">
            <Logo className="nav__logo bg-orange w-fit h-full" />
            <Links />
        </div>
    );
}
