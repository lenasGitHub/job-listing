export interface Job {
    id: number;
    title: string;
    is_top: boolean;
    uri: string;
    skills: string[];
    location: Location;
    career_level: string[]
}

interface Location {
    city: string;
    country: string;
  }

export interface JobCardProps {
    job: Job;
}

export interface Salary {
    min: string;
    max: string;
}


interface JobDescription {
    uuid:                string;
    title:               string;
    company_uuid:        string;
    url:                 string;
    is_top:              boolean;
    gpa:                 number;
    years_of_experience: number[];
    willing_to_travel:   boolean;
    willing_to_relocate: boolean;
    owns_a_car:          boolean;
    visa_sponsorship:    boolean;
    salary:              Salary;
    gender:              string;
    description:         string;
    requirements:        string;
    translations:        any[];
    skills:              string[];
    uri:                 string;
    posted_at:           Date;
    score:               number;
    is_applied:          boolean;
    applied_at:          null;
    outside:             boolean;
    has_profile:         boolean;
    outside_key:         null;
    job_type:            string[];
    degree:              string[];
    industry:            string[];
    major:               string[];
    nationality:         string[];
    career_level:        string[];
    languages:           any[];
    location:            Location;
    category:            string[];
}

export interface JobDescriptionProps {
    data: JobDescription;
}