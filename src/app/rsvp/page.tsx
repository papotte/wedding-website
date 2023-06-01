export default function RSVP() {
    return (
        <div className="w-full bg-primary-900" data-theme="alt">
            <div className="page w-3/4 flex gap-6 flex-col">
                <h2 className="text-white">Are You Attending?</h2>
                <p className="text-white/50">
                    Please fill-up the form to notify you that you&apos;re attending. Thanks.
                </p>
                <form
                    className="flex flex-col md:flex-row gap-8 items-end"
                    name="rsvp"
                    data-netlify="true">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <button className="btn btn-accent" type="submit">
                        I am attending
                    </button>
                </form>
            </div>
        </div>
    );
}
