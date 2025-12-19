# 📱 Telegram Notifications Setup Guide

Get instant notifications on your phone every time a tweet is posted!

## 🎯 What You'll Get

When Telegram notifications are enabled, you'll receive:

1. **🚀 Bot Started Notification** - When the bot starts successfully
2. **🐦 Tweet Posted Notification** - Every time a tweet goes live (includes tweet content and direct link)
3. **❌ Error Notifications** - If something goes wrong

## 📋 Setup Steps

### Step 1: Create Your Telegram Bot

1. Open **Telegram** app
2. Search for `@BotFather`
3. Start a chat and send: `/newbot`
4. Choose a name for your bot (e.g., "My Twitter Bot")
5. Choose a username (must end in 'bot', e.g., "my_twitter_bot")
6. **Copy the Bot Token** you receive (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Your Chat ID

1. Search for `@userinfobot` on Telegram
2. Start a chat with it
3. It will send you your **Chat ID** (a number like: `123456789`)
4. Copy this number

### Step 3: Add Credentials to .env File

Open your `.env` file and add these two lines:

```env
TELEGRAM_BOT_TOKEN=paste_your_bot_token_here
TELEGRAM_CHAT_ID=paste_your_chat_id_here
```

**Example:**

```env
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=987654321
```

### Step 4: Start Your Bot on Telegram

1. Find your bot on Telegram (search for the username you created)
2. Send `/start` to activate it
3. You're all set!

### Step 5: Test It

Restart your X Automation Bot:

```bash
npm start
```

You should immediately receive a **"Bot Started"** notification on Telegram! 🎉

## 📱 Notification Examples

### Bot Started

```
🚀 X Automation Bot Started

✅ Status: Running
⏰ Started at: Dec 19, 2025, 10:30 AM
🔐 Auth: OAuth 1.0a

📅 Schedule:
• 09:00 AM
• 10:30 AM
• 01:00 PM
• 03:00 PM
• 06:00 PM

🔔 You'll receive notifications for each tweet posted!
```

### Tweet Posted

```
🐦 Tweet Posted Successfully!

📝 Content:
Discipline is choosing long-term respect over short-term comfort...

🔗 Link: https://twitter.com/i/web/status/1234567890

⏰ Time: Dec 19, 2025, 1:00 PM

✅ Status: Live on X (Twitter)
```

### Error Notification

```
❌ Tweet Posting Failed

⚠️ Error:
API rate limit exceeded

⏰ Time: Dec 19, 2025, 3:00 PM

💡 Action: Check bot logs for details
```

## ❓ Troubleshooting

### Not receiving notifications?

1. **Check bot token and chat ID** - Make sure they're correct in `.env`
2. **Start the bot** - Send `/start` to your bot on Telegram
3. **Check logs** - Look for `[SUCCESS] Telegram notification sent!` in console
4. **Verify .env file** - Make sure there are no extra spaces or quotes

### "Telegram notifications not configured (skipping)"

This message appears if `TELEGRAM_BOT_TOKEN` or `TELEGRAM_CHAT_ID` are missing from `.env`. This is normal if you haven't set them up yet - the bot will work fine without notifications!

## 🔒 Security Notes

- **Never share your bot token** - It gives full control of your bot
- **Keep your chat ID private** - Others could send you spam
- **Add `.env` to `.gitignore`** - Already done! Never commit credentials to Git

## 🎨 Customization

Want to customize notification messages? Edit `src/telegram.js`:

- `notifyBotStarted()` - Bot startup message
- `notifyTweetPosted()` - Tweet posted message
- `notifyError()` - Error message

## ✅ Benefits

- **Peace of mind** - Know your bot is working
- **Instant feedback** - See tweets as they go live
- **Error alerts** - Get notified if something breaks
- **Tweet links** - Direct links to view your tweets
- **No checking required** - Bot keeps you updated automatically

---

**That's it! You're now getting real-time notifications for your automated tweets! 🚀**
