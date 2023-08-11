const routes = {
  "/": renderHome,
  "/search": renderResult,
};

window.addEventListener("popstate", (e) => {
  if (routes[location.pathname]) {
    routes[location.pathname]();
    return;
  }
});

const movePage = (url) => {
  const pathName = url.split("?")[0];
  if (routes[pathName]) {
    history.pushState({}, "", url);
    routes[pathName]();
    return;
  }
};

function renderHome() {
  document.querySelector("#app").innerHTML = `
    <h1>영화를 검색해보세요.</h1>
    <form>
      <input type="search" name="query" />
      <button type="button">검색</button>
    </form>
  `;
}

function renderResult() {
  document.querySelector("#app").innerHTML = `
  'search'
  `;
}

renderHome();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  movePage(`/search?query=${e.target.query.value}`);
});
