'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useTranslations } from 'next-intl';

export default function RSVP() {
    const formId: string = process.env.NEXT_PUBLIC_FORM_ID || 'YOUR_FORM_ID';

    const [state, handleSubmit] = useForm(formId);

    const t = useTranslations('RSVP');
    if (state.succeeded) {
        return (
            <div className="w-full">
                <div className="page w-3/4 flex gap-6 flex-col">
                    <h5>{t('success')}</h5>
                </div>
            </div>
        );
    }
    return (
        <div className="w-full">
            <div className="page w-3/4 flex gap-6 flex-col">
                <h2 className="text-title">{t('title')}</h2>
                <p className="text-subtitle w-1/2 text-center">{t('description')}</p>
                <form
                    className="flex flex-col md:flex-row gap-8 items-end"
                    name="rsvp"
                    onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="rsvp" />

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{t('form.name')}</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('form.name')}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{t('form.email')}</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder={t('form.email')}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <button className="btn btn-accent" type="submit" disabled={state.submitting}>
                        {t('form.button')}
                    </button>
                    <ValidationError errors={state.errors} />
                </form>
            </div>
        </div>
    );
}
