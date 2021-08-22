
export default function formatTime(str){
    if (str == 0){
        return "Midnight"
    } else {
        if (str.length === 3) {
            return `${str.slice(0,1)}:00 AM`
        } else {
            if (str == 1200) {
                return "Noon"
            }
            if (str.length >= 4) {
                return `${str.slice(0,2) - 12}:00 PM`
            }
        }
    }
}