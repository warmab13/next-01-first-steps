
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Title',
    description: 'Pricing Description',
    keywords: ['Pricing page', 'Alonso', 'Info']
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Princing Page</span>
        </>
    )
}