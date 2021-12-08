import React from 'react'

import person from './Person'

const Icons = {
  person,
}

function Icon({name, ...props}) {
  const IconComponent = Icons[name];

  return <IconComponent {...props} />
}

export default Icon

