import Link from "next/link";
import { routines } from "@/lib/routines";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Routine Feed</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Discover skincare and makeup routines from the community.
      </p>

      <div className="space-y-4">
        {routines.map((routine) => (
          <Link
            key={routine.id}
            href={`/routines/${routine.id}`}
            className="block border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm text-gray-500 dark:text-gray-400">
                {routine.creator}
              </span>
              <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                {routine.skinType}
              </span>
            </div>
            <h2 className="text-lg font-bold mb-1">{routine.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {routine.caption}
            </p>
            <span className="inline-block mt-3 text-sm font-medium text-blue-600 dark:text-blue-400">
              View routine &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
