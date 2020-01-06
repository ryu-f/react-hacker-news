import * as React from 'react'

interface Props extends React.SVGAttributes<SVGElement> {
  id: string
}

export const SvgIcons: React.FC<Props> = props => {
  const { id } = props

  return (
    <svg {...props}>
      <use xlinkHref={`img/icon/icons.svg#${id}`}></use>
    </svg>
  )
}
