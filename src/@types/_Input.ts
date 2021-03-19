import { InputHTMLAttributes } from 'react';

export default interface _Input extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
