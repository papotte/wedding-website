import { LocationDetails } from '@models/LocationData';

export interface EventData {
    names: string[];
    title: string;
    initials: string;
    date: string;
    location: LocationDetails;
    email?: string;
}
