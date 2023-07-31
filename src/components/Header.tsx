interface HeaderProps {
  title: string,
}

export function Header({ title }: HeaderProps) {
  return (
    <h1 className="mt-10 mb-16 text-center text-4xl text-gray-50">
      {title}
    </h1>
  )
}