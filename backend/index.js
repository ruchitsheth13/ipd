const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { default: puppeteer } = require('puppeteer');
const fs = require('fs');
const app = express();
const port = 8000;

app.use(cors());
const { NseIndia } = require('stock-nse-india');
const { Console } = require('console');
const nseIndia = new NseIndia();

// Home route - Just a test endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Get all stock symbols
app.get('/stocks/all', async (req, res) => {
    try {
        const symbols = await nseIndia.getAllStockSymbols();
        res.json(symbols); // Return the symbols as a JSON response
    } catch (error) {
        console.error('Error fetching stock symbols:', error);
        res.status(500).json({ error: 'Failed to fetch stock symbols' });
    }
});

// Route to fetch equity details for a specific symbol
app.get('/stocks/:symbol', async (req, res) => {
    const { symbol } = req.params;
    try {
        const stockDetails = await nseIndia.getEquityDetails(symbol);
        res.json(stockDetails); // Return the stock details as a JSON response
    } catch (error) {
        console.error(`Error fetching stock details for ${symbol}:`, error);
        res.status(500).json({ error: `Failed to fetch details for ${symbol}` });
    }
});

// Route to fetch historical data for a specific symbol
app.get('/stocks/:symbol/historical', async (req, res) => {
    const { symbol } = req.params;
    const range = {
        start: new Date('2010-01-01'),
        end: new Date('2021-03-20'),
    };
    try {
        const historicalData = await nseIndia.getEquityHistoricalData(symbol, range);
        res.json(historicalData); // Return the historical data as a JSON response
    } catch (error) {
        console.error(`Error fetching historical data for ${symbol}:`, error);
        res.status(500).json({ error: `Failed to fetch historical data for ${symbol}` });
    }
});

// Get details of a specific stock
app.get('/stocks/:symbol', async (req, res) => {
    try {
        const symbol = req.params.symbol;
        const stockDetails = await nseIndia.getEquityDetails(symbol);
        res.json(stockDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Failed to fetch details for stock symbol: ${req.params.symbol}` });
    }
});

// Get all cryptocurrency assets
app.get('/crypto/assets', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.coincap.io/v2/assets',
        headers: {
            'Accept-Encoding': 'gzip, deflate',
            'Authorization': 'Bearer 1a793104-d0e8-4533-a983-c0972e36c157',
        },
    };

    try {
        const response = await axios(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cryptocurrency assets' });
    }
});

// Get historical data for a specific cryptocurrency
app.get('/crypto/assets/:id/historical-data', async (req, res) => {
    const id = req.params.id;
    const options = {
        method: 'GET',
        url: `https://api.coincap.io/v2/assets/${id}/history?interval=d1`,
        headers: {
            'Accept-Encoding': 'gzip, deflate',
            'Authorization': 'Bearer 1a793104-d0e8-4533-a983-c0972e36c157',
        },
    };

    try {
        const response = await axios(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Failed to fetch historical data for asset: ${id}` });
    }
});

// Get all mutual funds
app.get('/mutualfunds/all', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.mfapi.in/mf',
        headers: {
            'Accept-Encoding': 'gzip, deflate',
        },
    };

    try {
        const response = await axios(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch mutual funds' });
    }
});

// Function to fetch mutual fund data
async function getRupeevest() {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
    headless: true,
  });
  const page = await browser.newPage();

  page.on('console', (msg) => {
    console.log('LOG:', msg.text());
  });

  await page.goto('https://www.rupeevest.com');
  const scriptToRun = async () => {
    const asset_selection = ['1', '2', '3', '50', '4', '5'];
    const rating_selection = ['1', '2', '3', '4', '5', 'Unrated'];
    const amc_selection = ['all'];
    const fund_m_selection = ['all'];
    const index_selection = ['all'];
    const fund_id = ['1'];
    const from_date = 0;
    const to_date = 0;

    const data = {
      selected_schemes: asset_selection,
      selected_rating: rating_selection,
      selected_amc: amc_selection,
      selected_manager: fund_m_selection,
      selected_index: index_selection,
      selected_fund_type: fund_id,
      selected_from_date: from_date,
      selected_to_date: to_date,
      condn_type: 'asset',
    };

    const targetUrl = '/functionalities/asset_class_section?';

    const response = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Robots-Tag': 'noindex',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log('not ok');
    }
    const result = await response.json();

    return result;
  };

  const data1 = await page.evaluate(scriptToRun);
  fs.writeFileSync('data.json', JSON.stringify(data1, null, 2)); // save data1 to file with og json format

  console.log(data1);
  await browser.close();
  return data1;
}

// New route to fetch mutual fund data
app.get('/mutual-funds', async (req, res) => {
  try {
    const data = await getRupeevest();
    console.log("e")
    res.json(data);
  } catch (error) {
    console.error('Error fetching mutual fund data:', error);
    res.status(500).json({ error: 'Failed to fetch mutual fund data' });
  }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
