import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"

export type Blog = {
    properties: {
        Name: {
            type: "title";
            title: Array<RichTextItemResponse>;
            id: string;
        },
        Slug: {
            type: "rich_text";
            rich_text: Array<RichTextItemResponse>;
            id: string;
        },
        Created: {
            type: "created_time";
            created_time: string;
            id: string;
        },
        Description: {
            type: "rich_text";
            rich_text: Array<RichTextItemResponse>;
            id: string;
        }
        Tags: {
            type: "multi_select";
            multi_select: Array<{
                id: string;
                name: string;
                color: string;
            }>;
            id: string;
        }
    },
    id: string;
}

export type Project = {
    properties: {
        Name: {
            type: "title";
            title: Array<RichTextItemResponse>;
            id: string;
        },
        Status: {
            type: "select";
            select: {
                id: string;
                name: string;
                color: string;
            };
        },
        Photo: {
            type: "files";
            files: Array<{
                name: string;
                type: "external";
                external: {
                    url: string;
                };
            } | {
                name: string;
                type: "file";
                file: {
                    url: string;
                };
            }>;
        },
        Github: {
            type: "url";
            url: string;
        },
        Link: {
            type: "url";
            url: string;
        },
        Description: {
            type: "rich_text";
            rich_text: Array<RichTextItemResponse>;
            id: string;
        },
        Technologies: {
            type: "multi_select";
            multi_select: Array<{
                id: string;
                name: string;
                color: string;
            }>;
            id: string;
        },
        Featured: {
            type: "checkbox";
            checkbox: boolean;
        },
        Date: {
            type: "date";
            date: {
                start: string;
                end: string;
            };
        }
    },
    id: string;
}