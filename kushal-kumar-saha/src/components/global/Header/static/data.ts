import { HeaderDataType } from "../utils/types"

const headerStyles = "hoverable relative cursor-pointer"
const hideableHeaderStyles = "hoverable relative cursor-pointer hidden md:block "

export const headerData: HeaderDataType = [
    { label:"kushalkumar",  className:headerStyles },
    { label:"projects",     className:hideableHeaderStyles },
    { label:"interests",    className:hideableHeaderStyles },
    { label:"connect",      className:hideableHeaderStyles },
    { label:"blogs",        className:hideableHeaderStyles },
    { label:"services",     className:hideableHeaderStyles },
    { label:"portfolio",    className:hideableHeaderStyles },
    { label:"gallery",      className:hideableHeaderStyles },
    { label:"signin",       className:hideableHeaderStyles },
]