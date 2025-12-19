# X (Twitter) Automation Bot

A production-ready Node.js automation bot that posts tweets automatically using **OAuth 1.0a ONLY**.

## 🔐 Authentication

- **OAuth 1.0a** (permanent tokens, no refresh logic)
- **NO OAuth 2.0**
- **NO browser-based authentication**
- **NO Bearer tokens**

## 📋 Features

- ✅ Automated tweet posting at scheduled times
- ✅ Random tweet selection from pool
- ✅ Prevents consecutive duplicate tweets
- ✅ Random 1-5 minute delay before posting
- ✅ Asia/Kolkata timezone support
- ✅ Express health check endpoint
- ✅ Production-ready error handling
- ✅ No crashes on API failures
- ✅ **Telegram notifications** (optional) - Get notified when tweets are posted!

## 📁 Project Structure

```
x-automation/
├── src/
│   ├── index.js       # Main entry point & Express server
│   ├── twitter.js     # Twitter client (OAuth 1.0a)
│   ├── scheduler.js   # Cron job scheduler
│   ├── telegram.js    # Telegram notifications (optional)
│   └── tweets.js      # Tweet pool & random selection
├── .env.example       # Environment variables template
├── .gitignore
├── TELEGRAM_SETUP.md  # Telegram setup guide
└── package.json
```

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd x-automation
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and add your Twitter OAuth 1.0a credentials:

```env
API_KEY=your_api_key_here
API_SECRET=your_api_secret_here
ACCESS_TOKEN=your_access_token_here
ACCESS_TOKEN_SECRET=your_access_token_secret_here
PORT=8080
```

### 3. Get Twitter API Credentials

1. Go to [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
2. Create a new app (or use existing)
3. Navigate to "Keys and Tokens"
4. Generate/Copy:
   - API Key (Consumer Key)
   - API Secret (Consumer Secret)
   - Access Token
   - Access Token Secret

### 4. Setup Telegram Notifications (Optional)

Get instant notifications on Telegram when tweets are posted!

**Step 1: Create a Telegram Bot**

1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow prompts to name your bot
4. Copy the **Bot Token** (e.g., `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

**Step 2: Get Your Chat ID**

1. Search for `@userinfobot` on Telegram
2. Start a chat with it
3. Copy your **Chat ID** (e.g., `123456789`)

**Step 3: Add to `.env`**

```env
# Optional: Set account name (useful when managing multiple bots)
ACCOUNT_NAME=Main Account

# Telegram credentials
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

**💡 Managing Multiple Accounts?**

- Set `ACCOUNT_NAME` to identify each bot (e.g., "@username", "Personal", "Business")
- The account name appears prominently in all notifications!

**Step 4: Start the bot**

1. Send `/start` to your bot on Telegram
2. You'll receive notifications for:
   - ✅ Bot startup
   - 🐦 Each tweet posted (with link)
   - ❌ Any errors

> **Note:** Telegram notifications are optional. The bot works fine without them!

### 5. Run the Bot

```bash
npm start
```

## ⏰ Posting Schedule

The bot posts tweets at the following times (Asia/Kolkata timezone):

- **08:00 AM** - Morning post
- **01:30 PM** - Afternoon post
- **08:00 PM** - Evening post

Each post has a random delay of **1-5 minutes** to appear more natural.

## 🔧 Customization

### Add More Tweets

Edit `src/tweets.js` and add your tweets to the `tweets` array:

```javascript
export const tweets = [
  "Your tweet here #hashtag",
  "Another tweet #coding",
  // Add more...
];
```

### Change Schedule

Edit `src/scheduler.js` and modify the `SCHEDULE` array:

```javascript
const SCHEDULE = [
  { time: "0 8 * * *", label: "08:00 AM" }, // Cron format
  { time: "30 13 * * *", label: "01:30 PM" },
  { time: "0 20 * * *", label: "08:00 PM" },
];
```

Cron format: `minute hour day month dayOfWeek`

## 🌐 Deployment

### Railway / VPS Deployment

1. Push code to GitHub
2. Connect to Railway/VPS
3. Set environment variables in dashboard
4. Deploy!

The bot will run 24/7 automatically.

### Health Check

Access the health endpoint to verify the bot is running:

```
http://localhost:8080/health
```

Response:

```json
{
  "status": "running",
  "timestamp": "2025-12-17T11:50:20.000Z",
  "auth": "OAuth 1.0a",
  "uptime": 3600
}
```

## 📝 Logs

The bot provides detailed logging:

- `[INFO]` - General information
- `[SUCCESS]` - Successful operations
- `[ERROR]` - Errors (bot continues running)

## ⚠️ Important Notes

- **OAuth 1.0a tokens are permanent** - no refresh logic needed
- **Bot never crashes** - errors are logged and execution continues
- **No duplicate consecutive tweets** - smart random selection
- **Production-ready** - stable for long-running deployments

## 🛠️ Tech Stack

- Node.js (ESM)
- twitter-api-v2
- node-cron
- express
- axios
- dotenv

## 📄 License

ISC
