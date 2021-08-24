import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});
export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    return response.results;
  };
  
  export const getPage = async (pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  };
  
  export const getBlocks = async (blockId) => {
    const response = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 50,
    });
    return response.results;
  };

  export const queryDatabase = async (slug, database_Id) => {
      //get the page with the slug property
      const response = await notion.databases.query({
        database_id: database_Id,
        filter: {
          or: [
            {
              property: 'Slug',
              rich_text: {
                equals: slug
              }
            }
          ]
        }
      })
      return response.results[0];
  }