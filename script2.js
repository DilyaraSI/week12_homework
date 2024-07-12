const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function generateIndex(length) {
  return Math.floor(Math.random() * length);
}

const generateWord =
  alphabet[generateIndex(alphabet.length)] +
  alphabet[generateIndex(alphabet.length)] +
  alphabet[generateIndex(alphabet.length)] +
  alphabet[generateIndex(alphabet.length)];

console.log(generateWord);

// есть вопрос: почему также генерируется буква "я", если у нас math.random не включительно генерирует? не совсем понимаю и путаюсь в этом. объясни пожалуйста; и есть ли еще какие-то способы решения этой задачи в целом?
