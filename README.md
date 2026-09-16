# Aditya Chandeliya — Portfolio

Personal portfolio of Aditya Chandeliya, Senior Software Engineer specializing in

scalable, event-driven backend systems (Java, Spring Boot, Kafka) across Payments,
Logistics and Finance.

🔗 **Live:** [adityachandeliya.github.io](https://adityachandeliya.github.io)

## Tech
- Static single-page site (semantic, accessible HTML)
- Tailwind CSS (Play CDN) with a custom dark theme
- Vanilla JS for nav, mobile menu and scroll interactions
- AOS for on-scroll animations, Font Awesome icons, Inter font

## Structure
```
index.html            # Full single-page site

src/js/main.js         # Nav, mobile menu, active-section highlight, AOS init
src/styles/input.css   # Optional Tailwind source (for a local build)
assets/                # Résumé PDF
tailwind.config.js     # Optional Tailwind build config
```

## Run locally
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Optional CSS build
```bash
npm install
npm run build   # compiles src/styles/input.css -> src/styles/output.css
```