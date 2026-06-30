/* ============================================================
   boomer-tutor-app.js
   Boomer Tutor — Application Logic
   Depends on: tutorials.js (must load first)
   ============================================================ */

(function () {
  "use strict";

  /* ------ Card accent colors per tutorial index ------ */
  const CARD_STYLES = [
    { accent: "#3a7bd5", iconBg: "#e6f1fb" }, // blue
    { accent: "#1d9e75", iconBg: "#e1f5ee" }, // teal
    { accent: "#bf7a0e", iconBg: "#faeeda" }, // amber
    { accent: "#c44b7a", iconBg: "#fbeaf0" }, // pink
    { accent: "#534ab7", iconBg: "#eeedfe" }, // purple
    { accent: "#d85a30", iconBg: "#faece7" }, // coral
    { accent: "#639922", iconBg: "#eaf3de" }, // green
    { accent: "#185fa5", iconBg: "#e6f1fb" }, // deep blue
  ];

  const DIFFICULTY_LABELS = {
    easy:   { label: "Easy",          cls: "bt-badge-easy"   },
    medium: { label: "A bit tricky",  cls: "bt-badge-medium" },
    tricky: { label: "Take your time",cls: "bt-badge-tricky" },
  };

  /* ------ DOM refs ------ */
  const grid        = document.getElementById("bt-grid");
  const detailPanel = document.getElementById("bt-detail");
  const detailBody  = document.getElementById("bt-detail-content");
  const searchInput = document.getElementById("bt-search");
  const clearBtn    = document.getElementById("bt-clear");
  const countEl     = document.getElementById("bt-count");
  const backBtn     = document.getElementById("bt-back");

  /* ------ State ------ */
  let currentQuery = "";

  /* ------ Helpers ------ */
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getStyle(index) {
    return CARD_STYLES[index % CARD_STYLES.length];
  }

  function getDifficultyInfo(d) {
    return DIFFICULTY_LABELS[d] || DIFFICULTY_LABELS.easy;
  }

  /* ------ Render tutorial grid ------ */
  function renderGrid(tutorials) {
    grid.innerHTML = "";

    if (tutorials.length === 0) {
      grid.innerHTML = `
        <li class="bt-empty" role="listitem">
          <div class="bt-empty-icon">🔍</div>
          <h3>No tutorials found</h3>
          <p>Try searching for something like "Wi-Fi", "Bluetooth", or "password".</p>
        </li>`;
      return;
    }

    tutorials.forEach(function (tutorial, i) {
      const style = getStyle(i);
      const diff  = getDifficultyInfo(tutorial.difficulty);
      const card  = document.createElement("li");
      card.className = "bt-card";
      card.setAttribute("role", "listitem");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", "Open tutorial: " + tutorial.title);
      card.style.setProperty("--bt-card-accent",  style.accent);
      card.style.setProperty("--bt-card-icon-bg", style.iconBg);

      card.innerHTML = `
        <div class="bt-card-top">
          <div class="bt-card-icon" aria-hidden="true">${escapeHtml(tutorial.icon)}</div>
          <div class="bt-card-title">${escapeHtml(tutorial.title)}</div>
        </div>
        <div class="bt-card-desc">${escapeHtml(tutorial.desc)}</div>
        <div class="bt-card-footer">
          <span class="bt-badge ${diff.cls}">${escapeHtml(diff.label)}</span>
          <span class="bt-card-steps">${tutorial.steps.length} steps</span>
        </div>
        <span class="bt-card-arrow" aria-hidden="true">›</span>`;

      card.addEventListener("click", function () { showDetail(tutorial.id); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showDetail(tutorial.id);
        }
      });

      grid.appendChild(card);
    });
  }

  /* ------ Update result count line ------ */
  function updateCount(filtered, total) {
    if (currentQuery.trim() === "") {
      countEl.textContent = total + " tutorial" + (total !== 1 ? "s" : "") + " available";
    } else {
      countEl.textContent = filtered + " of " + total + " tutorial" + (total !== 1 ? "s" : "") + " match your search";
    }
  }

  /* ------ Filter & re-render ------ */
  function applyFilter(query) {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? TUTORIALS.filter(function (t) {
          return (
            t.title.toLowerCase().includes(q) ||
            t.desc.toLowerCase().includes(q) ||
            t.steps.some(function (s) {
              return s.title.toLowerCase().includes(q) || s.body.toLowerCase().includes(q);
            })
          );
        })
      : TUTORIALS.slice();

    renderGrid(filtered);
    updateCount(filtered.length, TUTORIALS.length);
    clearBtn.hidden = q === "";
  }

  /* ------ Show detail view ------ */
  function showDetail(id) {
    const tutorial = TUTORIALS.find(function (t) { return t.id === id; });
    if (!tutorial) return;

    const originalIndex = TUTORIALS.indexOf(tutorial);
    const style = getStyle(originalIndex);
    const diff  = getDifficultyInfo(tutorial.difficulty);

    /* Build warning box HTML (optional) */
    const warningHtml = tutorial.warning
      ? `<div class="bt-box bt-warning">
           <div class="bt-box-label">⚠ Watch out for this</div>
           ${escapeHtml(tutorial.warning)}
         </div>`
      : "";

    /* Build steps HTML */
    const stepsHtml = tutorial.steps.map(function (step, i) {
      const isLast = i === tutorial.steps.length - 1;
      return `
        <div class="bt-step${isLast ? "" : ""}">
          <div class="bt-step-wrap" style="display:flex;gap:16px;${isLast ? "" : ""}">
            <div style="display:flex;flex-direction:column;align-items:center;">
              <div class="bt-step-num">${i + 1}</div>
              ${!isLast ? '<div style="flex:1;width:2px;background:var(--bt-gray-200);margin-top:4px;min-height:24px;"></div>' : ""}
            </div>
            <div class="bt-step-body" style="padding-bottom:${isLast ? "0" : "24px"};">
              <div class="bt-step-title">${escapeHtml(step.title)}</div>
              <div class="bt-step-text">${escapeHtml(step.body)}</div>
            </div>
          </div>
        </div>`;
    }).join("");

    detailBody.innerHTML = `
      <div class="bt-detail-hero">
        <div class="bt-detail-icon" style="background:${style.iconBg}" aria-hidden="true">
          ${escapeHtml(tutorial.icon)}
        </div>
        <div class="bt-detail-meta">
          <div class="bt-detail-title">${escapeHtml(tutorial.title)}</div>
          <div class="bt-detail-subline">
            <span class="bt-badge ${diff.cls}">${escapeHtml(diff.label)}</span>
            <span style="color:var(--bt-gray-500);font-size:14px;">${tutorial.steps.length} steps</span>
          </div>
        </div>
      </div>

      <div class="bt-box bt-tip">
        <div class="bt-box-label">💡 Before you start</div>
        ${escapeHtml(tutorial.tip)}
      </div>

      ${warningHtml}

      <div class="bt-steps" role="list" aria-label="Tutorial steps">
        ${stepsHtml}
      </div>

      <div class="bt-success">
        <span class="bt-success-check">✅</span>
        <span>That's it! If something didn't work, go back to Step 1 and try again. It's perfectly fine to repeat the steps — most people need a couple of tries.</span>
      </div>`;

    /* Show detail, hide grid */
    grid.hidden = true;
    document.querySelector(".bt-search-wrap").hidden = true;
    detailPanel.hidden = false;

    /* Scroll to top of app */
    document.getElementById("bt-app").scrollIntoView({ behavior: "smooth", block: "start" });

    /* Focus the back button for keyboard users */
    backBtn.focus();
  }

  /* ------ Go back to grid ------ */
  function showGrid() {
    detailPanel.hidden = true;
    grid.hidden = false;
    document.querySelector(".bt-search-wrap").hidden = false;
    searchInput.focus();
  }

  /* ------ Event listeners ------ */
  searchInput.addEventListener("input", function () {
    currentQuery = searchInput.value;
    applyFilter(currentQuery);
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      searchInput.value = "";
      currentQuery = "";
      applyFilter("");
    }
  });

  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    currentQuery = "";
    applyFilter("");
    searchInput.focus();
  });

  backBtn.addEventListener("click", showGrid);

  /* ------ Initial render ------ */
  applyFilter("");

})();
