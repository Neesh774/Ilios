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

export function timeRange(start: string, end: string): string {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const startMonth = startDate.getMonth() + 1
    const startDay = startDate.getDate()
    const endMonth = endDate.getMonth() + 1
    const endDay = endDate.getDate()

    // more than one year -> end year
    // less than one year -> "{months} months"
    // less than one month -> "{weeks} weeks"
    // less than one week -> "{days} days"

    if (endDate.getFullYear() != startDate.getFullYear()) {
        return endDate.getFullYear().toString()
    }
    else if (endMonth != startMonth) {
        if (endMonth - startMonth == 1) {
            return "1 month"
        }
        else {
            return `${endMonth - startMonth} months`
        }
    }
    else if (endDay - startDay >= 7) {
        if (Math.floor((endDay - startDay) / 7) == 1) {
            return '1 week'
        }
        else return `${Math.floor((endDay - startDay) / 7)} weeks`
    }
    else {
        if (endDay - startDay == 1) {
            return '1 day'
        }
        else return `${endDay - startDay} days`
    }

}