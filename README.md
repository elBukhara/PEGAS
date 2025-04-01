# PEGAS – Car Rental Platform (Frontend)

![site-cover](https://github.com/user-attachments/assets/b4ab1f04-7187-410c-a490-47a6a958ae03)

## Overview  
PEGAS is a web-based **car rental platform** built with **React**, providing an intuitive and user-friendly experience for clients to submit rental requests. The frontend serves as the main interface, allowing users to explore the service and submit their contact details via a request form. The submitted data is sent to the **FastAPI backend**, which stores the request and triggers an **Aiogram-powered Telegram bot** to notify administrators.  

## Features  
- 🚗 **Landing Page** – A dynamic, responsive interface with essential components for client interaction.  
- 📩 **Contact Form** – Clients enter their details and submit rental requests seamlessly.  
- 🔄 **API Integration** – Communicates with the FastAPI backend to process and store requests securely.  
- 🎨 **Modern UI** – Built with React and styled for an optimal user experience.  

## Tech Stack  
- **Frontend:** React, Bootstrap  
- **Backend:** FastAPI, PostgreSQL  
- **Bot:** Aiogram (Telegram Bot)  
- **Deployment:** AWS, NGINX  

## Setup & Installation  
### 1. Clone the Repository  
```bash
git clone https://github.com/elBukhara/PEGAS.git
cd PEGAS
```

### 2. Install Dependencies  
```bash
npm install
```

### 3. Start the Development Server  
```bash
npm run dev
```
The application will be available at **http://localhost:5173**.  

## Backend & Bot Integration  
- The frontend sends request data to the **FastAPI backend** via API calls.  
- Once processed, the backend triggers an **Aiogram bot** to notify administrators via Telegram.  
- Admins can manage requests directly within Telegram, approving or rejecting them.  

## Demo Bot Functionalities

[bot-video](https://github.com/user-attachments/assets/e62b20b5-3624-4417-9793-75fc4f7999b0)
