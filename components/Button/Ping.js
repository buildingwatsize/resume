
export default () => {
  return (
    <span className="inline-flex w-2 h-2 relative">
      <span className="absolute rounded-full w-full h-full bg-danger animate-ping opacity-75" />
      <span className="relative rounded-full w-full h-full bg-danger" />
    </span>
  )
}
