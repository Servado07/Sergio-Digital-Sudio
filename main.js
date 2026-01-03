window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",
          primary: "#3b82f6",
          accent: "#8b5cf6",
          light: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: "ease-out-cubic",
  });

  const navbar = document.querySelector("nav");
  const navContainer = navbar.querySelector("div > div");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-lg", "bg-gray-900/90");
      navbar.classList.remove("glass-effect", "border-white/10");

      navContainer.classList.remove("h-20");
      navContainer.classList.add("h-16");
    } else {
      navbar.classList.remove("shadow-lg", "bg-gray-900/90");
      navbar.classList.add("glass-effect", "border-white/10");

      navContainer.classList.remove("h-16");
      navContainer.classList.add("h-20");
    }
  });

  const btnWhatsapp = document.getElementById("btnWhatsapp");

  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      const nombre = document.getElementById("clientName").value.trim();
      const plan = document.getElementById("clientPlan").value;

      const miTelefono = "34633570983";

      let mensaje = "";

      if (nombre) {
        mensaje = `Hola Sergio, soy ${nombre}. `;
      } else {
        mensaje = "Hola Sergio. ";
      }

      mensaje += `Estoy interesado en el *${plan}* y me gustaría recibir más información o un presupuesto.`;

      const mensajeCodificado = encodeURIComponent(mensaje);

      const url = `https://wa.me/${miTelefono}?text=${mensajeCodificado}`;
      window.open(url, "_blank");
    });
  }
});