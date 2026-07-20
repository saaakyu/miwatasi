const members = [
  {
    id: "m01",
    name: "春香",
    role: "部長",
    note: "チーム全体の経験バランスを見たい。",
    strengths: ["組織設計", "育成", "顧客調整"],
    wants: ["次世代リーダー育成"],
    x: 82,
    y: 68,
    color: "#39b8d4",
  },
  {
    id: "m02",
    name: "蒼太",
    role: "チームリーダー",
    note: "アサイン理由を説明しやすくしたい。",
    strengths: ["要件定義", "進行管理", "レビュー"],
    wants: ["権限移譲", "育成設計"],
    x: 76,
    y: 72,
    color: "#38c172",
  },
  {
    id: "m03",
    name: "美奈",
    role: "チームリーダー補佐",
    note: "メンバーの挑戦を近くで支えたい。",
    strengths: ["設計", "実装", "伴走支援"],
    wants: ["顧客折衝", "リード経験"],
    x: 68,
    y: 78,
    color: "#78d64b",
  },
  {
    id: "m04",
    name: "蓮",
    role: "メンバー",
    note: "新しい技術にも挑戦したい。",
    strengths: ["フロントエンド", "UI実装"],
    wants: ["要件定義", "設計"],
    x: 46,
    y: 84,
    color: "#31c7eb",
  },
  {
    id: "m05",
    name: "結衣",
    role: "メンバー",
    note: "ユーザーに近い仕事を増やしたい。",
    strengths: ["QA", "仕様確認", "ドキュメント"],
    wants: ["顧客折衝", "改善提案"],
    x: 52,
    y: 70,
    color: "#f7b955",
  },
  {
    id: "m06",
    name: "大和",
    role: "メンバー",
    note: "安定して実装を進めたい。",
    strengths: ["バックエンド", "API", "テスト"],
    wants: ["レビュー", "設計"],
    x: 64,
    y: 42,
    color: "#6aa6ff",
  },
  {
    id: "m07",
    name: "陽菜",
    role: "メンバー",
    note: "少しずつリードに挑戦したい。",
    strengths: ["デザイン連携", "UI改善", "調整"],
    wants: ["進行管理", "リーダー補佐"],
    x: 58,
    y: 76,
    color: "#ff8dc7",
  },
  {
    id: "m08",
    name: "海斗",
    role: "メンバー",
    note: "まずは基礎を固めたい。",
    strengths: ["実装補助", "テスト", "調査"],
    wants: ["実装自走", "レビュー対応"],
    x: 28,
    y: 58,
    color: "#9bdb68",
  },
];

const projects = [
  {
    id: "p01",
    name: "顧客ポータル改善",
    term: "2026-04〜05",
    lead: "蒼太",
    tags: ["要件定義", "UI改善", "顧客折衝"],
  },
  {
    id: "p02",
    name: "社内管理API刷新",
    term: "2026-05〜06",
    lead: "美奈",
    tags: ["API設計", "テスト", "設計"],
  },
  {
    id: "p03",
    name: "新規オンボーディング画面",
    term: "2026-06",
    lead: "陽菜",
    tags: ["UI実装", "デザイン連携", "リリース"],
  },
  {
    id: "p04",
    name: "障害対応と再発防止",
    term: "2026-06〜07",
    lead: "蒼太",
    tags: ["障害対応", "調査", "顧客報告"],
  },
  {
    id: "p05",
    name: "次期提案プロトタイプ",
    term: "2026-07",
    lead: "春香",
    tags: ["提案", "要件整理", "UI検討"],
  },
];

const axes = [
  { label: "経験と挑戦", x: "経験の広さ", y: "挑戦意欲" },
  { label: "自走と伴走", x: "自走度", y: "サポート必要度" },
  { label: "技術と顧客", x: "技術寄り", y: "顧客・業務寄り" },
  { label: "成長と負荷", x: "最近の成長量", y: "現在の負荷感" },
];

let currentUser = members[1];
let currentAxis = axes[0];

const $ = (selector) => document.querySelector(selector);
const memberSelect = $("#memberSelect");
const projectSelect = $("#projectSelect");
const teamMap = $("#teamMap");
const profileSheet = $("#profileSheet");

function initials(name) {
  return name.slice(0, 1);
}

function renderLogin() {
  memberSelect.innerHTML = members
    .map((m) => `<option value="${m.id}">${m.name} / ${m.role}</option>`)
    .join("");
  memberSelect.value = currentUser.id;
}

function renderProjects() {
  $("#projectStrip").innerHTML = projects
    .map(
      (p) => `
    <article class="project-card glass-card">
      <span>${p.term}</span><strong>${p.name}</strong><p>主担当: ${p.lead}</p>
      <div class="tags">${p.tags.map((tag) => `<i>${tag}</i>`).join("")}</div>
    </article>
  `,
    )
    .join("");
  projectSelect.innerHTML = projects
    .map((p) => `<option value="${p.id}">${p.name}</option>`)
    .join("");
}

