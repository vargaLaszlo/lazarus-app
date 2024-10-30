import { proGMPageMockData } from '@/mock/pro-gm-page.js';
import { Lead } from '@/components/lead/lead';
import { GridList } from '@/components/grid-list/grid-list';

export default function ProGM() {
  const { blocks } = proGMPageMockData;

  console.log(blocks)

  return (
    <>
      <Lead blockData={blocks[0]} />
      <GridList blockData={blocks[1]} />
    </>
  )
}
