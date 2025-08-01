export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>;
}