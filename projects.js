const tools = {
  clang: document.querySelectorAll(".c"),
  js: document.querySelectorAll(".js"),
  node: document.querySelectorAll(".node"),
  css: document.querySelectorAll(".css")
};

function getSelectedTags() {
  const checkboxes = document.querySelectorAll('.tag-filter:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

function updateURL(tags) {
  const params = new URLSearchParams();

  if (tags.length > 0) {
    params.set("tags", tags.join(","));
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}

document.querySelectorAll('.tag-filter').forEach(cb => {
  cb.addEventListener("change", () => {
    const tags = getSelectedTags();
    updateURL(tags);
    filterProjects(tags);
  });
});

function filterProjects(tags) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const cardTags = card.dataset.tags.split(",");

    const matches = tags.length === 0 || tags.every(tag => cardTags.includes(tag));

    card.classList.toggle("hidden", !matches);
  });
}

function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  const tags = params.get("tags");

  if (!tags) return;

  const tagArray = tags.split(",");

  document.querySelectorAll('.tag-filter').forEach(cb => {
    cb.checked = tagArray.includes(cb.value);
  });

  filterProjects(tagArray);
}

loadFromURL();