function renderInsights() {
  $("#insightList").innerHTML = [
    "蓮さんはUI実装から要件整理へ挑戦したい状態です。",
    "蒼太さんに要件定義と障害対応が集中しています。",
    "海斗さんは基礎固めをしながらレビュー対応へ広げたい段階です。",
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderAxisSwitch() {
  $("#axisSwitch").innerHTML = axes
    .map(
      (axis) =>
        `<button class="axis-chip ${axis.label === currentAxis.label ? "active" : ""}" type="button">${axis.label}</button>`,
    )
    .join("");
  document.querySelectorAll(".axis-chip").forEach((button, index) =>
    button.addEventListener("click", () => {
      currentAxis = axes[index];
      renderAxisSwitch();
      renderMap();
    }),
  );
}

function renderMap() {
  teamMap.querySelector(".axis-label.x.low").textContent =
    currentAxis.x + " 低";
  teamMap.querySelector(".axis-label.x.high").textContent =
    currentAxis.x + " 高";
  teamMap.querySelector(".axis-label.y.high").textContent =
    currentAxis.y + " 高";
  teamMap.querySelector(".axis-label.y.low").textContent =
    currentAxis.y + " 低";
  teamMap.querySelectorAll(".member-dot").forEach((node) => node.remove());
  members.forEach((m) => {
    const button = document.createElement("button");
    button.className = `member-dot ${m.id === currentUser.id ? "me" : ""}`;
    button.style.left = `${m.x}%`;
    button.style.bottom = `${m.y}%`;
    button.style.setProperty("--dot", m.color);
    button.type = "button";
    button.innerHTML = `<span>${initials(m.name)}</span><small>${m.name}</small>`;
    button.addEventListener("click", () => openProfile(m));
    teamMap.appendChild(button);
  });
}

function renderMembers() {
  $("#memberList").innerHTML = members
    .map(
      (m) => `
    <article class="member-card" style="--dot:${m.color}">
      <button type="button" class="member-open" data-member="${m.id}">
        <span class="member-avatar">${initials(m.name)}</span>
        <span><strong>${m.name}</strong><em>${m.role}</em></span>
      </button>
      <p>${m.note}</p>
      <div class="tags">${[...m.strengths, ...m.wants.slice(0, 1)].map((tag) => `<i>${tag}</i>`).join("")}</div>
    </article>
  `,
    )
    .join("");
  document
    .querySelectorAll(".member-open")
    .forEach((button) =>
      button.addEventListener("click", () =>
        openProfile(members.find((m) => m.id === button.dataset.member)),
      ),
    );
}

function renderSkills() {
  const tags = [
    "要件定義",
    "UI実装",
    "設計",
    "顧客折衝",
    "レビュー",
    "API",
    "進行管理",
    "リーダー補佐",
  ];
  $("#skillChips").innerHTML = tags
    .map(
      (tag) =>
        `<label class="skill-chip"><input type="checkbox" value="${tag}"><span>${tag}</span></label>`,
    )
    .join("");
}

function openProfile(member) {
  $("#profileContent").innerHTML = `
    <header class="profile-header" style="--dot:${member.color}">
      <span class="member-avatar large">${initials(member.name)}</span>
      <div><p class="eyebrow">${member.role}</p><h2 id="profileName">${member.name}</h2><p>${member.note}</p></div>
    </header>
    <section><h3>得意なこと</h3><div class="tags">${member.strengths.map((tag) => `<i>${tag}</i>`).join("")}</div></section>
    <section><h3>これから</h3><div class="tags hope">${member.wants.map((tag) => `<i>${tag}</i>`).join("")}</div></section>
    <section><h3>直近ログ</h3><p>${projects.find((p) => p.lead === member.name)?.name || "直近案件に参加"}で経験を更新しました。</p></section>
    <button class="primary-button wide" type="button">一言を送る</button>
  `;
  profileSheet.showModal();
}

function showScreen(name) {
  document
    .querySelectorAll(".screen")
    .forEach((screen) => screen.classList.remove("active"));
  $(`#${name}Screen`).classList.add("active");
  document
    .querySelectorAll(".nav-item")
    .forEach((item) =>
      item.classList.toggle("active", item.dataset.screen === name),
    );
  $("#screenTitle").textContent = {
    home: "ホーム",
    map: "マップ",
    reflect: "ふりかえり",
    members: "メンバー",
  }[name];
}

$("#startButton").addEventListener("click", () => {
  currentUser = members.find((m) => m.id === memberSelect.value);
  $("#loginView").classList.add("is-hidden");
  $("#appView").classList.remove("is-hidden");
  $("#meButton").textContent = initials(currentUser.name);
  $("#roleLabel").textContent = `${currentUser.name} / ${currentUser.role}`;
  renderMap();
});

$("#meButton").addEventListener("click", () => openProfile(currentUser));
$("#closeProfile").addEventListener("click", () => profileSheet.close());
document
  .querySelectorAll(".nav-item")
  .forEach((item) =>
    item.addEventListener("click", () => showScreen(item.dataset.screen)),
  );
$("#reflectionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  $("#formMessage").textContent =
    "ふりかえりを保存しました。プロフィールとチームマップに反映されます。";
});

renderLogin();
renderProjects();
renderInsights();
renderAxisSwitch();
renderMap();
renderMembers();
renderSkills();
