import { EventDetails } from '@models/EventDetails';
import { LocationDetails } from '@models/LocationData';

export interface EventData {
    names: string[];
    title: string;
    initials: string;
    date: string;
    events: EventDetails;
    location: LocationDetails;
    email?: string;
}
