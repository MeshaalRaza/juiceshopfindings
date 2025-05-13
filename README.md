# 🔐 Juice Shop Security Fixes – Internship Project

This repository contains enhanced security implementations applied to a sample Node.js application based on OWASP Juice Shop, as part of a Cybersecurity Internship (Weeks 1–6).

---

## 📌 Security Fixes Overview

### ✅ Week 1–3 Recap
- Input validation using `validator`
- Password hashing with `bcrypt`
- JWT-based login system
- Helmet for basic HTTP header security
- Winston for logging

---

## 🚀 Week 4–6 Additions

### 🔹 Week 4: Server Hardening
- `express-rate-limit`: Prevent brute-force and DoS
- `helmet` CSP & HSTS added
- Global error handling

### 🔹 Week 5: Web Attack Protection
- CSRF Protection using `csurf`
- CORS configuration with `cors`
- Role-based access preparation via JWT (bonus-ready)

### 🔹 Week 6: Secure Deployment & Monitoring
- Auto log monitoring using Winston
- Docker image hardened (optional)
- Fail2Ban & ModSecurity (bonus WAF simulation)

---

## 🎯 Bonus Challenge
- **Zero Trust**: JWT role-based auth structure
- **WAF Simulation**: ModSecurity via NGINX on Docker (documented)
- **Social Engineering Awareness**: GoPhish phishing simulation mock

---

## 📁 Folder Structure
/routes/user.js # Protected routes
server.js # Secure backend server
README.md # Full documentation
security.log # Winston logging

---

## ⚠️ CSRF Usage Notes
CSRF token is sent as a cookie. The client must retrieve and include it in every POST request.

---

## 🧪 Testing
- Tools used: OWASP ZAP, Burp Suite, SQLMap, Nikto
- All scans passed post-implementation


