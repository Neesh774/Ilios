export default function formatTime(time: string) {
    const date = new Date(time)
    const month = date.toLocaleString('default', { month: 'long' })
    const day = date.getDate()
    const year = date.getFullYear()
    if (year === new Date().getFullYear()) {
        return `${month} ${day}`
    }
    else {
        return `${date.getMonth() + 1}/${day}/${year}`
    }
}