const puppeteer = require("puppeteer");
// let universities = [];
const fs = require("fs");
(async ()=>{

    

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_universities_in_Nigeria");
    // await page.screenshot({path:"collins.png",fullPage:true});

    // await page.waitForNavigation();

    const tableSelector = ".wikitable tbody tr";
    await page.waitForSelector(tableSelector);

    const universities = await page.evaluate(() => {
        const tableRows = document.querySelectorAll(".wikitable tbody tr");
        const universitiesData = [];
  
        tableRows.forEach((row) => {
          const columns = row.querySelectorAll("td");
          if (columns.length >= 6) {
            const name = columns[0].querySelector("a");
            const state = columns[1].querySelector("a");
            const location = columns[3].querySelector("a");
  
            if (name && state && location) {
              universitiesData.push({
                name: name.innerText.trim(),
                state: state.innerText.trim(),
                abbreviation: columns[2].innerText.trim(),
                location: location.innerText.trim(),
                funding: columns[4].innerText.trim(),
                founded: columns[5].innerText.trim(),
              });
            }
          }
        });
  
        return universitiesData;

    })

    fs.writeFileSync("nigerianUniversities.json",JSON.stringify(universities, null, 2),{encoding:"utf-8"});

    await browser.close();

})();