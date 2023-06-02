'use client';
import React from 'react';

import Image from 'next/image';
import useSWR from 'swr';

import Loader from '@components/Loader';

import styles from './page.module.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Gallery() {
    const { data, error } = useSWR('/api/gallery', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <Loader />;

    return (
        <div className={styles.wrapper}>
            <div className="page w-3/4 flex gap-6 flex-col gap-14 text-center">
                <p className="uppercase text-gray-400 text-sm font-semibold">Our memories</p>
                <h2 className="text-secondary">Galllery</h2>
                <p className="text-gray-500 mt-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.
                </p>
                <div className={styles.photoGrid}>
                    {data.map((item: any) => (
                        <div className={styles.photo} key={item.id}>
                            <Image src={item.path} alt={item.name} width={400} height={400} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
