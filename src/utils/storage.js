const KEY = "continueWatching";

export const getContinueWatching = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
};

export const addToContinueWatching = (video) => {
  const current = getContinueWatching().filter((v) => v.id !== video.id);
  const updated = [video, ...current];
  localStorage.setItem(KEY, JSON.stringify(updated));
};

/** Remove any videos whose id is not in the supplied Set */
export const sanitizeContinueList = (validIdSet) => {
  const list = getContinueWatching();
  const cleaned = list.filter((v) => validIdSet.has(v.id));
  if (cleaned.length !== list.length) {
    localStorage.setItem(KEY, JSON.stringify(cleaned)); // keep storage tidy
  }
  return cleaned;
};

// append to existing helpers
export const removeFromContinueWatching = (id) => {
  const list = getContinueWatching();
  const updated = list.filter((v) => v.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};


