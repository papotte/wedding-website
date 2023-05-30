import { HeartFilledIcon } from '@radix-ui/react-icons';
import { eventData } from '@utils/eventData';

import Image from 'next/image';
import styles from './page.module.scss';

const Main = () => {
    const date = new Date(eventData.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
    return (
        <div className="page gap-14 text-center">
            <div className="flex flex-col gap-3">
                <h2 className="text-secondary">Hello!</h2>
                <h3 className="text-black">
                    {formattedDate} - {eventData.location.city}
                </h3>
                <p className="text-gray-500">We invite you to celebrate our wedding</p>
            </div>
            <div className={`flex flex-row gap-5 ${styles.coupleWrap}`}>
                <div className={styles.spouse}>
                    <div className={styles.desc}>
                        <Image src="/images/groom.jpg" alt="spouse 1" width={150} height={150} />
                        <h5>Joefrey Mahusay</h5>
                        <legend>
                            Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove
                        </legend>
                    </div>
                </div>
                <p className={styles.pictures}>
                    <Image src="/images/groom.jpg" alt="spouse 1" width={150} height={150} />
                    <i className={`animate-pulse ${styles.heart}`}>
                        <HeartFilledIcon />
                    </i>
                    <Image src="/images/bride.jpg" alt="spouse 2" width={150} height={150} />
                </p>
                <div className={styles.spouse}>
                    <div className={styles.desc}>
                        <Image src="/images/bride.jpg" alt="spouse 2" width={150} height={150} />
                        <h5>Sheila Mahusay</h5>
                        <legend>
                            Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove
                        </legend>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Main;
