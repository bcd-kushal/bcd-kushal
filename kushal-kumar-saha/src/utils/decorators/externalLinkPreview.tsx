import { ArrowTopRightIcon } from "@radix-ui/react-icons"

interface externalLinkPreviewInterface { label:string, className?: string, svgDimensions?: number | string }

export function ExternalLinkPreview({ label, className, svgDimensions }:externalLinkPreviewInterface) {
    return (
        <span className={className}>{label}<ArrowTopRightIcon width={svgDimensions||28} height={svgDimensions||28} className="translate-y-[1px]" /></span>
    )
}