import { getPagesContent, getPagesSlugs } from '@/api/pages';
import { ContentBlock } from '@/components/content-block/content-block';
import { IContentBoxFields } from '@/types/generated/contentful';

interface Page {
  id: string
  title: string
  content: string
}
 
export const revalidate = 60;
export const dynamicParams = true;
 
export async function generateStaticParams() {
  const pages = await getPagesSlugs();
  console.log(
    pages.map((page) => ({
      id: String(page),
    }))

  );
  return pages.map((page) => ({
    id: String(page),
  }))
}
 
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const pageData = await getPagesContent(id);
  const { content } = pageData;
  console.log(pageData);
  console.log(content);

  return (
    <main>
      {content?.map((block, i) => (
        <ContentBlock blockData={block.fields as IContentBoxFields} key={Math.random() + i} />
      ))}
    </main>
  )
}
