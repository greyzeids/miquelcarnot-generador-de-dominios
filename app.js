/* Generador de domains - Miquel Carnot Luna */

const pronouns = [
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "this",
  "that",
  "these",
  "those",
  "which",
  "what",
  "whose",
  "whom",
  "where",
  "when",
  "why",
  "how",
  "whichever",
];

const adjectives = [
  "good",
  "great",
  "small",
  "fast",
  "famous",
  "interesting",
  "big",
  "new",
  "old",
  "long",
  "short",
  "happy",
  "sad",
  "rich",
  "poor",
  "beautiful",
  "ugly",
  "clever",
  "dumb",
  "tasty",
];

const nouns = [
  "project",
  "business",
  "website",
  "idea",
  "team",
  "product",
  "company",
  "customer",
  "employee",
  "market",
  "opportunity",
  "solution",
  "service",
  "strategy",
  "goal",
  "challenge",
  "innovation",
  "design",
  "technology",
  "future",
];

const domainHacks = [
  ".io",
  ".co",
  ".ai",
  ".app",
  ".dev",
  ".tv",
  ".net",
  ".org",
  ".com",
  ".online",
  ".store",
  ".space",
  ".xyz",
  ".ly",
  ".biz",
  ".us",
  ".tv",
  ".app",
  ".life",
  ".fm",
];

var allDomains = [];
function generateDomains() {
  for (var a = 0; a < pronouns.length; a++) {
    for (var b = 0; b < adjectives.length; b++) {
      for (var c = 0; c < nouns.length; c++) {
        for (var d = 0; d < domainHacks.length; d++) {
          var domains = pronouns[a] + adjectives[b] + nouns[c] + domainHacks[d];
          allDomains.push(domains);
        }
      }
    }
  }
  return allDomains;
}

var allDomains = generateDomains();

for (var a = 0; a < allDomains.length; a++) {
  console.log(allDomains[a]);
}

if (typeof document !== "undefined") {
  document.querySelector("#btn").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * allDomains.length);
    const randomDomain = allDomains[randomIndex];
    document.querySelector("#domain").innerText = randomDomain;
  });
}
