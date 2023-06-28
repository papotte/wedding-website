import { useTranslations } from 'next-intl';

export default function RSVP() {
    const t = useTranslations('RSVP');

    return (
        <div className="w-full">
            <div className="page w-3/4 flex gap-6 flex-col">
                <h2 className="text-title">{t('title')}</h2>
                <p className="text-subtitle w-1/2 text-center">{t('description')}</p>
                <form
                    className="flex flex-col md:flex-row gap-8 items-end"
                    name="rsvp"
                    action="/success"
                    method="POST"
                    data-netlify="true">
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
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{t('form.email')}</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder={t('form.email')}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <button className="btn btn-accent" type="submit">
                        {t('form.button')}
                    </button>
                </form>
            </div>
        </div>
    );
}
