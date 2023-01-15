(function () {
  "use strict";

  const modal = document.querySelector(".modal__body");
  const modalOverlay = document.querySelector(".modal__overlay");
  const modalToggle = document.querySelector(".modal-toggle");
  if (modalToggle) modalToggle.addEventListener("click", openModal);

  function openModal() {
    const modalClose = modal.querySelector(".modal__close");

    modalOverlay.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);

    modal.style.display = "block";
    modalOverlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  }
})();

(function () {
  "use strict";

  const modal = document.querySelector(".modal__body1");
  const modalOverlay = document.querySelector(".modal__overlay1");
  const modalToggle = document.querySelector(".modal-toggle1");
  if (modalToggle) modalToggle.addEventListener("click", openModal);

  function openModal() {
    const modalClose = modal.querySelector(".modal__close1");

    modalOverlay.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);

    modal.style.display = "block";
    modalOverlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  }
})();

(function () {
  "use strict";

  const modal = document.querySelector(".modal__body3");
  const modalOverlay = document.querySelector(".modal__overlay3");
  const modalToggle = document.querySelector(".modal-toggle3");
  if (modalToggle) modalToggle.addEventListener("click", openModal);

  function openModal() {
    const modalClose = modal.querySelector(".modal__close3");

    modalOverlay.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);

    modal.style.display = "block";
    modalOverlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  }
})();

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    console.log(123);
    const target = document.querySelector(tab.dataset.tabTarget);
    const socialButton = document.querySelector(".socialButton");
    if (socialButton) {
      if (target.id === "qrCode") {
        socialButton.style.display = "none";
      } else {
        socialButton.style.display = "block";
      }
    }
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

$(function () {
  $('input[type="checkbox"]').change(checkboxChanged);

  function checkboxChanged() {
    var $this = $(this),
      checked = $this.prop("checked"),
      container = $this.parent(),
      siblings = container.siblings();

    container
      .find('input[type="checkbox"]')
      .prop({
        indeterminate: false,
        checked: checked,
      })
      .siblings("label")
      .removeClass("custom-checked custom-unchecked custom-indeterminate")
      .addClass(checked ? "custom-checked" : "custom-unchecked");

    checkSiblings(container, checked);
  }

  function checkSiblings($el, checked) {
    var parent = $el.parent().parent(),
      all = true,
      indeterminate = false;

    $el.siblings().each(function () {
      return (all =
        $(this).children('input[type="checkbox"]').prop("checked") === checked);
    });

    if (all && checked) {
      parent
        .children('input[type="checkbox"]')
        .prop({
          indeterminate: false,
          checked: checked,
        })
        .siblings("label")
        .removeClass("custom-checked custom-unchecked custom-indeterminate")
        .addClass(checked ? "custom-checked" : "custom-unchecked");

      checkSiblings(parent, checked);
    } else if (all && !checked) {
      indeterminate = parent.find('input[type="checkbox"]:checked').length > 0;

      parent
        .children('input[type="checkbox"]')
        .prop("checked", checked)
        .prop("indeterminate", indeterminate)
        .siblings("label")
        .removeClass("custom-checked custom-unchecked custom-indeterminate")
        .addClass(
          indeterminate
            ? "custom-indeterminate"
            : checked
            ? "custom-checked"
            : "custom-unchecked"
        );

      checkSiblings(parent, checked);
    } else {
      $el
        .parents("li")
        .children('input[type="checkbox"]')
        .prop({
          indeterminate: true,
          checked: false,
        })
        .siblings("label")
        .removeClass("custom-checked custom-unchecked custom-indeterminate")
        .addClass("custom-indeterminate");
    }
  }
});
