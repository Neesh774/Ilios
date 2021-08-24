import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  return <time dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time>
}