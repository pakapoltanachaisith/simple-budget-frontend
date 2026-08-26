interface InputErrorProps {
  message?: string | null;
}

export default function InputError({ message }: InputErrorProps) {
  if (!message) return null;

  return (
    <span className="text-xs font-extralight text-red-500 font-mono">
      {message}
    </span>
  );
}
