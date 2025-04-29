import Link from 'next/link';

export default async function Dashboard() {
  return (
    <div className="p-5">
      <h2 className="text-3xl font-semibold mb-5">Your Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="bg-white rounded-lg shadow-lg p-5 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <Link href={`/dashboard/notes`}>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">My Notes</h3>
              <p className="text-gray-600 mt-2">Go to My Notes</p>
            </div>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-5 text-center cursor-pointer hover:shadow-xl transition-shadow duration-300">
          <Link href={`/dashboard/bingo`}>
            <div>
              <h3 className="text-xl font-semibold text-gray-700">My Bingos</h3>
              <p className="text-gray-600 mt-2">Go to My Bingos</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
