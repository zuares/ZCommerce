import Button from "../../atoms/Button";

export function BtnPrimary({ children, block = false, ...rest }) {
    return (
        <Button className={`px-4 py-2 text-lg focus:outline-none bg-blue-500 text-white font-bold ${block && 'block w-full' || 'inline'}`} {...rest} >{children}</Button>
    );
}

export function BtnSecondary({ children, block = false }) {
    return (
        <Button className={`px-4 py-2 focus:outline-none bg-blue-300 text-white font-bold ${block && 'w-full' || ''}`} >{children}</Button>
    );
}
