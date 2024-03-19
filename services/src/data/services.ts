
export default function MyServices(){
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
    function createBody(str:string){
        const commonBody = "Hi Kushal, I want to get myself"
        const addressingVowel = vowels.includes(str[0].toLowerCase()) ? "an" : "a"
        const action = ["created/edited", "done"]
        const tail = "I look forward to working with you"

        return `${commonBody} ${addressingVowel} ${str} ${str.includes("penetration")||str.includes("security") ? action[1] : action[0]}.\n\n${tail}.`
    }

    function createSubject(str:string){
        return `${str} service request`
    }

    return [
        {
            "booking_name": "Website development",
            "tag": "Software",
            "time": "5-7 days",
            "price": "₹ 1500+",
            "description": "Small-scale or large-scale, I'm tech-stack flexible to meet all ends",
            "emailBody": createBody("website"),
            "emailSubject": createSubject("Website")
        },
    
        {
            "booking_name": "Discord bot creation",
            "tag": "Discord",
            "time": "1-3 days",
            "price": "₹ 800+",
            "description": "Regulate and monitor your tasks with a discord bot running 24/7",
            "emailBody": createBody("discord bot"),
            "emailSubject": createSubject("Discord")
        },
        
        {
            "booking_name": "Discord channel setup",
            "tag": "Discord",
            "time": "1-4 days",
            "price": "₹ 500+",
            "description": "Have a channel set up with necessary bots and levels perked",
            "emailBody": createBody("discord server"),
            "emailSubject": createSubject("Discord")
        },
    
    
    
        {
            "booking_name": "Server management",
            "tag": "Software",
            "time": "3-7 days",
            "price": "₹ 1200+",
            "description": "Get your server-end managed or tweaked",
            "emailBody": createBody("server"),
            "emailSubject": createSubject("Server")
        },
    
    
    
        {
            "booking_name": "Automation",
            "tag": "Software",
            "time": "4-7 days",
            "price": "₹ 1500+",
            "description": "Automate your repitive software tasks",
            "emailBody": createBody("software automation"),
            "emailSubject": createSubject("Automation")
        },
    

        {
            "booking_name": "Penetration testing",
            "tag": "Pentesting",
            "time": "3-4 days",
            "price": "₹ 900+",
            "description": "Get your software/website tested for backdoors or threat vulnerabilities",
            "emailBody": createBody("penetration test"),
            "emailSubject": createSubject("Pentesting")
        },
        

        {
            "booking_name": "Software security check",
            "tag": "Pentesting",
            "time": "3-4 days",
            "price": "₹ 600+",
            "description": "Get your software/website tested for security vulnerabilities",
            "emailBody": createBody("security test"),
            "emailSubject": createSubject("Security test")
        },
    
    
        {
            "booking_name": "Anime artwork",
            "tag": "Art",
            "time": "3-14 days",
            "price": "₹ 400+",
            "description": "Get yourself your waifu/husbando made the way you love",
            "emailBody": createBody("anime artwork"),
            "emailSubject": createSubject("Artwork")
        },
        
    
    
        {
            "booking_name": "Linearts",
            "tag": "Art",
            "time": "2-5 days",
            "price": "₹ 150+",
            "description": "All kinds are accepted to be linearted",
            "emailBody": createBody("lineart"),
            "emailSubject": createSubject("Artwork")
        },
    

    
        {
            "booking_name": "Photoshop edits",
            "tag": "Editing",
            "time": "1-4 days",
            "price": "₹ 120+",
            "description": "Intermediate edits or creations over PS",
            "emailBody": createBody("photoshop content"),
            "emailSubject": createSubject("Editing")
        },
        
    
    
        {
            "booking_name": "Video content creation",
            "tag": "Editing",
            "time": "2-4 days",
            "price": "₹ 700+",
            "description": "Get your dream clip shooted, edited and published all together",
            "emailBody": createBody("video"),
            "emailSubject": createSubject("Editing")
        },
        
    
    
        {
            "booking_name": "Wordpress site",
            "tag": "Software",
            "time": "1-2 days",
            "price": "₹ 300+",
            "description": "Quickly deploy a Wordpress site with zero overhead maintainence time",
            "emailBody": createBody("wordpress site"),
            "emailSubject": createSubject("Wordpress")
        },
    
    
    
    ]
}
