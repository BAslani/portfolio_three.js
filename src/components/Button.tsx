type Props = {
  title: string
  isBeam: boolean
  containerClass: string
}

export default function Button({
  containerClass,
  isBeam = false,
  title,
}: Props) {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-ping'></span>
          <span className='btn-ping_dot'></span>
        </span>
      )}
      {title}
    </button>
  )
}
