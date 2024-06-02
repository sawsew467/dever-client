import ProfileModule from '@/components/modules/Profile';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Member's Profile | Fu - Dever",
};

interface IProps {
    params: {
        userInfo: string;
    }
}

function Profile({params}: IProps) {
    return (
        <ProfileModule userInfo={params.userInfo}/>
    )
}

export default Profile
