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