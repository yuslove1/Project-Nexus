// components/ErrorMessage.tsx
import React from 'react';

interface ErrorMessageProps {
  message: string;
  type?: 'error' | 'warning' | 'info'; // Optional type for different styling
  className?: string; // Optional custom class
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message, 
  type = 'error', 
  className = '' 
}) => {
  if (!message) return null;

  // Define color schemes based on type
  const typeStyles = {
    error: 'bg-red-50 border-red-300 text-red-700',
    warning: 'bg-yellow-50 border-yellow-300 text-yellow-700',
    info: 'bg-blue-50 border-blue-300 text-blue-700',
  };

  return (
    <div 
      className={`p-4 mb-4 border rounded-md ${typeStyles[type]} ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="flex items-center">
        <svg 
          className="w-5 h-5 mr-3" 
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
            clipRule="evenodd" 
          />
        </svg>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;