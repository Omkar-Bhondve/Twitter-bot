# 🔄 Managing Multiple Twitter Accounts

This guide explains how to run multiple instances of the X Automation Bot for different Twitter accounts.

## 🎯 Overview

You can run the same bot code for multiple Twitter accounts by:

1. Creating separate folders for each account
2. Using different `.env` configurations
3. Setting unique `ACCOUNT_NAME` for each
4. Getting clear notifications showing which account posted

---

## 📁 Recommended Setup

```
Twitter-Bots/
├── account-main/
│   ├── src/
│   ├── .env          # Main account credentials
│   └── package.json
│
├── account-personal/
│   ├── src/
│   ├── .env          # Personal account credentials
│   └── package.json
│
└── account-business/
    ├── src/
    ├── .env          # Business account credentials
    └── package.json
```

---

## 🚀 Setup Steps

### Step 1: Clone the Bot for Each Account

```bash
# Create a folder for your bots
mkdir Twitter-Bots
cd Twitter-Bots

# Copy the bot for each account
cp -r x-automation account-main
cp -r x-automation account-personal
cp -r x-automation account-business
```

### Step 2: Configure Each Account

For **each folder**, update the `.env` file:

**account-main/.env:**

```env
# Account Identification
ACCOUNT_NAME=@MainAccount

# Twitter Credentials
API_KEY=main_account_api_key
API_SECRET=main_account_api_secret
ACCESS_TOKEN=main_account_access_token
ACCESS_TOKEN_SECRET=main_account_access_token_secret

# Server (use different ports!)
PORT=8080

# Telegram (same bot, same chat ID)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

**account-personal/.env:**

```env
# Account Identification
ACCOUNT_NAME=@PersonalAccount

# Twitter Credentials
API_KEY=personal_account_api_key
API_SECRET=personal_account_api_secret
ACCESS_TOKEN=personal_account_access_token
ACCESS_TOKEN_SECRET=personal_account_access_token_secret

# Server (different port!)
PORT=8081

# Telegram (same bot, same chat ID)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

**account-business/.env:**

```env
# Account Identification
ACCOUNT_NAME=@BusinessAccount

# Twitter Credentials
API_KEY=business_account_api_key
API_SECRET=business_account_api_secret
ACCESS_TOKEN=business_account_access_token
ACCESS_TOKEN_SECRET=business_account_access_token_secret

# Server (different port!)
PORT=8082

# Telegram (same bot, same chat ID)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id
```

### Step 3: Customize Tweets (Optional)

Edit `src/tweets.js` in each folder to have different tweet content for each account.

### Step 4: Run All Bots

**Option A: Run in separate terminals**

```bash
# Terminal 1
cd account-main
npm start

# Terminal 2
cd account-personal
npm start

# Terminal 3
cd account-business
npm start
```

**Option B: Use PM2 (Recommended for production)**

```bash
# Install PM2
npm install -g pm2

# Start all bots
cd account-main
pm2 start src/index.js --name "twitter-main"

cd ../account-personal
pm2 start src/index.js --name "twitter-personal"

cd ../account-business
pm2 start src/index.js --name "twitter-business"

# View all running bots
pm2 list

# Save configuration
pm2 save

# Setup auto-start on boot
pm2 startup
```

---

## 📱 Telegram Notifications

All bots can use the **same Telegram bot** and send to the **same chat ID** (you!).

### What You'll See:

**When Main Account posts:**

```
🐦 Tweet Posted Successfully!
📱 Account: @MainAccount

📝 Content:
Your tweet text here...

🔗 Link: https://twitter.com/i/web/status/123456
⏰ Time: Dec 19, 2025, 1:00 PM
```

**When Personal Account posts:**

```
🐦 Tweet Posted Successfully!
📱 Account: @PersonalAccount

📝 Content:
Different tweet text...

🔗 Link: https://twitter.com/i/web/status/789012
⏰ Time: Dec 19, 2025, 1:05 PM
```

**Clear identification!** You'll always know which account posted.

---

## ⚙️ Important Notes

### 1. **Different Ports**

Each bot needs a unique port number:

- Main: `PORT=8080`
- Personal: `PORT=8081`
- Business: `PORT=8082`

### 2. **Different API Credentials**

Each Twitter account needs its own set of API keys from the Twitter Developer Portal.

### 3. **Same Telegram Bot**

You can use the same Telegram bot token and chat ID for all accounts. The `ACCOUNT_NAME` will differentiate them.

### 4. **Different Schedules (Optional)**

You can customize posting times in `src/scheduler.js` for each account to avoid posting at the exact same time.

---

## 🔍 Monitoring Multiple Bots

### Health Checks

```bash
# Check Main Account
curl http://localhost:8080/health

# Check Personal Account
curl http://localhost:8081/health

# Check Business Account
curl http://localhost:8082/health
```

### PM2 Monitoring

```bash
# View all bots
pm2 list

# View logs for specific bot
pm2 logs twitter-main
pm2 logs twitter-personal
pm2 logs twitter-business

# View all logs
pm2 logs

# Monitor in real-time
pm2 monit
```

---

## 🎨 Account Name Examples

Choose clear, identifiable names:

**By Username:**

- `ACCOUNT_NAME=@johndoe`
- `ACCOUNT_NAME=@mybusiness`
- `ACCOUNT_NAME=@personalhandle`

**By Purpose:**

- `ACCOUNT_NAME=Main Account`
- `ACCOUNT_NAME=Personal`
- `ACCOUNT_NAME=Business`
- `ACCOUNT_NAME=Marketing`

**By Brand:**

- `ACCOUNT_NAME=Tech Blog`
- `ACCOUNT_NAME=Fitness Tips`
- `ACCOUNT_NAME=Daily Motivation`

---

## 🚨 Troubleshooting

### Port Already in Use

```
Error: Port 8080 is already in use
```

**Solution:** Use different ports in each `.env` file

### Wrong Account Posting

**Solution:** Double-check the `ACCOUNT_NAME` and API credentials in each `.env` file

### Notifications Not Showing Account

**Solution:** Make sure `ACCOUNT_NAME` is set in the `.env` file and bot is restarted

---

## ✅ Checklist for Each Account

- [ ] Separate folder created
- [ ] Unique `ACCOUNT_NAME` set
- [ ] Correct Twitter API credentials
- [ ] Unique `PORT` number
- [ ] Telegram credentials added (same for all)
- [ ] Custom tweets added (optional)
- [ ] Bot started successfully
- [ ] Received startup notification with correct account name

---

## 🎯 Benefits

✅ **Clear identification** - Always know which account posted
✅ **Centralized notifications** - All alerts in one Telegram chat
✅ **Easy management** - Same codebase, different configs
✅ **Scalable** - Add more accounts easily
✅ **Independent operation** - Each bot runs separately

---

**You're all set to manage multiple Twitter accounts with ease! 🚀**
