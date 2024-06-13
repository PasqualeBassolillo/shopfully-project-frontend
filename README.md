<div align="center">
  <h1 align="center">ShopFully Client Application based on React</h1>
</div>

<br/>

This frontend application serves to read data from the backend via the exposed APIs and display promotional flyers. It provides a user-friendly interface where users can view flyer details and add them to their favorites. Favorites are stored using localStorage and, if localStorage is not available, they are stored using cookies.

## Tech Stack

- [React](https://it.legacy.reactjs.org/) – Library
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) – Language

## Getting Started

### Prerequisites

Here's what you need to be able to run ShopFully Client Application:

- Docker 🐳

### Installation

#### 1. Clone the repository

```shell
git clone https://github.com/PasqualeBassolillo/shopfully-project-frontend.git
```

#### 2. Move to the project folder

```shell
cd shopfully-project-frontend
```

#### 3. Copy the example environment file and rename it to .env

```shell
cp .env.example .env
```

#### 4. Edit the .env file to set the backend server URL
Open the .env file in your favorite text editor and set the REACT_APP_SERVER_URL variable:

```shell
REACT_APP_SERVER_URL=http://localhost:8000/api
```

#### 4. Run the service

```shell
docker-compose up -d --build app
```

## Usage

Now we are ready to go! The APIs are accessible at [http://localhost:3000/](http://localhost:3000/).

## Goals
- [X] Fetch and display flyers
  - [x] Retrieve flyer data from backend API
  - [x] Display flyers in a grid layout
- [X] Favorites management
  - [x] Add flyers to favorites
  - [x] Store favorites in localStorage
  - [x] Fallback to cookies if localStorage is not available
- [X] Responsive design
  - [x] Implement a collapsible header menu
  - [x] Ensure the layout is responsive and works on different screen sizes

# Conclusion

With the frontend application up and running, you can now access and interact with the flyers data retrieved from the backend API at [http://localhost:8000](http://localhost:8000). This setup provides a seamless experience for viewing and managing promotional flyers, including adding them to your favorites.
The frontend application is accessible at [http://localhost:3000](http://localhost:3000).

Thank you for using the Shopfully Frontend application!
<br>
<br>
<br>
<table border="0" cellspacing="0" cellpadding="0">
  <tr style="border-bottom: 1px solid #efefef;">
    <td width="506" border=0>
      Copyright © Pasquale Bassolillo, 2024
    </td>
    <td align="right" width="506">
      <span>
        <a href="https://www.linkedin.com/in/pasquale-bassolillo-823900161/">
          <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn" />
        </a>
      </span>
      <span>
         <img src="#"
            width="20" height="1" />
      </span>
      <span>
        <a href="https://github.com/PasqualeBassolillo">
          <img src="https://img.shields.io/badge/GitHub-171515?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub" />
        </a>
      </span>
    </td>
  </tr>
</table>