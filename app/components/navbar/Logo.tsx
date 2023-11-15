'use client'

import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter()
    return (
        <div className="bg-orange-700 px-2 py-1 rounded-md text-lf md:text-2xl cursor-pointer" onClick={() => router.push(`/`)} >
            Commerce<span className="text-sm">.com</span>
        </div>
    )
}

export default Logo