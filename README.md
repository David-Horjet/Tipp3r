# Tipp3r 💸 – A Web3 Creator Donation Platform

Tipp3r is a decentralized Web3 donation platform that allows creators to share donation links and receive **SOL** seamlessly. Powered by **Reown AppKit**, Tipp3r simplifies wallet authentication, transactions, and on-ramp/off-ramp services, making it super easy for supporters to tip their favorite creators.

## 🚀 Features

- 🔑 **Seamless Authentication** – Users can log in using their Reown AppKit wallet, social login, or email.
- 💰 **Instant Donations** – Supporters can send **SOL** directly to a creator's wallet.
- 🔄 **On-Ramp Support** – Users can easily buy crypto if they don't have SOL.
- 📜 **Transaction History** – Users can view their recent donations and transaction details.
- 🛠️ **Built on Solana** – Fast, low-cost transactions.

## 🛠️ Tech Stack

- **Next.js** (React + Server Components)
- **TypeScript** (Strict typing for reliability)
- **Solana Web3** (Transaction processing)
- **Reown AppKit** (Authentication, payments, and wallet services)
- **Supabase** (Database for storing creator info)

## ⚡ Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/David-Horjet/tipp3r.git
cd tipp3r
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_PROJECT_ID=your_reown_app_id
```

### 4️⃣ Run the Development Server

```sh
npm run dev
```

Your app should now be running at http://localhost:3000 🚀.

## 💡 How It Works

1. **Creator Signup** – Creators register and link their wallet.
2. **Share Link** – Creators share their unique donation link.
3. **Supporters Donate** – Anyone can send SOL with just a few clicks.
4. **Funds Received** – Donations go directly to the creator's wallet.

## 🖥️ Running in Production

To build and start the production server:

```sh
npm run build
npm start
```

## 🔗 API & Transactions

Tipp3r uses Reown AppKit for Web3 transactions. Here's how donations are processed:

1. Fetch the creator's wallet address from Supabase.
2. Use Reown AppKit's `sendTransaction` method to send SOL.
3. Wait for the transaction to be confirmed.
4. Show success message & update transaction history.

## 🎯 Future Improvements

- ✅ Multi-token support (USDC, USDT, etc.)
- ✅ Creator profiles & analytics
- ✅ NFT-based membership system
- ✅ Mobile app version

## 📜 License

This project is open-source under the MIT License.

## 🛠️ Contributing

PRs are welcome! If you'd like to contribute:

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Open a pull request

## 🔗 Connect With Me

- 🐦 Twitter: @david_horjet
- 👨‍💻 GitHub: David-Horjet

💙 Built with love for the Web3 community!
