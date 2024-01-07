# Nigerian Universities Web Scraping Project

This project is a simple web scraping script using [Puppeteer](https://pptr.dev/) to extract a list of universities in Nigeria from [Wikipedia](https://en.wikipedia.org/wiki/List_of_universities_in_Nigeria).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) comes with Node.js.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/collinsadi/nigerian-universities.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nigerian-universities
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

Run the script to extract the list of universities:

```bash
node index.js
```

The script will launch a headless browser, navigate to the Wikipedia page, scrape the data, and save it to a JSON file (`nigerianUniversities.json`).

### Customization

- Modify the script (`index.js`) to adapt to changes in the Wikipedia page structure or add additional features.

### Acknowledgments

- [Puppeteer](https://pptr.dev/) - Headless Chrome Node API by Google.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---