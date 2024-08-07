export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-between p-24 h-screen">
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.009 8.009 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.321-1.569-9.899-4.099z"
        ></path>
      </svg>
    </main>
  );
}