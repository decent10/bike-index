import React from "react";

type SearchFormProps = {
  value: string;
  onSubmit: (e: React.FormEvent) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchForm = ({
  value,
  onSubmit,
  onSearchChange,
}: SearchFormProps) => {
  return (
    <form className=" w-full lg:w-1/2" onSubmit={onSubmit}>
      <label
        htmlFor="bike-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="bike-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-pink-300 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
          placeholder="Search Cities..."
          value={value}
          onChange={onSearchChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};
