import { notFound } from 'next/navigation'; // for handling 404 errors
import { prisma } from '@/lib/prisma';

// Your dynamic page component
export default async function BingoPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const bingoId = parseInt(id, 10);
  const bingo = await prisma.bingo.findUnique({ where: { id: bingoId } });

  if (!bingo) {
    notFound();
  }

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-5">{bingo.title}</h2>
      <p>{bingo.content}</p>
    </div>
  );
}
