import React from "react";
import "./styles.css";

function page() {
  return (
    <div className="min-h-screen bg-[#020618] text-white">
      <div className="relative overflow-hidden loyalific-banner">
        <div className="container mx-auto px-4">
          <div className=" text-start max-w-[550px]">
            <span className="inline-flex rounded-3xl px-4 py-1 text-xs font-semibold uppercase text-white border border-white">
              Case Study
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#a78bfa]">
              Loyalific
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white">
              Build digital loyalty cards that keep customers coming back.
              Reward repeat visits, gain valuable customer insights, and send
              targeted updates and offers directly to your customer's mobile
              wallets. All without requiring them to download an app.
            </p>
          </div>
        </div>
      </div>

      {/* Platform in Action Section */}
      <div className="bg-[#020618] border-t border-white/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Loyalific Delivers
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Powerful tools to manage loyalty programs, engage customers, and
              grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-[32px] border bg-[#060621] border-white/10 bg-white/5 p-6 transition hover:border-white/50">
              <div className="mb-6 rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/loyalty-card.jpeg"
                  alt="Digital Loyalty Cards"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-2xl bg-[#17A697]/15 flex items-center justify-center text-white font-bold">
                  01
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Digital Loyalty Cards
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Create and manage fully customizable digital loyalty cards with
                flexible reward structures. Businesses can design branded
                loyalty programs that motivate customers to return and unlock
                rewards through ongoing engagement.
              </p>
            </div>

            <div className="rounded-[32px] border bg-[#060621] border-white/10 bg-white/5 p-6 transition hover:border-white/50">
              <div className="mb-6 rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/customer.jpeg"
                  alt="Customer Engagement"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-2xl bg-[#17A697]/15 flex items-center justify-center text-white font-bold">
                  02
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Customer Engagement
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Keep customers connected with real-time push notifications,
                personalized promotions, and targeted campaigns. Loyalific helps
                businesses communicate effectively and drive customer activity
                through timely updates and reward reminders.
              </p>
            </div>

            <div className="rounded-[32px] border bg-[#060621] border-white/10 bg-white/5 p-6 transition hover:border-white/50">
              <div className="mb-6 rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/overview.jpeg"
                  alt="Customer Management"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-2xl bg-[#17A697]/15 flex items-center justify-center text-white font-bold">
                  03
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Customer Management
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Manage customer profiles, loyalty progress, reward history, and
                engagement data from a centralized dashboard. Gain valuable
                insights into customer behavior and improve retention strategies
                with actionable data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* A Closer Look Section */}
      <div className="bg-[#020618] py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              A Closer Look At Loyalific
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Explore the platform's powerful dashboard and modules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div className="rounded-2xl border bg-[#060621] border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/overview.jpeg"
                  alt="Dashboard Overview"
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                Dashboard Overview
              </h3>
              <p className="text-sm text-gray-300">
                Get a complete overview of your loyalty program from a
                centralized dashboard. Monitor loyalty cards, customers,
                branches, managers, and overall platform activity in real-time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/push-massage.jpeg"
                  alt="Push Messages"
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                Push Messages
              </h3>
              <p className="text-sm text-gray-300">
                Send real-time promotional messages, offers, and loyalty updates
                directly to customers' devices to increase engagement and
                encourage repeat purchases.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/customer.jpeg"
                  alt="Customers"
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                Customers
              </h3>
              <p className="text-sm text-gray-300">
                Manage all loyalty program members from a single location. View
                customer profiles, contact information, loyalty cards, reward
                progress, stamp history, and engagement activity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/web-stamper.jpeg"
                  alt="Web Stamper"
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                Web Stamper
              </h3>
              <p className="text-sm text-gray-300">
                A QR-based stamping system that allows businesses to instantly
                add or deduct loyalty stamps by scanning customer QR codes,
                making the reward process seamless and efficient.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#060621] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="mb-4 rounded-xl overflow-hidden border border-white/10">
                <img
                  src="/assets/portfolio/loyalific/loyalty-card.jpeg"
                  alt="Loyalty Cards"
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-md font-semibold text-[#d6cff7] mb-2">
                Loyalty Cards
              </h3>
              <p className="text-sm text-gray-300">
                Design, customize, and manage digital stamp cards with advanced
                reward settings, branding options, and wallet integrations
                including Apple Wallet and Google Wallet support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions Section */}
      <div className="bg-[#020618] py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Challenges & Solution
            </h2>
            <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Turning Challenges Into Powerful Solutions
            </p>
          </div>

          <div className="challenge-solution-box grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Challenges Column */}
            <div className="space-y-5 max-w-[430px]">
              <h3 className="text-xl font-bold text-[#ff5555] mb-6">Challenges</h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                    <span className="text-[#ff5555] font-bold text-lg">✕</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Manual loyalty tracking was time-consuming and error-prone.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                    <span className="text-[#ff5555] font-bold text-lg">✕</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Businesses lacked a digital solution for customer engagement.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                    <span className="text-[#ff5555] font-bold text-lg">✕</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  No effective way to send real-time updates and offers.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#ff5555]/20 border border-[#ff5555]/40">
                    <span className="text-[#ff5555] font-bold text-lg">✕</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tracking customer activity and rewards was difficult.
                </p>
              </div>
            </div>

            {/* Center Logo/Icon */}
            <div className="flex justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-[#a78bfa] rounded-full blur-3xl opacity-60" />
                <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#7c3aed] flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.4)]">
                  <span className="text-7xl font-bold text-white">L</span>
                </div>
              </div>
            </div>

            {/* Solutions Column */}
            <div className="space-y-5 max-w-[430px]">
              <h3 className="text-xl font-bold text-[#1cb403] mb-6">Our Solution</h3>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                    <span className="text-[#1cb403] font-bold text-lg">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Automated loyalty program with digital stamp cards.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                    <span className="text-[#1cb403] font-bold text-lg">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Real-time push notifications to boost engagement.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                    <span className="text-[#1cb403] font-bold text-lg">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  QR code based stamping for quick & easy rewards.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1cb403]/20 border border-[#1cb403]/40">
                    <span className="text-[#1cb403] font-bold text-lg">✓</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Centralized dashboard to manage customers, cards, branches and staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
}

export default page;
