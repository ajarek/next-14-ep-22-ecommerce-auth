import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="w-full h-screen mx-auto">
      
      <Skeleton className="w-[300px] h-[200px] rounded-full" />
    </div>
  )
}

export default Loading