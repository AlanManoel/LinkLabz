


export const Button = ({ children, icon, href = "#", className = ""}) => {
    return (
        <a href={href} className={`flex justify-center items-center bg-[var(--orange-1)] text-[var(--white-1)] h-20 py-5 px-6 rounded a-bold btn-fade ${className}`}>
            {children}
            {icon && <span>{icon}</span>}
        </a>
    );
}
