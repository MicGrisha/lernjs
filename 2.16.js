function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );

// Первый вариант
  ask = (question, yes, no) => {
    if (confirm(question)) yes()
        else no();
  }
  ask("Вы согласны?",(),()) => {
    alert("Вы согласились."
    alert("Вы отменили выполнение."
  }