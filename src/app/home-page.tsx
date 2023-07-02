'use client'
import { useState } from "react";


function killowatthours_per_year(watt: number) {
    const hours_per_year: number = 24.0 * 365.0;
    return watt * hours_per_year / 1000.0
    //return watt * (hours_per_year) / 1000.
}

interface WattbarProps {
    wattText: string;
    onWattChange: (value: string) => void;
}

function Wattbar(prop: WattbarProps) {
    return (
        <form>
            <input type="text" value={prop.wattText} placeholder="100" onChange={(e) => prop.onWattChange(e.target.value)} />
        </form>
    )
}

interface WattProp {
    watt: number
}

function WattResult(prop: WattProp) {
    return (
        <h1 className="text-white"> kWh = {killowatthours_per_year(prop.watt)} </h1>
    )
}
function PriceResult(prop: WattProp) {
    const price = .5
    return (
        <h1 className="text-white"> price = {killowatthours_per_year(prop.watt) * price} </h1>
    )
}

export default function HomePage() {
    const [wattText, setWattText] = useState("");
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Wattbar wattText={wattText} onWattChange={setWattText} />
            <WattResult watt={+wattText} />
            <PriceResult watt={+wattText} />
        </div>
    )
}