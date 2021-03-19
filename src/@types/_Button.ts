import { ButtonHTMLAttributes } from 'react';

export default interface _Button
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string;
  isLoading?: boolean;
  backgroundColor?: string;
  textColor?: string;
}
