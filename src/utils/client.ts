import { Client } from "@notionhq/client";

const token = process.env.NOTION_AUTH_TOKEN;

export const notionClient = new Client({
    auth: token,
});