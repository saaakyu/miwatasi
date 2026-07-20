const skills = [
  { name: "要件定義", note: "3人が経験 / 2人が挑戦希望", level: 72 },
  { name: "顧客折衝", note: "経験がAさんに集中", level: 54 },
  { name: "設計", note: "次の育成テーマ", level: 46 },
  { name: "レビュー", note: "サポート可能者が増加", level: 64 },
];

const members = [
  { name: "Haruka", state: "挑戦したい", text: "要件定義を初経験。次は設計の入口に触れてみたい。", tags: ["要件定義", "設計希望", "1分ふりかえり済"] },
  { name: "Sota", state: "サポート可", text: "顧客折衝とレビューを継続。次回は若手の伴走役も可能。", tags: ["顧客折衝", "レビュー", "伴走"] },
  { name: "Mina", state: "余白あり", text: "実装中心の案件が完了。次は小さなリード経験に挑戦したい。", tags: ["実装", "リード補佐希望", "余力あり"] },
];

const skillGrid = document.querySelector("#skillGrid");
const memberList = document.querySelector("#memberList");
const reflectButton = document.querySelector("#reflectButton");

skillGrid.innerHTML = skills.map((skill) => `
  <article class="skill-card" tabindex="0">
    <strong>${skill.name}</strong>
    <span>${skill.note}</span>
    <div class="progress" aria-label="${skill.name} の蓄積度 ${skill.level}%"><i style="width: ${skill.level}%"></i></div>
  </article>
`).join("");

memberList.innerHTML = members.map((member) => `
  <article class="member-card">
    <header>
      <div>
        <h3>${member.name}</h3>
        <p>${member.text}</p>
      </div>
      <span class="badge">${member.state}</span>
    </header>
    <div class="tags">${member.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  </article>
`).join("");

reflectButton.addEventListener("click", () => {
  reflectButton.textContent = "記録しました";
  reflectButton.setAttribute("aria-live", "polite");
  window.setTimeout(() => {
    reflectButton.textContent = "記録する";
  }, 1600);
});
