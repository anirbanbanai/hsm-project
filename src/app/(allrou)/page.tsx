'use client'

import { useEffect, useState } from "react";


 function Homes({ children }: { children: React.ReactNode}) {

  const [data, setdata] = useState();
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })
    }, [])
    console.log(data);
  return (
    <main>
      {children}
    </main>
  )
}

export default Homes;