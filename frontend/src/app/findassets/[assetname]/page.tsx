import React from "react"
export default function Page({ params }: { params: { assetname: string } }) {
    return <div>{params.assetname}</div>
  }