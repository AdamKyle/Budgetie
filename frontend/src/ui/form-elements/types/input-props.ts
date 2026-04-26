export default interface InputProps {
  id: string;
  label: string;
  name: string;
  type: 'email' | 'password' | 'text';
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
}
