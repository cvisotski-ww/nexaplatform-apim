<h1 align="center">Nexa Platform APIM</h1>

<div align="center">
  Built using Zuplo
</div>


<div align="center">
  <h3>Related Repositories:</h3>
  <h3>
    <a href="https://github.com/Watts-Digital/nexa-api">
      Nexa Internal Api
    </a>
  </h3>
</div>

<br> 

<div align="center">
  <sub>Built with ❤︎ by
  <a href="">Watts Digital Engineering</a>
    contributors
  </a>
</div>

<hr/>

# System Level Architecture
![Architecture Diagram](docs/Images/VendorServiceArchitecture.png)

# Repository Folder Structure
## [Config](https://github.com/cvisotski-ww/nexaplatform-apim/tree/main/config) 
### Json Configuration Files defining API gateway Proxy
  - dev-portal.json - Custom Configuration related to Developer Portal Experience
  - policies.json - Configurable Inbound and Outbound policies to attach to our External Traffic
    - Rate Limiting
    - Require Zuplo Consumer Apikeys
    - Add Query Parameter with Consumer OrganizationIds to Requests
  - routes.oas.json - OpenApi 3.1.0 Definition File

## [Docs](https://github.com/cvisotski-ww/nexaplatform-apim/blob/main/docs/index.md)
### Configuration Files Defining the Developer Portal Look and Feel
  - index.md - Mark Down File included in Developer Portal Readme documentation 
  - sidebar.json - Customizable Sidebar configuration
  - theme.css - Configurable Developer Portal Colors and Themes

## [Modules](https://github.com/cvisotski-ww/nexaplatform-apim/tree/main/modules)
### Dynamic Typescript Files for Adding Custom Code to the Zuplo Api Gateway
 - forwardOrganizationIds.ts - Custom Code Module for extracting the Apikey consumer metadata property OrganizationIds and attaching them as a query parameter to requests sent to our Nexa backend.
 These organizationIds will be used to help validate an API Consumer has access to devices that it is querying for. 
 - rate-limit.ts - Zuplo configuration for setting rate limits per customerType. Currently configured:
    - Premium Customers - 1000 requests/min
    - Free Customers - 5 requests/min

# API Key Management Implementation
- We are currently leveraging Zuplos API Key Api for managing our external Client's Apikeys
- Each new client that we want to grant access to Nexas External Apis will have a new Consumer Created.
  - Each consumer will be defined a new Apikey by default
  - ApiKeys are set to not expire but this can be adjusted and configured.
  - New consumer will also be assigned some of our defined metadata properties (CustomerType, OrganizationIds)
  - CustomerType will control rate limiting
  - OrganizationIds will assist with Data Authorization
- Buckets will be created to mirror our Nexa Api environments
  - Dev, QA, Staging, Demo, Production

# Release Runbook
<hr/>