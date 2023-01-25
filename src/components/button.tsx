export const Button = (props: any) => {
    return (
        <button
            className={`${props.className} + border-[2px] px-[3.3rem] py-[1.2rem] rounded-[.5rem] uppercase shadow-[0_8px_8px_-4px_rgba(73,93,207,.20012)]`}
        >
            {props.text}
        </button>
    );
};
