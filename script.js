document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq_item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq_question");
    const toggle = question.querySelector(".faq_toggle");

    question.addEventListener("click", () => {
      const answer = item.querySelector(".faq_answer");
      const isOpen = answer.style.display === "block";

      document.querySelectorAll(".faq_answer").forEach((answer) => {
        answer.style.display = "none";
      });

      document.querySelectorAll(".faq_toggle").forEach((toggle) => {
        toggle.textContent = "+";
      });

      if (!isOpen) {
        answer.style.display = "block";
        toggle.textContent = "-";
      }
    });
  });
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement("google_translate_element");

  function filterLanguages() {
    let select = document.querySelector(".goog-te-combo");
    if (select) {
      let allowedLanguages = ["en", "de", "es", "it"];
      for (let i = select.options.length - 1; i >= 0; i--) {
        let option = select.options[i];
        if (!allowedLanguages.includes(option.value)) {
          select.remove(i);
        }
      }
    }
  }

  setTimeout(function () {
    filterLanguages();

    let select = document.querySelector(".goog-te-combo");
    if (select) {
      select.addEventListener("change", function () {
        setTimeout(filterLanguages, 500);
      });
    }
  }, 1000);
}
