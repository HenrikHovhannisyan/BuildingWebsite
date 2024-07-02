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
