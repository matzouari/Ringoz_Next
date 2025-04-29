import { Note } from '../../../types'; // Import the Note type
import { notFound } from 'next/navigation'; // for handling 404 errors
import Link from 'next/link';

import { prisma } from '@/lib/prisma';

const notes: Note[] = [
  { id: 1, title: 'Note 1', content: 'This is the full content of note 1...', preview: 'This is the preview of note 1...' },
  { id: 2, title: 'Note 2', content: 'This is the full content of note 2...', preview: 'This is the preview of note 2...' },
  { id: 3, title: 'Note 3', content: 'This is the full content of note 3...', preview: 'This is the preview of note 3...' }
];

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
