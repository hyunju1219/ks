import { css } from '@emotion/react';

export const FormContainer = css`
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const Form = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormRow = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const FormGroup = css`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = css`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Input = css`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 2px rgba(0, 86, 179, 0.2);
  }
`;

export const Textarea = css`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 2px rgba(0, 86, 179, 0.2);
  }
`;

export const FormPrivacy = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Checkbox = css`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`;

export const PrivacyLabel = css`
  font-size: 0.875rem;
  color: #4b5563;
  cursor: pointer;
`;

export const SubmitButton = css`
  background-color: #0056b3;
  color: white;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #003d81;
  }
  
  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;
