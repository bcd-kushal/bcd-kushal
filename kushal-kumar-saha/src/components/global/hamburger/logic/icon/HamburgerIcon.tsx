

export function HamburgerIcon({ topBarId, bottomBarId }: { topBarId: string, bottomBarId: string }) {
    return (
        <div className="grid *:row-start-1 *:col-start-1 *:h-[1.3px] *:w-4 *:bg-slate-200">
            <span id={topBarId} className="-translate-y-1"></span><span id={bottomBarId} className="translate-y-1"></span>
        </div>
    )
}