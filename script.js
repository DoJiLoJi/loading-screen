const stages = [
  { pct: 15,  text: 'Загружаем ресурсы…'  },
  { pct: 35,  text: 'Получаем данные…'    },
  { pct: 60,  text: 'Собираем страницу…'  },
  { pct: 80,  text: 'Почти готово…'       },
  { pct: 95,  text: 'Финальные штрихи…'   },
  { pct: 100, text: 'Готово!'             },
];

const bar     = document.getElementById('bar');
const pctEl   = document.getElementById('pct');
const status  = document.getElementById('status');
const title   = document.getElementById('title');
const spinner = document.getElementById('spinner');
const check   = document.getElementById('check');

let i = 0;

function nextStage() {
  if (i >= stages.length) return;

  const s = stages[i++];
  bar.style.width    = s.pct + '%';
  pctEl.textContent  = s.pct + '%';
  status.textContent = s.text;

  if (s.pct === 100) {
    setTimeout(() => {
      spinner.style.display = 'none';
      check.style.display   = 'flex';
      title.textContent     = 'Страница загружена';
      status.textContent    = 'Всё готово к работе';
    }, 350);
    return;
  }

  setTimeout(nextStage, 450 + Math.random() * 550);
}

setTimeout(nextStage, 400);
