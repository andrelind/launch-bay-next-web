import { FC } from 'react';

type Props = {
  label: string;
  onClick?: () => void;
};

export const TagComponent: FC<Props> = ({ label, onClick }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 mr-1 ${
      onClick && 'cursor-pointer'
    }`}
    onClick={onClick}
  >
    {label}
  </span>
);
