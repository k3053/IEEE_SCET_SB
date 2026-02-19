// ================= DATE HELPER =================

// Safely convert string to Date
const parseDate = (dateString) => {
  return new Date(dateString);
};

// Get today's date (without time for clean comparison)
const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

// ================= UPCOMING EVENTS =================

export const getUpcomingEvents = (events) => {
  const today = getToday();

  return events
    .filter((event) => parseDate(event.date) >= today)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
};

// ================= PAST EVENTS =================

export const getPastEvents = (events) => {
  const today = getToday();

  return events
    .filter((event) => parseDate(event.date) < today)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
};

// ================= ALL HIGHLIGHT EVENTS (PAST + PRESENT + FUTURE) =================

export const getHighlightEvents = (events) => {
  return events
    .filter((event) => event.isHighlight)
    .sort((a, b) => {
      // First: sort by highlight priority
      const priorityDiff =
        (a.highlightPriority ?? 999) -
        (b.highlightPriority ?? 999);

      if (priorityDiff !== 0) return priorityDiff;

      // If same priority → newest first
      return parseDate(b.date) - parseDate(a.date);
    });
};

// ================= UPCOMING HIGHLIGHTS ONLY =================

export const getUpcomingHighlightEvents = (events) => {
  const today = getToday();

  return events
    .filter(
      (event) =>
        event.isHighlight &&
        parseDate(event.date) >= today
    )
    .sort((a, b) => {
      const priorityDiff =
        (a.highlightPriority ?? 999) -
        (b.highlightPriority ?? 999);

      if (priorityDiff !== 0) return priorityDiff;

      return parseDate(a.date) - parseDate(b.date);
    });
};

// ================= FILTER BY SECTION =================

export const getEventsBySection = (events, section) => {
  return events.filter(
    (event) =>
      event.section?.toLowerCase() === section.toLowerCase()
  );
};

// ================= GET SINGLE EVENT BY ID =================

export const getEventById = (events, id) => {
  return events.find((event) => event.id === Number(id));
};
