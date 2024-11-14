import { getPagesContent, getPagesSlugs } from '@/api/pages';

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
 
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  
  const pageData = await getPagesContent(id);

  const {title} = pageData;

  return (
    <main>
      <h1>{title}</h1>
    </main>
  )
}


