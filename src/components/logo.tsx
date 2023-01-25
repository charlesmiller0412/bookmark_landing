import bookmarkLogo from "../assets/logo-bookmark.svg";

export const Logo = (props: any) => {
    return (
        <a
            href="#"
            title="Bookmark Landing Home"
            accessKey="h"
            className={props.className}
        >
            <img src={bookmarkLogo} alt="Bookmark Logo" />
        </a>
    );
};
