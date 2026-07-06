const GREETINGS = {
  en: (name) => `Hello, ${name}!`,
  ko: (name) => `안녕하세요, ${name}!`,
};

function greet(name, lang = "en") {
  const render = GREETINGS[lang] || GREETINGS.en;
  return render(name);
}

module.exports = { greet };
