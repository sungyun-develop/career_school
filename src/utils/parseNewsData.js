export function parseNewsData(data) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");
  const newsList = doc.querySelectorAll(".list_body > ul > li");
  const newsData = [];
  for (const item of newsList) {
    const titleEl = item.querySelector(".list_tit a");
    const summaryEl = item.querySelector(".list_summary");
    const link = titleEl.getAttribute("href");
    const title = titleEl.textContent.trim();
    const summary = summaryEl ? summaryEl.textContent.trim() : "";
    if (link && title) {
      newsData.push({
        id: link,
        title: title,
        summary: summary,
        link: link,
      });
    }
  }
  return newsData;
}
