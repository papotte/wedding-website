
'use client';
 
import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { getDictionary, Locale,Dictionary } from '@i18n';

const useDictionary = () => {
    let { lang } = useParams();
    const [dictionary, setDictionary] = useState<Dictionary>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchDictionary() {
          try {
            setLoading(true);
            const response = await getDictionary(lang as Locale)
    
            setDictionary(response);
          } catch (error) {
            setLoading(false);
          }
        }
    
        fetchDictionary();
      }, [lang]);
    
      return [dictionary, loading];
};

export { useDictionary };
