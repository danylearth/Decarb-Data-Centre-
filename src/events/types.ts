export interface Speaker {
  name: string;
  title: string;
  linkedin: string;
}

export interface FeaturedSpeaker extends Speaker {
  img?: string;
  initials?: string;
  pos?: string;
}

export interface Session {
  time: string;
  title: string;
  type?: 'break' | 'tba' | 'closing';
  subtitle?: string;
  speakers?: string[];
}

export interface ScheduleDay {
  label: string;
  date: string;
  subtitle?: string;
  sessions: Session[];
}

export interface Theme {
  title: string;
  description: string;
}

export interface TicketLink {
  label: string;
  sublabel: string;
  url: string;
}

export interface EventConfig {
  slug: string;
  title: string;
  titleHtml: string;
  dateBadge: string;
  tagline: string;
  pageTitle: string;
  ticketModalText: string;
  ticketLinks: TicketLink[];
  featuredSpeakers: FeaturedSpeaker[];
  speakers: Speaker[];
  schedule?: ScheduleDay[];
  themes?: Theme[];
  whyAttend: string[];
  whoShouldAttend: string[];
  partners: { name: string; url: string }[];
  signupDescription: string;
  email: {
    fromName: string;
    notificationHeading: string;
    welcomeTitle: string;
    welcomeSubject: string;
    welcomeBody: string;
    eventBoxName: string;
    eventBoxDate: string;
    ticketUrl: string;
  };
}
