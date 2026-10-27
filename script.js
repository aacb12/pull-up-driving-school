const PHONE = "447741405694";
const EMAIL = "info@pullupdrivingschool.co.uk";

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Header shadow once the page scrolls
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// "Book now" on a price card pre-selects that lesson in the form
const form = document.getElementById("enquiry");
document.querySelectorAll("[data-lesson]").forEach((btn) =>
  btn.addEventListener("click", () => {
    form.elements.lesson.value = btn.dataset.lesson;
  })
);

// Enquiry form: no backend on GitHub Pages, so hand off to WhatsApp or email
function buildMessage() {
  const f = form.elements;
  const lines = [
    "Hi Pull Up Driving School, I'd like to enquire about lessons.",
    "",
    `Name: ${f.name.value}`,
  ];
  if (f.phone.value) lines.push(`Phone: ${f.phone.value}`);
  if (f.area.value) lines.push(`Area: ${f.area.value}`);
  lines.push(`Lesson type: ${f.lesson.value}`);
  if (f.message.value) lines.push("", f.message.value);
  return lines.join("\n");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener");
});

document.getElementById("send-email").addEventListener("click", () => {
  if (!form.reportValidity()) return;
  const subject = encodeURIComponent(`Driving lesson enquiry from ${form.elements.name.value}`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(buildMessage())}`;
});

// Fade sections in as they scroll into view
const revealEls = document.querySelectorAll(
  ".section-head, .lesson-card, .learn, .price-card, .pass-grid > *, .about > *, .area-list, .map, .faq details, .contact > *"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

// Pass gallery: show a few photos until "See all" is pressed
const passGrid = document.getElementById("pass-grid");
const passToggle = document.getElementById("pass-toggle");
passGrid.classList.add("collapsed");
passToggle.hidden = false;
passToggle.addEventListener("click", () => {
  const collapsed = passGrid.classList.toggle("collapsed");
  passToggle.setAttribute("aria-expanded", !collapsed);
  passToggle.textContent = collapsed ? "See more" : "Show less";
  if (collapsed) passGrid.scrollIntoView({ block: "start" });
});

// Placeholder links (e.g. social profiles not added yet) shouldn't jump to the top
document.querySelectorAll('a[href="#"]').forEach((link) =>
  link.addEventListener("click", (e) => e.preventDefault())
);

document.getElementById("year").textContent = new Date().getFullYear();
