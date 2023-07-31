type LoadingProps = {
  size?: 'sm' | 'md',
}

export function Loading({ size = 'md' }: LoadingProps) {
  return (
    <div className={`inline-block ${size === 'sm' ? 'h-6 w-6' : 'h-10 w-10'} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}>
    </div>
  )
}