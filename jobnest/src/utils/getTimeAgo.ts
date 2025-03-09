export function getTimeAgo(posted_at : {posted_at : string}) {
    const now = new Date();
    const postDate = new Date(posted_at);
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