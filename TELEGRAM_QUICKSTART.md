# 🔔 Quick Start: Telegram Notifications

## ⚡ 3-Minute Setup

### 1️⃣ Create Bot (1 minute)

```
1. Open Telegram
2. Search: @BotFather
3. Send: /newbot
4. Name it: "My Twitter Bot" (or anything)
5. Username: "my_twitter_bot" (must end with 'bot')
6. Copy the TOKEN
```

### 2️⃣ Get Chat ID (30 seconds)

```
1. Search: @userinfobot
2. Start chat
3. Copy your ID number
```

### 3️⃣ Update .env (30 seconds)

```env
# Identify which account this is (useful for multiple bots)
ACCOUNT_NAME=Main Account

# Telegram credentials
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=987654321
```

**💡 Tip for Multiple Accounts:**

- Set `ACCOUNT_NAME` to something like "@username" or "Personal Account"
- This shows clearly in notifications which account posted!

### 4️⃣ Activate (30 seconds)

```
1. Find your bot on Telegram
2. Send: /start
3. Run: npm start
4. ✅ You'll get a notification!
```

---

## 📱 What You'll Receive

### Every Time Bot Starts:

```
🚀 X Automation Bot Started
📱 Account: Main Account
✅ Status: Running
⏰ Started at: Dec 19, 2025, 10:30 AM
```

### Every Time a Tweet Posts:

```
🐦 Tweet Posted Successfully!
📱 Account: Main Account
📝 Content: [Your tweet text]
🔗 Link: [Direct link to tweet]
⏰ Time: Dec 19, 2025, 1:00 PM
```

### If Something Goes Wrong:

```
❌ Tweet Posting Failed
📱 Account: Main Account
⚠️ Error: [Error details]
💡 Action: Check bot logs
```

---

## ❓ Not Working?

**Check these:**

- [ ] Bot token is correct (no spaces)
- [ ] Chat ID is correct (just numbers)
- [ ] You sent `/start` to your bot
- [ ] `.env` file is in the root folder
- [ ] Bot is restarted after adding credentials

**Still stuck?** Check `TELEGRAM_SETUP.md` for detailed troubleshooting.

---

## 🎯 Optional Feature

**Don't want notifications?**

- Just leave `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` empty
- Bot works perfectly fine without them!

---

**That's it! Simple, fast, and effective. 🚀**
