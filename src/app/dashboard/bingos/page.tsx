import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Bingo } from '@/types'; // Import the Note type from the types file

export default async function Dashboard() {
  // Sample data for your notes
  const bingos = await prisma.bingo.findMany();

  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-5">Your Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {bingos.map((bingo: Bingo) => (
          <div key={bingo.id} className="bg-white rounded-lg shadow-lg p-5 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <Link href={`/bingos/${bingo.id}`}>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">{bingo.title}</h3>
                <p className="text-gray-600 mt-2">{bingo.preview}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
