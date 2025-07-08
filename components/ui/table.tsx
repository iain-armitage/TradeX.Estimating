export function Table({ children }: { children: React.ReactNode }) {
  return <table className="w-full border-collapse">{children}</table>;
}

export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100">{children}</thead>;
}

export function TableRow({ children, ...props }: any) {
  return <tr {...props} className="border-t">{children}</tr>;
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="text-left px-3 py-2">{children}</th>;
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2">{children}</td>;
}