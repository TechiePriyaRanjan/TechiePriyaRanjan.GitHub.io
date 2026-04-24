import Image from "next/image"

interface WavingHandProps {
    size?: number;
}

export const WavingHand = ({ size = 48 }: WavingHandProps) => {
    return (
        <div 
            className="relative mx-2 group cursor-pointer inline-flex flex-shrink-0"
            style={{ width: size, height: size }}
        >
            <div className="w-full h-full group-hover:animate-wave group-hover:scale-125 transition-transform duration-300 origin-[70%_70%] will-change-transform">
                <Image
                    src="/images/waving_hand.svg"
                    alt="Waving Hand"
                    width={size}
                    height={size}
                    className="object-contain"
                    priority
                />
            </div>
        </div>
    )
}
