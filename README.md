# Explain My Plan - AI Structuring Tool

## Overview
This project converts unstructured user ideas into structured, actionable plans.

## Problem
People often have vague ideas but lack clarity, structure, and execution planning.

## Solution
This application takes a raw idea and converts it into:
- Goal
- Steps
- Missing elements
- Actionable steps
- Clarity score

## Features
- Dynamic idea analysis
- Structured output generation
- Missing element detection
- Actionable insights
- Clarity scoring system

## Tech Stack
- Frontend: React (Vite)
- Backend: Node.js + Express
- Deployment: Vercel (Frontend), Render (Backend)

## How to Run Locally
1. Clone repo
2. Run frontend:
   npm install
   npm run dev
3. Run backend:
   npm install
   node index.js

## Clarity Score Logic
Score is based on:
- Goal clarity
- Steps availability
- Missing elements
- Completeness of plan

## Challenges
- Handling AI API limitations
- Designing structured output logic
- Ensuring smooth frontend-backend communication

## Future Improvements
- Real AI integration (LLM)
- Better UI/UX design
- Export/share functionality
