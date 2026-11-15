// 동물 데이터: id(그림 파일 이름), en(영어), ko(한글), say(읽을 소리, 없으면 en)
window.A = window.A || {};

A.THEMES = [
  { id: 'farm', ko: '농장·들판', en: 'Farm & Field', icon: '🐄', cover: 'cow', color: '#f7d9a8',
    words: [
      ['dog', 'dog', '강아지'], ['cat', 'cat', '고양이'], ['pig', 'pig', '돼지'], ['cow', 'cow', '젖소'], ['chick', 'chick', '병아리'],
      ['horse', 'horse', '말'], ['sheep', 'sheep', '양'], ['duck', 'duck', '오리'], ['goat', 'goat', '염소'], ['rooster', 'rooster', '수탉'],
      ['donkey', 'donkey', '당나귀'], ['turkey', 'turkey', '칠면조'], ['hen', 'hen', '암탉'], ['goose', 'goose', '거위'], ['llama', 'llama', '라마'],
      ['rabbit', 'rabbit', '토끼'], ['deer', 'deer', '사슴'], ['fox', 'fox', '여우'], ['squirrel', 'squirrel', '다람쥐'], ['hedgehog', 'hedgehog', '고슴도치'],
    ] },
];

// 5개씩 묶음으로 나누기 (맨 끝 묶음은 5개보다 적을 수 있음)
A.GROUP_SIZE = 5;
A.THEMES.forEach(t => {
  t.words = t.words.map(([id, en, ko, say]) => ({
    id, en, ko, say: say || en,
    art: /^[aeiou]/i.test(en) && !/^uni/i.test(en) ? 'an' : 'a',   // unicorn 은 '유'로 시작하는 소리라 a
  }));
  t.groups = [];
  for (let i = 0; i < t.words.length; i += A.GROUP_SIZE) {
    t.groups.push(t.words.slice(i, i + A.GROUP_SIZE));
  }
});
