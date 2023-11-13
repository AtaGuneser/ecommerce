import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
    cardProduct: CardProductProps,
    increaseFunc: () => void;
    decreaseFunc: () => void;
}
const Counter: React.FC<CounterProps> = ({ cardProduct, increaseFunc, decreaseFunc }) => {


    const buttonStyle = "w-8 h-8 border rounded-md flex items-center justify-center text-lg"
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <div className={buttonStyle} onClick={decreaseFunc}>-</div>
            <div className="text-lg md:text-xl">{cardProduct.quantity}</div>
            <div className={buttonStyle} onClick={increaseFunc}>+</div>
        </div>
    )
}

export default Counter