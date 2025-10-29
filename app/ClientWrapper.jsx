'use client';

import { usePathname, useRouter } from 'next/navigation';
import {useState} from 'react';
import Navigation from './Component/Navigation';
export default function ClientWrapper({ children}) {
    const router = useRouter();
    const pathname = usePathname() || '/';
    const readPath = pathname === '/' ? "NavBars/Home" : pathname.replace('/', '');

    return (
        <div>
            <div className='pt-17 px-[11.42rem] w-screen overflow-y-auto overflow-x-hidden scrollBarDash h-screen  '>
                <div className='w-[96.250001729029575rem] h-screen '> 
                    <Navigation readPath={readPath}/>
                    <div className='mt-[5.196875rem] '>
                        {children}
                    </div>
                    <footer className="text-white between mt-62 pb-26.25  "><h4>2025 Onyx Technologies. All rights reserved.</h4><h4>Privacy and policy </h4></footer>
                </div>
            </div>
        </div>
    );
}
