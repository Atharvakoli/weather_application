import { useEffect, useState } from "react";

const Timer = ({ loading, error, message, onClose }) => {
  const [remainingTime, setRemainingTime] = useState(4000);
  const progress = (remainingTime / 4000) * 100;
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 100) {
          clearInterval(timer);
          onClose();
          return 0;
        }
        return prevTime - 100;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="fixed top-4 right-4 w-64 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <p className="text-gray-800">{message}</p>
        </div>
        <div
          className="h-1 bg-blue-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
        <p className={`${!error ? "block" : "none"}text-red-600`}>{error}</p>
        <span className={`${!loading ? "block" : "none"} flex items-center`}>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default Timer;
