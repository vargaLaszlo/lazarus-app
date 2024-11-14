
import cfClient from '../lib/contentful-client';
import { IPageFields } from '../types/generated/contentful';

export const parsePages = (fields: IPageFields) => ({
  title: fields?.title || "",
});

export type PageContent = ReturnType<typeof parsePages>;

export const getPagesContent = async (slug: string) => {
  const PageContent = await cfClient.getEntries({
    content_type: "page",
    "fields.slug": slug,
    limit: 1
  });

  return parsePages(PageContent?.items?.[0]?.fields as IPageFields)
}

export const getPagesSlugs = async () => {
  const PageContent = await cfClient.getEntries({
    content_type: "page",
    select: ["sys.id", "fields.slug"],
    limit: 1000
  });

  return PageContent.items.map((item) => item.fields.slug);
}





