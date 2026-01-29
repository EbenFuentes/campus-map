<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/EbenFuentes/campus-map">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">CSULA Campus Map</h3>

  <p align="center">
    An interactive web-based campus map for California State University, Los Angeles featuring clickable buildings with detailed information
    <br />
    <a href="https://github.com/EbenFuentes/campus-map"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/EbenFuentes/campus-map">View Demo</a>
    ·
    <a href="https://github.com/EbenFuentes/campus-map/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/EbenFuentes/campus-map/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#references">References</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

![CSULA Campus Map Screenshot](public/campus-screenshot.png)

A modern interactive campus map for California State University, Los Angeles (CSULA) that helps students, faculty, and visitors navigate the campus. This project provides accurate and informative data for each building, parking structure, and facility on campus through an intuitive, clickable interface.

The current CSULA campus map is a static PDF image that makes it difficult to quickly find building information or plan routes. This project modernizes the campus navigation experience by providing:

* **Interactive building polygons** - Click any building to view detailed information
* **Detailed information** - Building names, codes, departments, and nearest parking
* **Modern web interface** - Fast, responsive, and mobile-friendly
* **Accurate geospatial data** - Precise building locations and footprints

Whether you're a new student trying to find your first class, a visitor looking for parking, or faculty planning your daily route, this map makes campus navigation simple and efficient.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Vue][Vue.js]][Vue-url]
* [![TailwindCSS][TailwindCSS]][Tailwind-url]
* [![MapLibre][MapLibre]][MapLibre-url]
* [![Vite][Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project requires Node.js version 20.19.0 or 22.12.0+

* npm
```sh
  npm install npm@latest -g
```

### Installation

1. Clone the repo
```sh
   git clone https://github.com/EbenFuentes/campus-map.git
```
2. Install NPM packages
```sh
   npm install
```
3. Run the development server
```sh
   npm run dev
```
4. Open your browser to the local development URL (typically `http://localhost:5173`)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

The application displays an interactive map centered on the CSULA campus. Users can:

1. **Navigate the map** - Zoom and pan to explore different areas of campus


The map data is stored in GeoJSON format (`public/campus-v0.geojson`) and includes properties for each building such as:
- Building name
- Building code
- Building type (academic, parking, residential, etc.)
- Nearest parking location
- Height and elevation data

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Interactive map with clickable buildings
- [ ] Building popups with basic information
- [ ] Building photos and images
- [ ] Search functionality
- [ ] Filter by building type
- [ ] Parking lot highlighting
- [ ] Mobile-responsive design improvements

See the [open issues](https://github.com/EbenFuentes/campus-map/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Eben Fuentes - [LinkedIn](https://linkedin.com/in/eben-fuentes) - eben.fuentes@gmail.com

Project Link: [https://github.com/EbenFuentes/campus-map](https://github.com/EbenFuentes/campus-map)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- References -->
## References

* [MapLibre GL JS](https://maplibre.org/) - Open-source mapping library
* [OpenStreetMap](https://www.openstreetmap.org/) - Building footprint data source
* [OpenFreeMap](https://openfreemap.org/) - Free map tiles
* [geojson.io](https://geojson.io/) - GeoJSON editing and visualization


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/EbenFuentes/campus-map.svg?style=for-the-badge
[contributors-url]: https://github.com/EbenFuentes/campus-map/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EbenFuentes/campus-map.svg?style=for-the-badge
[forks-url]: https://github.com/EbenFuentes/campus-map/network/members
[stars-shield]: https://img.shields.io/github/stars/EbenFuentes/campus-map.svg?style=for-the-badge
[stars-url]: https://github.com/EbenFuentes/campus-map/stargazers
[issues-shield]: https://img.shields.io/github/issues/EbenFuentes/campus-map.svg?style=for-the-badge
[issues-url]: https://github.com/EbenFuentes/campus-map/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ebenfuentes
[map-screenshot]: public/campus-screenshot.png
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[MapLibre]: https://img.shields.io/badge/MapLibre-396CB2?style=for-the-badge&logo=maplibre&logoColor=white
[MapLibre-url]: https://maplibre.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/