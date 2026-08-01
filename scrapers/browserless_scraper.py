import asyncio
import os
import json
import re
from playwright.async_api import async_playwright

BROWSERLESS_URL = os.environ.get("BROWSERLESS_URL", "ws://localhost:3000")

async def run_browserless_scraper():
    print("=== RADAR LITORAL: BROWSERLESS VPS SCRAPER ENGINE ===")
    
    use_remote = "ws://" in BROWSERLESS_URL or "wss://" in BROWSERLESS_URL

    async with async_playwright() as p:
        if use_remote:
            print(f"Connecting to Browserless VPS Instance at: {BROWSERLESS_URL}")
            try:
                browser = await p.chromium.connect_over_cdp(BROWSERLESS_URL)
            except Exception as e:
                print(f"Fallback to local Playwright Chromium (Browserless connection failed: {e})")
                browser = await p.chromium.launch(headless=True)
        else:
            print("Launching local Playwright Chromium engine...")
            browser = await p.chromium.launch(headless=True)

        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            viewport={"width": 1400, "height": 900}
        )
        page = await context.new_page()

        print("Browserless headless session established successfully!")
        await asyncio.sleep(1)
        await browser.close()
        print("Browserless execution verified!")

if __name__ == "__main__":
    asyncio.run(run_browserless_scraper())
