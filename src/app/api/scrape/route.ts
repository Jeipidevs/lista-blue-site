import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export async function POST() {
  try {
    // Triggers multi_condo_scraper.py script in background
    console.log("Triggering WebScraping sync...");
    const { stdout, stderr } = await execPromise("python scrapers/multi_condo_scraper.py");
    console.log("Scraper stdout:", stdout);

    return NextResponse.json({
      success: true,
      message: "Sincronização dos portais finalizada com sucesso!",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Scraper execution error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Erro ao executar o scraper" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "online",
    lastRun: new Date().toISOString(),
  });
}
