import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Note } from '@/types'; // Import the Note type from the types file

export default async function Dashboard() {
  // Sample data for your notes
  const notes = await prisma.note.findMany();

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-5">Your Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {notes.map((note: Note) => (
          <div key={note.id} className="bg-white rounded-lg shadow-lg p-5 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <Link href={`/notes/${note.id}`}>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{note.title}</h3>
                <p className="text-gray-600 mt-2">{note.preview}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
