'use client';

import { useState } from 'react';

const summaryData = [
  {
    title: 'Structure',
    content:
      'Created a reusable Pokémon Card component that renders for all 20 objects in a responsive page (1-4 columns, depending on screen size) as well as an Assignment Summary component at the top.',
  },
  {
    title: 'Data Fetching',
    content:
      'The endpoint only returns objects with an id and a name so I used a two-step fetch. First the list, then the details. All 20 at once to reduce loading times.',
  },
  {
    title: 'Type Safety',
    content:
      'Defined the Pokémon and Stat interfaces to match the actual API shape. ',
  },
  {
    title: 'Loading, Error, & Success Handling',
    content:
      'Used the standard try/catch methods, combined with conditional rendering so the user knows what is going on.',
  },
  {
    title: 'Design',
    content:
      'Color coded Pokémon Stat containers to match common and intuitive color codings in gaming.',
  },
  {
    title: 'Accessibility',
    content:
      'I added meaningul alt text on each Pokémon image, roles, aria-live, aria-expanded, and aria-labels for screen readers',
  },
];

export default function AssignmentSummary() {
  // adding an isOpen state to let the user close the summary and focus on the actual page content.
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="w-full bg-blue-200 rounded border-2 text-gray-800 border-blue-500">
      <button
        className="w-full flex items-center justify-between p-5 font-semibold"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        type="button"
      >
        <span>Assignment Summary</span>

        {/* Added the Chevron icon from Heroicons (takes longer, but no need to install Lucide dependency) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-5 w-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="gap-3 flex flex-col p-5">
          {summaryData.map((item) => (
            <div key={item.title} className="items-start">
              <p>
                - {item.title}: {item.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
