import AllMemberModule from '@/components/modules/AllMember';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "All Member | Fu - Dever",
  };
  
function AllMember() {
    return <AllMemberModule/>
}

export default AllMember
