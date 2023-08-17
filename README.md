# 3.13_ServerlessSecretMgmt
The objective of this assignment is to set up a continuous integration and continuous deployment (CI/CD) pipeline for a Node.js application that is deployed on a serverless platform with Secret Management in placed!.

---

# Setting Up CI/CD Pipeline for Node.js Application with Serverless Deployment and Secret Management

## Introduction

This documentation outlines the process of setting up a robust Continuous Integration and Continuous Deployment (CI/CD) pipeline for a Node.js application. The pipeline includes automatic testing, deployment to a serverless platform, and integration with secret management services. The goal is to automate software delivery while ensuring code quality, security, and efficient deployment.

## Tools and Services Used

1. **Node.js**: A runtime environment that allows running JavaScript on the server side.
2. **Express Framework**: A Node.js framework for building web applications and APIs.
3. **Jest**: A testing framework for JavaScript applications.
4. **GitHub Actions**: A CI/CD platform that automates workflows in response to code changes.
5. **Serverless Framework**: A toolkit for deploying serverless applications.
6. **AWS Lambda**: A serverless compute service provided by Amazon Web Services.
7. **AWS Secrets Manager**: A service for managing and retrieving secrets securely.
8. **AWS Systems Manager (SSM)**: A service for managing configuration details.

## Steps to Set Up the CI/CD Pipeline

### 1. Create a New Node.js Application with Express Framework

Start by creating a new Node.js application using the Express framework. This application will serve as the foundation for the serverless deployment.

### 2. Set Up Automatic Testing with Jest

Integrate Jest as the testing framework for the application. Write unit tests to ensure the correctness of your code. Tests will be automatically executed as part of the CI/CD pipeline.

### 3. Create a new Repository - 3.13_ServerlessSecretMgmt

Create a new Git repository to related to this CI/CD pipeline setup.

### 4. Set Up GitHub Actions Workflow

Create a GitHub Actions workflow YAML file (`.github/workflows/main.yml`). Configure the workflow to trigger on code pushes (`push` event) to the repository.

#### Workflow Steps:

- **Predeploy**: Placeholder step to trigger the workflow.
- **Install Dependencies**: Check out the repository code and install project dependencies using the `npm ci` command.
- **Unit Testing**: Run unit tests using the configured testing framework (Jest).
- **Get Secret**: Configure AWS credentials and retrieve secrets using AWS Secrets Manager and AWS SSM.
- **Deploy**: Set up Node.js, install dependencies, and use the Serverless Framework GitHub Action to deploy the application to AWS Lambda.

### 5. Secret Management

Utilize AWS Secrets Manager to securely manage secrets required by the application. In this documentation, we've used the placeholder name `POHLENG-SECRET` to represent a secret, and retrieve it using AWS Command Line Interface (CLI).

We also retrieve a parameter from AWS Systems Manager (SSM) using the AWS Command Line Interface (CLI).

### 6. Deployment to Serverless Platform

Leverage the Serverless Framework to deploy the application to a serverless platform, such as AWS Lambda. The deployment is automatically triggered when changes are pushed to the code repository, and all tests pass.

## Conclusion

By following these steps and leveraging the mentioned tools and services, we set up a CI/CD pipeline for Node.js application. This pipeline ensures automated testing, we also use secure secret management, and finally deploy a serverless platform.

---

