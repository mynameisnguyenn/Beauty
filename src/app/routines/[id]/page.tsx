import Link from "next/link";
import { getRoutineById } from "@/lib/routines";

export default async function RoutineDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const routine = getRoutineById(id);

  if (!routine) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold mb-2">Routine not found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          We couldn&apos;t find a routine with that ID.
        </p>
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          &larr; Back to feed
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        &larr; Back to feed
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl font-bold">{routine.name}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
            {routine.creator}
          </span>
          <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
            {routine.skinType}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          {routine.caption}
        </p>
      </div>

      <h2 className="text-lg font-bold mb-3">Steps</h2>
      <ol className="space-y-3">
        {routine.steps.map((step, index) => (
          <li
            key={index}
            className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-sm font-bold text-gray-400 dark:text-gray-500">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.product}
                </p>
                {step.notes && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 italic">
                    {step.notes}
                  </p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
