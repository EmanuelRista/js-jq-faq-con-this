//creare una piccola sezione FAQ: tante domande che quando cliccate visualizzano la risposta corrispondente.
$(".faq-head").click(
  function() {
    $(this).siblings().slideToggle(); // siblings = richiama il fratello (in questo caso il fratello di faq-head sarà faq-body, ed è lui che sarà coinvolto nel toggle)
  }
);
