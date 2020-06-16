export class WorldTime {
    abbreviation: string;
    client_ip: string;
    datetime: string;
    day_of_week: number;
    day_of_year: number;
    dst: boolean;
    dst_from: Date;
    dst_offset: number;
    dst_until: Date;
    raw_offset: number;
    timezone: string;
    unixtime: number;
    utc_datetime: Date;
    utc_offset: string;
    week_number: number;

    constructor(abbreviation:string,datetime:string){
        this.abbreviation=abbreviation; 
        this.datetime=datetime;
    }
}

