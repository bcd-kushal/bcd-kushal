export const getRandomDigit = ({ start, stop }:{ start?:number, stop:number }) => {
    return (start||0) + (Math.round(Math.random()*100) % (stop-(start||0)))
}