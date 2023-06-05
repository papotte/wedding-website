import React from 'react';

import { useTranslations } from 'next-intl';

export const ExpiredNotice = () => {
    const t = useTranslations('countdown');

    return (
        <div className="expired-notice">
            <span>{t('expired')}</span>
            <p>{t('subtitle')}</p>
        </div>
    );
};
