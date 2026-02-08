Over the past few weeks, I created​‍​‌‍​‍‌​‍​‌‍​‍‌ an 3 Tier To-Do application and put it live on Amazon EKS with the help of Docker, Kubernetes, and ALB Ingress Controller. The idea behind this project is to implement a 3 tier architecture from scratch. I created a basic To-Do application using Node JS, containerized the frontend, backend and database services, verified the configuration through Docker Compose, and managed the entire system in a Kubernetes environment that closely resembled production.

This work is a proof of concepts of a cloud-native app deployment, Kubernetes networking, ingress routing, and full DevOps ownership from development to cloud ​‍​‌‍​‍‌​‍​‌‍​‍‌rollout.

**Pre-requisites**
Before diving in, I made sure I had:

AWS Account: IAM user with permissions for EKS.
Local Setup: NodeJS, pip, Docker, Git, AWS CLI, MongoDB.
Image Registry: Docker Hub account
📂 Repo → https://github.com/Kevinjoeharris/Todo-list

**Tech Stack**
For this project, I used:

Source Control: GitHub
Containerization: Docker
Image Registry: Docker Hub
Orchestration: AWS EKS
Application: NodeJS
Database: MongoDB
Networking / Routing: ALB Ingress Controller

To read more on steps to implement, refer -> https://kevinjoeharris.medium.com/3-tier-to-do-application-nodejs-mongodb-and-aws-eks-62983d52da11
