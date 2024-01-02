import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      
      <Skeleton className="w-[300px] h-[300px] rounded-full" />
    </div>
  )
}

export default Loading