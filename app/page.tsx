import { frontPageMockData } from '@/mock/front-page.js';
import { Lead } from '@/components/lead/lead';
import { Content } from '@/components/content/content';

export default function Home() {
  const { blocks } = frontPageMockData;

  console.log(blocks)

  return (
    <>
      <Lead blockData={blocks[0]} />
      <Content blockData={blocks[1]} />
      <Content blockData={blocks[2]} />
    </>
  )
}
