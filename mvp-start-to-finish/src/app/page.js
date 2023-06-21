import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NavBar from '@/components/Utilities/NavBar';
const HorizontalCityGallary = dynamic(() => import('../components/Utilities/HorizontalCityGallary'), { ssr: false });
// const NavBar = dynamic(() => import('../components/Utilities/NavBar'), { ssr: false });

export default function Home() {

    return (
     <main >
        <HorizontalCityGallary />
     </main>
    );
}

