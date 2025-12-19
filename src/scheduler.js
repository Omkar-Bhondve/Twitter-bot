/**
 * Tweet Scheduler
 * Schedules automated tweet posting using node-cron
 */

import cron from "node-cron";
import { postTweet } from "./twitter.js";
import { getRandomTweet } from "./tweets.js";

/**
 * Schedule configuration for Asia/Kolkata timezone
 * Optimized for maximum engagement throughout the day
 */
const SCHEDULE = [
  { time: "0 9 * * *", label: "09:00 AM" }, // Early morning peak (users starting work/school)
  { time: "30 10 * * *", label: "10:30 AM" }, // Mid-morning boost (high activity during work hours)
  { time: "0 13 * * *", label: "01:00 PM" }, // Lunchtime recharge (break time scrolling)
  { time: "0 15 * * *", label: "03:00 PM" }, // Afternoon reset (post-lunch motivation)
  { time: "0 18 * * *", label: "06:00 PM" }, // Evening wind-down (end of workday)
];

const TIMEZONE = "Asia/Kolkata";

/**
 * Get random delay between 1-5 minutes in milliseconds
 * @returns {number} Random delay in ms
 */
function getRandomDelay() {
  const minDelay = 1 * 60 * 1000; // 1 minute
  const maxDelay = 5 * 60 * 1000; // 5 minutes
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

/**
 * Post a tweet with random delay
 */
async function scheduledTweetPost() {
  const delay = getRandomDelay();
  const delayMinutes = Math.round(delay / 1000 / 60);

  console.log(
    `[INFO] Cron job triggered. Waiting ${delayMinutes} minute(s) before posting...`
  );

  setTimeout(async () => {
    try {
      const tweetText = getRandomTweet();
      await postTweet(tweetText);
    } catch (error) {
      console.error("[ERROR] Scheduled tweet failed:", error.message);
    }
  }, delay);
}

/**
 * Initialize and start all cron jobs
 */
export function startScheduler() {
  console.log("\n[INFO] ═══════════════════════════════════════════════════");
  console.log("[INFO] Starting Tweet Scheduler");
  console.log("[INFO] ═══════════════════════════════════════════════════");
  console.log(`[INFO] Timezone: ${TIMEZONE}`);
  console.log("[INFO] Posting Schedule:");

  SCHEDULE.forEach(({ time, label }) => {
    console.log(`[INFO]   • ${label} (${time})`);

    // Schedule the cron job
    cron.schedule(time, scheduledTweetPost, {
      scheduled: true,
      timezone: TIMEZONE,
    });
  });

  console.log("[INFO] Random delay: 1-5 minutes before each post");
  console.log("[INFO] ═══════════════════════════════════════════════════");
  console.log("[SUCCESS] Scheduler started successfully!\n");
}
