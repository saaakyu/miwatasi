const logs = [
  "顧客ポータル改善で要件定義とUI改善を担当",
  "社内管理API刷新で設計レビューに参加",
  "新規オンボーディング画面でUI実装を担当",
  "障害対応と再発防止で調査と顧客報告を実施",
  "次期提案プロトタイプで提案資料の構成を検討",
];

const members = [
  {
    id: "m01",
    name: "山田 花子",
    role: "部長",
    icon: "花",
    avatarImage: "",
    headerImage: "",
    header: "経験を次の提案につなげる",
    note: "チーム全体の経験バランスを見たい。",
    strengths: ["情報設計", "営業資料", "プレゼンテーション"],
    interests: ["新規サービス", "事業開発"],
    next: "新規サービスの提案資料を、企画段階から担当したい",
    capacity: "少し余裕あり",
    growth: ["サービスデザイン"],
    technical: ["Figma", "Notion", "生成AI活用"],
    updated: "2026-07-18",
    logs,
    x: 82,
    y: 68,
    color: "#39b8d4",
  },
  {
    id: "m02",
    name: "佐藤 蒼太",
    role: "チームリーダー",
    icon: "蒼",
    avatarImage: "",
    headerImage: "",
    header: "アサイン理由を説明しやすくしたい",
    note: "要件定義と進行管理が得意。",
    strengths: ["要件定義", "進行管理", "レビュー"],
    interests: ["育成", "権限移譲"],
    next: "リーダー補佐に判断の一部を渡し、育成設計を進めたい",
    capacity: "通常",
    growth: ["育成設計"],
    technical: ["React", "GitHub", "Jira"],
    updated: "2026-07-16",
    logs: logs.slice().reverse(),
    x: 76,
    y: 72,
    color: "#38c172",
  },
  {
    id: "m03",
    name: "鈴木 美奈",
    role: "チームリーダー補佐",
    icon: "美",
    avatarImage: "",
    headerImage: "",
    header: "挑戦を近くで支える",
    note: "設計と伴走支援が強み。",
    strengths: ["設計", "実装", "伴走支援"],
    interests: ["顧客折衝", "リード経験"],
    next: "顧客折衝を含む小さなリード経験を積みたい",
    capacity: "少し余裕あり",
    growth: ["顧客折衝"],
    technical: ["TypeScript", "API設計", "テスト設計"],
    updated: "2026-07-17",
    logs,
    x: 68,
    y: 78,
    color: "#78d64b",
  },
  {
    id: "m04",
    name: "田中 蓮",
    role: "メンバー",
    icon: "蓮",
    avatarImage: "",
    headerImage: "",
    header: "UI実装から要件整理へ",
    note: "新しい技術にも挑戦したい。",
    strengths: ["フロントエンド", "UI実装"],
    interests: ["要件定義", "設計"],
    next: "要件整理の段階から画面方針に関わってみたい",
    capacity: "少し余裕あり",
    growth: ["要件定義", "設計"],
    technical: ["React", "CSS", "アクセシビリティ"],
    updated: "2026-07-15",
    logs,
    x: 46,
    y: 84,
    color: "#31c7eb",
  },
  {
    id: "m05",
    name: "伊藤 結衣",
    role: "メンバー",
    icon: "結",
    avatarImage: "",
    headerImage: "",
    header: "ユーザーに近い仕事を増やしたい",
    note: "QAと仕様確認が得意。",
    strengths: ["QA", "仕様確認", "ドキュメント"],
    interests: ["顧客折衝", "改善提案"],
    next: "問い合わせや利用ログから改善提案を出したい",
    capacity: "通常",
    growth: ["改善提案"],
    technical: ["テスト設計", "スプレッドシート", "SQL基礎"],
    updated: "2026-07-14",
    logs,
    x: 52,
    y: 70,
    color: "#f7b955",
  },
  {
    id: "m06",
    name: "中村 大和",
    role: "メンバー",
    icon: "大",
    avatarImage: "",
    headerImage: "",
    header: "安定して実装を進めたい",
    note: "バックエンドとAPIが強み。",
    strengths: ["バックエンド", "API", "テスト"],
    interests: ["レビュー", "設計"],
    next: "API設計レビューに参加し、設計観点を増やしたい",
    capacity: "余力少なめ",
    growth: ["レビュー", "設計"],
    technical: ["Node.js", "PostgreSQL", "API設計"],
    updated: "2026-07-10",
    logs,
    x: 64,
    y: 42,
    color: "#6aa6ff",
  },
  {
    id: "m07",
    name: "小林 陽菜",
    role: "メンバー",
    icon: "陽",
    avatarImage: "",
    headerImage: "",
    header: "少しずつリードへ",
    note: "デザイン連携とUI改善が得意。",
    strengths: ["デザイン連携", "UI改善", "調整"],
    interests: ["進行管理", "リーダー補佐"],
    next: "小さな画面改善の進行管理を担当したい",
    capacity: "少し余裕あり",
    growth: ["進行管理", "リーダー補佐"],
    technical: ["Figma", "HTML/CSS", "プロトタイピング"],
    updated: "2026-07-19",
    logs,
    x: 58,
    y: 76,
    color: "#ff8dc7",
  },
  {
    id: "m08",
    name: "高橋 海斗",
    role: "メンバー",
    icon: "海",
    avatarImage: "",
    headerImage: "",
    header: "まずは基礎固め",
    note: "実装補助、テスト、調査を担当。",
    strengths: ["実装補助", "テスト", "調査"],
    interests: ["実装自走", "レビュー対応"],
    next: "小さな修正を自走し、レビュー指摘への対応力を上げたい",
    capacity: "通常",
    growth: ["実装自走", "レビュー対応"],
    technical: ["JavaScript", "Git", "テスト実行"],
    updated: "2026-07-12",
    logs,
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
    lead: "佐藤 蒼太",
    tags: ["要件定義", "UI改善", "顧客折衝"],
  },
  {
    id: "p02",
    name: "社内管理API刷新",
    term: "2026-05〜06",
    lead: "鈴木 美奈",
    tags: ["API設計", "テスト", "設計"],
  },
  {
    id: "p03",
    name: "新規オンボーディング画面",
    term: "2026-06",
    lead: "小林 陽菜",
    tags: ["UI実装", "デザイン連携", "リリース"],
  },
  {
    id: "p04",
    name: "障害対応と再発防止",
    term: "2026-06〜07",
    lead: "佐藤 蒼太",
    tags: ["障害対応", "調査", "顧客報告"],
  },
  {
    id: "p05",
    name: "次期提案プロトタイプ",
    term: "2026-07",
    lead: "山田 花子",
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
let activeFilters = {};
let editingMember = null;

const $ = (selector) => document.querySelector(selector);
const memberSelect = $("#memberSelect");
const projectSelect = $("#projectSelect");
const teamMap = $("#teamMap");
const profileSheet = $("#profileSheet");
const editSheet = $("#editSheet");
const filterIds = [
  "filterStrength",
  "filterInterest",
  "filterCapacity",
  "filterGrowth",
  "filterUpdated",
];

function initials(member) {
  return member.icon || member.name.slice(0, 1);
}
function avatarMarkup(member, size = "") {
  const imageStyle = member.avatarImage
    ? `background-image:url('${member.avatarImage}')`
    : "";
  const imageClass = member.avatarImage ? " has-image" : "";
  return `<span class="member-avatar ${size}${imageClass}" style="--dot:${member.color};${imageStyle}">${member.avatarImage ? "" : initials(member)}</span>`;
}
function headerStyle(member) {
  return member.headerImage
    ? `style="--dot:${member.color};background-image:linear-gradient(180deg,rgba(23,66,78,.15),rgba(23,66,78,.45)),url('${member.headerImage}')"`
    : `style="--dot:${member.color}"`;
}
function unique(values) {
  return [...new Set(values.flat())].sort();
}
function optionList(values) {
  return [
    '<option value="">すべて</option>',
    ...values.map((v) => `<option value="${v}">${v}</option>`),
  ].join("");
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

function renderTeamState() {
  const relaxed = members.filter((m) => m.capacity === "少し余裕あり").length;
  const growthFields = unique(members.map((m) => m.growth));
  $("#teamState").innerHTML = `
    <article><strong>${members.length}人</strong><span>登録メンバー</span></article>
    <article><strong>${relaxed}人</strong><span>少し余裕あり</span></article>
    <article><strong>${growthFields.length}分野</strong><span>伸ばしたい領域</span></article>
    <article><strong>${projects.length}件</strong><span>直近案件ログ</span></article>
  `;
}

function renderFilters() {
  const fields = {
    filterStrength: unique(members.map((m) => m.strengths)),
    filterInterest: unique(members.map((m) => m.interests)),
    filterCapacity: unique(members.map((m) => [m.capacity])),
    filterGrowth: unique(members.map((m) => m.growth)),
    filterUpdated: ["7日以内", "14日以内", "15日以上前"],
  };
  Object.entries(fields).forEach(([id, values]) => {
    $("#" + id).innerHTML = optionList(values);
  });
  filterIds.forEach((id) =>
    $("#" + id).addEventListener("change", () => {
      activeFilters[id] = $("#" + id).value;
      renderMembers();
    }),
  );
}

function matchesUpdated(member, filter) {
  if (!filter) return true;
  const days = Math.floor(
    (new Date("2026-07-20") - new Date(member.updated)) / 86400000,
  );
  if (filter === "7日以内") return days <= 7;
  if (filter === "14日以内") return days <= 14;
  return days >= 15;
}

function filteredMembers() {
  return members.filter(
    (m) =>
      (!activeFilters.filterStrength ||
        m.strengths.includes(activeFilters.filterStrength)) &&
      (!activeFilters.filterInterest ||
        m.interests.includes(activeFilters.filterInterest)) &&
      (!activeFilters.filterCapacity ||
        m.capacity === activeFilters.filterCapacity) &&
      (!activeFilters.filterGrowth ||
        m.growth.includes(activeFilters.filterGrowth)) &&
      matchesUpdated(m, activeFilters.filterUpdated),
  );
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
    button.innerHTML = `<span>${initials(m)}</span><small>${m.name.split(" ")[0]}</small>`;
    button.addEventListener("click", () => openProfile(m));
    teamMap.appendChild(button);
  });
}

function memberSummary(member) {
  return `
    <dl class="summary-list">
      <div><dt>得意</dt><dd>${member.strengths.join("、")}</dd></div>
      <div><dt>次にやりたい</dt><dd>${member.next}</dd></div>
      <div><dt>現在の余力</dt><dd>${member.capacity}</dd></div>
      <div><dt>今後伸ばしたい</dt><dd>${member.growth.join("、")}</dd></div>
      <div><dt>テクニカル</dt><dd>${member.technical.join("、")}</dd></div>
    </dl>
  `;
}

function renderMembers() {
  const list = filteredMembers();
  $("#memberList").innerHTML =
    list
      .map(
        (m) => `
    <article class="member-card compact-member" style="--dot:${m.color}">
      <button type="button" class="member-open" data-member="${m.id}">
        ${avatarMarkup(m)}
        <span><strong>${m.name}</strong><em>${m.role}</em></span>
      </button>
      <dl class="mini-profile">
        <div><dt>余力</dt><dd>${m.capacity}</dd></div>
        <div><dt>更新</dt><dd>${m.updated}</dd></div>
      </dl>
      <button class="secondary-button wide member-detail" data-member="${m.id}" type="button">個別プロフィールを見る</button>
    </article>
  `,
      )
      .join("") ||
    '<p class="empty-message">条件に合うメンバーがいません。</p>';
  document
    .querySelectorAll(".member-open, .member-detail")
    .forEach((button) =>
      button.addEventListener("click", () =>
        openProfile(members.find((m) => m.id === button.dataset.member)),
      ),
    );
}

function renderSelectGroup(targetId, prefix, options) {
  $("#" + targetId).innerHTML = [1, 2, 3]
    .map(
      (index) => `
        <select id="${prefix}${index}" class="select-field small-select">
          ${optionList(options)}
        </select>
      `,
    )
    .join("");
}

function renderReflectionFields() {
  const skills = unique(
    members.map((m) => [...m.strengths, ...m.technical, ...m.growth]),
  );
  const experiences = unique(projects.map((p) => p.tags));
  renderSelectGroup("usedSkillFields", "usedSkill", skills);
  renderSelectGroup("grownSkillFields", "grownSkill", skills);
  renderSelectGroup("firstExperienceFields", "firstExperience", experiences);
}

function openProfile(member) {
  $("#profileContent").innerHTML = `
    <header class="profile-header profile-hero" ${headerStyle(member)}>
      ${avatarMarkup(member, "large")}
      <div><p class="eyebrow">${member.role}</p><h2 id="profileName">${member.name}</h2><p>${member.header}</p></div>
    </header>
    ${memberSummary(member)}
    <section><h3>直近5件</h3><ol class="log-list">${member.logs
      .slice(0, 5)
      .map((log) => `<li>${log}</li>`)
      .join("")}</ol></section>
    <button class="primary-button wide edit-profile" data-member="${member.id}" type="button">プロフィールを更新</button>
  `;
  profileSheet.showModal();
  profileSheet
    .querySelector(".edit-profile")
    .addEventListener("click", () => openEdit(member));
}

function openEdit(member) {
  editingMember = member;
  profileSheet.close();
  $("#editHeader").value = member.header;
  $("#editIcon").value = member.icon;
  $("#editAvatarImage").value = member.avatarImage;
  $("#editHeaderImage").value = member.headerImage;
  $("#editNext").value = member.next;
  $("#editCapacity").innerHTML = optionList(
    unique(members.map((m) => [m.capacity])),
  );
  $("#editCapacity").value = member.capacity;
  $("#editMessage").textContent = "";
  editSheet.showModal();
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
  $("#meButton").textContent = initials(currentUser);
  $("#roleLabel").textContent = `${currentUser.name} / ${currentUser.role}`;
  renderMap();
});
$("#meButton").addEventListener("click", () => openProfile(currentUser));
$("#closeProfile").addEventListener("click", () => profileSheet.close());
$("#closeEdit").addEventListener("click", () => editSheet.close());
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
$("#editForm").addEventListener("submit", (event) => {
  event.preventDefault();
  editingMember.header = $("#editHeader").value;
  editingMember.icon = $("#editIcon").value || editingMember.icon;
  editingMember.avatarImage = $("#editAvatarImage").value;
  editingMember.headerImage = $("#editHeaderImage").value;
  editingMember.capacity = $("#editCapacity").value;
  editingMember.next = $("#editNext").value;
  editingMember.updated = "2026-07-20";
  $("#editMessage").textContent = "プロフィールを更新しました。";
  renderLogin();
  renderMembers();
  renderMap();
  renderTeamState();
});

renderLogin();
renderProjects();
renderTeamState();
renderFilters();
renderAxisSwitch();
renderMap();
renderMembers();
renderReflectionFields();
