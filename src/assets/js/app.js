(() => {
  window.addEventListener("load", function () {
    let html = document.querySelector("html");
    let searchTextBox = document.getElementById("search-box");
    let searchBtn = document.getElementById("search-btn");
    let searchCloseBtn = document.getElementById("btn-search-close");

    function toggleSearch(e) {
      e.preventDefault();
      searchTextBox.classList.toggle("hidden");
      document.body.classList.toggle("overflow-hidden");
      bindSearch();
      if (
        document.querySelector("body").classList.contains("overflow-hidden") ===
        false
      ) {
        searchBtn.focus();
      }
    }

    document
      .querySelector("#mode-toggle")
      .addEventListener("click", function (e) {
        e.preventDefault();
        html.classList.toggle("dark");
        localStorage.theme = localStorage?.theme === "dark" ? "light" : "dark";
      });

    searchBtn.addEventListener("click", toggleSearch);
    searchCloseBtn.addEventListener("click", toggleSearch);

    document.addEventListener("keydown", function (event) {
      if (
        event.key.toLowerCase() === "escape" &&
        ![...searchTextBox.classList].includes("hidden")
      ) {
        toggleSearch(event);
      }
    });

    if (window.IntersectionObserver) {
      if (document.querySelector("nav.toc")) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if (entry.intersectionRatio > 0) {
              document
                .querySelector(`nav.toc ol li a[href="#${id}"]`)
                .classList.add("active");
            } else {
              document
                .querySelector(`nav.toc ol li a[href="#${id}"]`)
                .classList.remove("active");
            }
          });
        });

        // Track all sections that have an `id` applied
        document
          .querySelectorAll(".post-content .direct-link")
          .forEach((section) => {
            observer.observe(section.parentElement, { rootMargin: "0px" });
          });
      }
    } else {
      console.error(
        "ActiveToc cannot run on this device because the Intersection Observer API is not supported."
      );
    }
  });

  function bindSearch() {
    if (!document.querySelector(".search-root")) {
      const emptyRow =
        '<div class="flex items-center bg-blue text-white text-sm px-4 py-3 mt-8" role="alert"><p>No results found matching <strong>{{query}}</strong>.</p></div>';
      const results =
        '<section class="section-{{ objectID }} w-full "><a href="{{ url }}" class="w-full py-8 flex items-center leading-normal border-b border-gray-200"><div class="flex-1"><div class="text-xs uppercase flex font-normal items-center"><span>{{publish_date}}</span></div><h2 class="font-medium text-xl lg:text-2xl">{{{_highlightResult.title.value}}}</h2><p>{{{_highlightResult.excerpt.value}}}</p></div></a></section>';

      const searchClient = algoliasearch(
        "S28APXVTR0",
        "e250f019d187591d786f11ff429e33e4"
      );

      const search = instantsearch({
        indexName: "dev_learnwithgurpreet",
        searchClient,
        searchFunction: function (e) {
          var t = document.getElementById("hits");
          "" !== e.state.query
            ? (e.search(), t.classList.remove("hidden"))
            : t.classList.add("hidden");
        },
      });

      search.addWidgets([
        instantsearch.widgets.searchBox({
          container: "#searchbox",
          placeholder: "Type to search",
          showSubmit: !1,
          showReset: !0,
          cssClasses: {
            root: "search-root",
            form: "form",
            input:
              "search-input font-medium text-xl md:text-2xl appearance-none focus:outline-none bg-transparent w-full focus:outline-0",
            submit: "btn btn-default",
            reset: "btn btn-default",
          },
        }),

        instantsearch.widgets.hits({
          container: "#hits",
          templates: { empty: emptyRow, item: results },
          transformItems: (e) => {
            return e.map(
              (e) => (
                (e.publish_date = new Date(e.date_published)
                  .toISOString()
                  .slice(0, 10)),
                e
              )
            );
          },
        }),
      ]);

      search.start();
    }
    setTimeout(() => {
      document.querySelector(".search-input").focus();
    }, 100);
  }
})();
