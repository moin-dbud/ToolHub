/**
 * ActionButton Component
 * 
 * A reusable blue button with white text and white underline animation on hover.
 * Used across all tools for primary actions (Extract, Split, Merge, Download, etc.)
 * 
 * Memoized with React.memo to prevent unnecessary re-renders when parent updates.
 * 
 * Usage:
 * ```tsx
 * <ActionButton
 *   onClick={handleAction}
 *   disabled={isDisabled}
 *   loading={isLoading}
 *   icon={<Download className="w-5 h-5" />}
 *   loadingText="Processing..."
 * >
 *   Download PDF
 * </ActionButton>
 * ```
 */

"use client";

import { ReactNode, memo } from 'react';

interface ActionButtonProps {
  /** Button text/content */
  children: ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is in loading state */
  loading?: boolean;
  /** Icon to display (optional) */
  icon?: ReactNode;
  /** Loading text to show when loading={true} */
  loadingText?: string;
  /** Additional CSS classes */
  className?: string;
  /** Button type (default: button) */
  type?: 'button' | 'submit' | 'reset';
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * ActionButton - Primary action button component
 * 
 * Memoized to prevent re-renders when parent component state changes
 * but button props remain the same.
 */
export const ActionButton = memo(function ActionButton({
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  loadingText = 'Processing...',
  className = '',
  type = 'button',
  fullWidth = false,
}: ActionButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`group relative ${fullWidth ? 'w-full' : ''} px-5 py-2.5 rounded-xl font-bold text-lg transition-all overflow-hidden shadow-lg ${
        isDisabled
          ? 'bg-gray-400 cursor-not-allowed text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl'
      } ${className}`}
    >
      {/* White underline animation */}
      <span className={`absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 transition-transform duration-300 ${
        isDisabled ? '' : 'group-hover:scale-x-100'
      }`}></span>
      
      {/* Button content */}
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
          {loadingText}
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          {icon}
          {children}
        </span>
      )}
    </button>
  );
});

export default ActionButton;
