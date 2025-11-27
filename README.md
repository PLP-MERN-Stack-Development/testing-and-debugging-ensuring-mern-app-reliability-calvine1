# MERN Testing & Debugging – Ensuring Reliability

This project has been configured to demonstrate reliable testing practices across both the **server (Express/MongoDB)** and **client (React)** sides of a MERN application. The setup uses **Jest** as the primary test runner, with **Supertest** and **MongoDB Memory Server** for backend integration tests, and **React Testing Library** with **Jest DOM** for frontend component testing. Cypress can be added for end‑to‑end flows.

## 🔹 Testing Strategy
- **Unit Tests (Client & Server):**
  - Client: React components tested with `@testing-library/react` to validate rendering and user interactions.
  - Server: Utility functions and controllers tested with Jest to ensure logic correctness.
- **Integration Tests (Server):**
  - API endpoints tested with Supertest against an in‑memory MongoDB instance for realistic database behavior.
- **End‑to‑End Tests (Client):**
  - Cypress can be used to simulate real user flows across the frontend and backend.
- **Coverage Goals:**
  - Global coverage threshold set to **70% statements, 70% functions, 70% lines, 60% branches**.
  - Coverage reports generated in both text and HTML formats.

## 🔹 Setup
1. Clone the repository from GitHub Classroom.
2. Install dependencies:
   ```bash
   cd server
   npm install
   cd ../client
   npm install

   