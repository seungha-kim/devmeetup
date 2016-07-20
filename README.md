#Serverless architecture
##using Firebase

---
#Serverless architecture

##BaaS (Backend as a Service)
- Fully make use of 3rd party auth, database services
- Firebase, Parse, Auth0, Horizon
- Suitable for UI-driven, rich client application

---
#Serverless architecture
##FaaS (Function as a Service)
- Stored-procedure in cloud
- AWS Lambda, Azure Functions, Google Cloud Functions, Auth0 Webtask
- Suitable for event-triggered, message-driven application
- OR micro service architecture

---
#Firebase
- [Firebase Authentication](https://youtu.be/8sGY55yxicA?list=PLl-K7zZEsYLmOF_07IayrTntevxtbUxDL)
- [Firebase Realtime Database](https://youtu.be/8sGY55yxicA?list=PLl-K7zZEsYLmOF_07IayrTntevxtbUxDL)

---
#POC
##Collaborative beat making app

- [Demo](https://sequencer-c3f12.firebaseapp.com)
- Firebase - Auth, Realtime database
- Flux architecture
- Side effect management using ES6 generator
- Web Audio API

---
#Retrospective
##Pros

- Almost no implementation & operation cost for server (Yay!)
- Simple API (like a small library)

---
#Retrospective
##Cons

- Schema definition & data validation are possible, but unfamilar and limited
- Business logic in client (problematic in multiple client implementations)

---
# References

- http://martinfowler.com/articles/serverless.html
