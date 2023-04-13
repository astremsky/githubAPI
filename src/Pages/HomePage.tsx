import * as React from 'react';
import { useSearchUsersQuery } from '../Store/Github/github.api';

export function HomePage() {
  const {isLoading,isError, data} = useSearchUsersQuery('anton')
  
  return(
    <div>
      <h1>HOME PAGE</h1>
    </div>
  )
}