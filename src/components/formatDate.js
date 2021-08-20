export default function formatDate(str) {
    let pivot = str.indexOf("T")
    let end = str.indexOf("Z")
    const date = str.slice(0,pivot)
    const time = str.slice(pivot + 1,end)
    return [date,time]
    }
    