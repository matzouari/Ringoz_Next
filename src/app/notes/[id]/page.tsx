import { notFound } from 'next/navigation'; // for handling 404 errors
import { prisma } from '@/lib/prisma';

// Your dynamic page component
export default async function NotePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const noteId = parseInt(id, 10);
  const note = await prisma.note.findUnique({ where: { id: noteId } });

  if (!note) {
    notFound();
  }

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-5">{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}
