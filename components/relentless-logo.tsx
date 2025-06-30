interface RelentlessLogoProps {
    width?: number
    height?: number
    className?: string
}

export default function RelentlessLogo({ width = 48, height = 48, className = "" }: RelentlessLogoProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            role="img"
            aria-label="Relentless Energy Logo"
        >
            {/* Inner ring - largest dots (closest to center) */}
            <circle cx="50" cy="35" r="4" fill="#991B1B" />
            <circle cx="58" cy="42" r="4.5" fill="#B91C1C" />
            <circle cx="58" cy="58" r="4" fill="#991B1B" />
            <circle cx="50" cy="65" r="4.5" fill="#B91C1C" />
            <circle cx="42" cy="58" r="4" fill="#991B1B" />
            <circle cx="42" cy="42" r="4.5" fill="#B91C1C" />
            <circle cx="65" cy="50" r="4" fill="#991B1B" />
            <circle cx="35" cy="50" r="4.5" fill="#B91C1C" />

            {/* Second ring - large dots */}
            <circle cx="50" cy="28" r="3.5" fill="#DC2626" />
            <circle cx="62" cy="32" r="3" fill="#EF4444" />
            <circle cx="72" cy="50" r="3.5" fill="#DC2626" />
            <circle cx="68" cy="62" r="3" fill="#EF4444" />
            <circle cx="62" cy="68" r="3.5" fill="#DC2626" />
            <circle cx="50" cy="72" r="3" fill="#EF4444" />
            <circle cx="38" cy="68" r="3.5" fill="#DC2626" />
            <circle cx="32" cy="62" r="3" fill="#EF4444" />
            <circle cx="28" cy="50" r="3.5" fill="#DC2626" />
            <circle cx="32" cy="38" r="3" fill="#EF4444" />
            <circle cx="38" cy="32" r="3.5" fill="#DC2626" />
            <circle cx="68" cy="38" r="3" fill="#EF4444" />

            {/* Third ring - medium dots */}
            <circle cx="50" cy="22" r="2.5" fill="#EF4444" />
            <circle cx="59" cy="25" r="2" fill="#F87171" />
            <circle cx="67" cy="30" r="2.5" fill="#EF4444" />
            <circle cx="75" cy="41" r="2" fill="#F87171" />
            <circle cx="78" cy="50" r="2.5" fill="#EF4444" />
            <circle cx="75" cy="59" r="2" fill="#F87171" />
            <circle cx="70" cy="70" r="2.5" fill="#EF4444" />
            <circle cx="59" cy="75" r="2" fill="#F87171" />
            <circle cx="50" cy="78" r="2.5" fill="#EF4444" />
            <circle cx="41" cy="75" r="2" fill="#F87171" />
            <circle cx="30" cy="70" r="2.5" fill="#EF4444" />
            <circle cx="25" cy="59" r="2" fill="#F87171" />
            <circle cx="22" cy="50" r="2.5" fill="#EF4444" />
            <circle cx="25" cy="41" r="2" fill="#F87171" />
            <circle cx="33" cy="30" r="2.5" fill="#EF4444" />
            <circle cx="41" cy="25" r="2" fill="#F87171" />

            {/* Fourth ring - small dots */}
            <circle cx="50" cy="15" r="1.5" fill="#F87171" />
            <circle cx="57" cy="17" r="1.2" fill="#FCA5A5" />
            <circle cx="64" cy="21" r="1.5" fill="#F87171" />
            <circle cx="71" cy="26" r="1.2" fill="#FCA5A5" />
            <circle cx="77" cy="33" r="1.5" fill="#F87171" />
            <circle cx="82" cy="41" r="1.2" fill="#FCA5A5" />
            <circle cx="85" cy="50" r="1.5" fill="#F87171" />
            <circle cx="82" cy="59" r="1.2" fill="#FCA5A5" />
            <circle cx="79" cy="67" r="1.5" fill="#F87171" />
            <circle cx="74" cy="74" r="1.2" fill="#FCA5A5" />
            <circle cx="67" cy="79" r="1.5" fill="#F87171" />
            <circle cx="59" cy="83" r="1.2" fill="#FCA5A5" />
            <circle cx="50" cy="85" r="1.5" fill="#F87171" />
            <circle cx="41" cy="83" r="1.2" fill="#FCA5A5" />
            <circle cx="33" cy="79" r="1.5" fill="#F87171" />
            <circle cx="26" cy="74" r="1.2" fill="#FCA5A5" />
            <circle cx="21" cy="67" r="1.5" fill="#F87171" />
            <circle cx="18" cy="59" r="1.2" fill="#FCA5A5" />
            <circle cx="15" cy="50" r="1.5" fill="#F87171" />
            <circle cx="18" cy="41" r="1.2" fill="#FCA5A5" />
            <circle cx="23" cy="33" r="1.5" fill="#F87171" />
            <circle cx="29" cy="26" r="1.2" fill="#FCA5A5" />
            <circle cx="36" cy="21" r="1.5" fill="#F87171" />
            <circle cx="43" cy="17" r="1.2" fill="#FCA5A5" />

            {/* Outer ring - smallest dots */}
            <circle cx="50" cy="8" r="1" fill="#FCA5A5" />
            <circle cx="56" cy="9" r="0.8" fill="#FECACA" />
            <circle cx="62" cy="12" r="1" fill="#FCA5A5" />
            <circle cx="68" cy="16" r="0.8" fill="#FECACA" />
            <circle cx="74" cy="21" r="1" fill="#FCA5A5" />
            <circle cx="79" cy="27" r="0.8" fill="#FECACA" />
            <circle cx="84" cy="34" r="1" fill="#FCA5A5" />
            <circle cx="88" cy="42" r="0.8" fill="#FECACA" />
            <circle cx="92" cy="50" r="1" fill="#FCA5A5" />
            <circle cx="88" cy="58" r="0.8" fill="#FECACA" />
            <circle cx="84" cy="66" r="1" fill="#FCA5A5" />
            <circle cx="79" cy="73" r="0.8" fill="#FECACA" />
            <circle cx="74" cy="79" r="1" fill="#FCA5A5" />
            <circle cx="68" cy="84" r="0.8" fill="#FECACA" />
            <circle cx="62" cy="88" r="1" fill="#FCA5A5" />
            <circle cx="56" cy="91" r="0.8" fill="#FECACA" />
            <circle cx="50" cy="92" r="1" fill="#FCA5A5" />
            <circle cx="44" cy="91" r="0.8" fill="#FECACA" />
            <circle cx="38" cy="88" r="1" fill="#FCA5A5" />
            <circle cx="32" cy="84" r="0.8" fill="#FECACA" />
            <circle cx="26" cy="79" r="1" fill="#FCA5A5" />
            <circle cx="21" cy="73" r="0.8" fill="#FECACA" />
            <circle cx="16" cy="66" r="1" fill="#FCA5A5" />
            <circle cx="12" cy="58" r="0.8" fill="#FECACA" />
            <circle cx="8" cy="50" r="1" fill="#FCA5A5" />
            <circle cx="12" cy="42" r="0.8" fill="#FECACA" />
            <circle cx="16" cy="34" r="1" fill="#FCA5A5" />
            <circle cx="21" cy="27" r="0.8" fill="#FECACA" />
            <circle cx="26" cy="21" r="1" fill="#FCA5A5" />
            <circle cx="32" cy="16" r="0.8" fill="#FECACA" />
            <circle cx="38" cy="12" r="1" fill="#FCA5A5" />
            <circle cx="44" cy="9" r="0.8" fill="#FECACA" />

            {/* Center is intentionally left empty */}
        </svg>
    )
}
