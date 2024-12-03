import React from 'react'

function page({ params }: { params: { assetname: string, assetid: string } }) {
  return (
    <div>The name of the asset is {params.assetname} and the id is {params.assetid}</div>
  )
}

export default page