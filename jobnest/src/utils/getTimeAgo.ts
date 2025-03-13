export function getTimeAgo(timeDay  : string|number|Date) {
    const now = new Date();
    const postDate = new Date(timeDay);
    const timeDiff = now.getTime() - postDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
  
    if (daysDiff === 0) {
      return "Today";
    } else if (daysDiff === 1) {
      return "1 day ago";
    } else {
      return `${daysDiff} days ago`;
    }
  }