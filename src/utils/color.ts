export function notionColor(color: string) {
    if (color == "gray") {
        return "#A4A4A4"
    }
    else if (color == "brown") {
        return "#E2A285"
    }
    else if (color == "red") {
        return "#FF8894"
    }
    else if (color == "orange") {
        return "#FFBF97"
    }
    else if (color == "yellow") {
        return "#FFE195"
    }
    else if (color == "green") {
        return "#43A892"
    }
    else if (color == "blue") {
        return "#4588C2"
    }
    else if (color == "pink") {
        return "#FF97D4"
    }
    else if (color == "purple") {
        return "#B282FF"
    }
    else {
        return "#e6e6e4"
    }
}

export function getNotionColor(color: string, text: boolean, forceBackground: boolean = false) {
    if (text) {
        switch (color) {
            case 'gray':
                return 'notionTextGray';
            case 'brown':
                return 'notionTextBrown';
            case 'orange':
                return 'notionTextOrange';
            case 'yellow':
                return 'notionTextYellow';
            case 'green':
                return 'notionTextGreen';
            case 'blue':
                return 'notionTextBlue';
            case 'purple':
                return 'notionTextPurple';
            case 'pink':
                return 'notionTextPink';
            case 'red':
                return 'notionTextRed';
            default:
                return ''
        }
    }
    else {
        switch (color) {
            case 'gray':
                return 'bg-notionBgGray';
            case 'brown':
                return 'bg-notionBgBrown';
            case 'orange':
                return 'bg-notionBgOrange';
            case 'yellow':
                return 'bg-notionBgYellow';
            case 'green':
                return 'bg-notionBgGreen';
            case 'blue':
                return 'bg-notionBgBlue';
            case 'purple':
                return 'bg-notionBgPurple';
            case 'pink':
                return 'bg-notionBgPink';
            case 'red':
                return 'bg-notionBgRed';
            default:
                return forceBackground ? 'bg-notionBgDefault' : ''
        }
    }
}