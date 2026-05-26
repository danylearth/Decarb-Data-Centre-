import dataCenterSummit from './data-center-summit';
import climateWeekKickoff from './climate-week-kickoff';
import aiTechSummit from './ai-tech-summit';
import type { EventConfig } from './types';

export type { EventConfig } from './types';

const events: EventConfig[] = [
  dataCenterSummit,
  aiTechSummit,
  climateWeekKickoff,
];

const eventsBySlug = new Map(events.map(e => [e.slug, e]));

export function getEventBySlug(slug: string): EventConfig | undefined {
  return eventsBySlug.get(slug);
}

export function getAllEvents(): EventConfig[] {
  return events;
}
