"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Cog } from "lucide-react";

export default function MaintenancePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Grainy Texture Overlay */}
      <div className="grain-overlay" />

      <div className="relative min-h-screen w-full overflow-hidden bg-[var(--white-arctic)]">
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue gradient blob - top left */}
          <div
            className="absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-[120px] transition-all duration-[3000ms] md:-left-20 md:-top-20 md:h-[600px] md:w-[600px]"
            style={{
              background: "radial-gradient(circle, var(--blue-500) 0%, var(--blue-200) 100%)",
              animation: "float 8s ease-in-out infinite",
            }}
          />

          {/* Green gradient blob - bottom right */}
          <div
            className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full opacity-40 blur-[120px] transition-all duration-[3000ms] md:-bottom-20 md:-right-20 md:h-[600px] md:w-[600px]"
            style={{
              background: "radial-gradient(circle, var(--green-500) 0%, var(--green-200) 100%)",
              animation: "float 10s ease-in-out infinite reverse",
            }}
          />

          {/* Yellow accent blob - center */}
          <div
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px] md:h-96 md:w-96"
            style={{
              background: "radial-gradient(circle, var(--yellow-500) 0%, var(--yellow-100) 100%)",
              animation: "pulse 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div
            className={`w-full max-w-2xl transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
          >
            {/* Logo */}
            <div className="mb-8 flex items-center justify-center gap-4 md:mb-12">
              {/* Logo */}
              <Image
                src="/logo/logo.svg"
                alt="Pintarly Logo"
                width={80}
                height={80}
                className="h-20 w-20 transition-transform duration-300 hover:scale-105 md:h-24 md:w-24"
                priority
              />

              {/* Spinning Gear */}
              <Cog
                className="h-12 w-12 text-[var(--blue-600)] md:h-14 md:w-14"
                style={{ animation: 'spin 3s linear infinite' }}
              />
            </div>

            {/* Main Card */}
            <div className="rounded-[32px] bg-white/80 p-8 shadow-2xl ring-1 ring-[var(--neutral-200)] backdrop-blur-sm transition-all duration-300 hover:shadow-3xl md:rounded-[40px] md:p-12">
              {/* Status Badge */}
              <div className="mb-6 flex justify-center">
                <div className="flex items-center gap-2 rounded-full bg-[var(--yellow-100)] px-4 py-2 md:px-5 md:py-2.5">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--yellow-500)] opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--yellow-600)]"></span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--black-charcoal)] md:text-base">
                    Sedang Maintenance
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1
                className="mb-4 text-center font-['Outfit'] text-3xl font-bold leading-tight text-[var(--black-charcoal)] md:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Kami Sedang Melakukan Perbaikan
              </h1>

              {/* Description */}
              <p className="mb-8 text-center text-base leading-relaxed text-[var(--neutral-600)] md:text-lg md:leading-relaxed">
                Pintarly sedang dalam proses pemeliharaan untuk menambahkan fitur-fitur baru yang akan meningkatkan pengalaman belajar Anda.
                Kami akan segera kembali dengan fitur dan performa yang lebih baik!
              </p>

              {/* Estimated Time Card */}
              <div className="mb-8 rounded-2xl bg-gradient-to-br from-[var(--blue-50)] to-[var(--green-50)] p-6 md:rounded-3xl">
                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center">
                  <svg
                    className="h-6 w-6 text-[var(--blue-600)] md:h-7 md:w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-[var(--neutral-600)] md:text-base">
                      Estimasi Waktu Penyelesaian
                    </p>
                    <p className="font-['Outfit'] text-lg font-bold text-[var(--black-charcoal)] md:text-xl">
                      2-3 Jam
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Cards Grid */}
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
                {/* Contact Card */}
                <div className="group rounded-2xl border border-[var(--neutral-200)] bg-white p-5 transition-all duration-300 hover:border-[var(--blue-400)] hover:shadow-lg md:rounded-3xl md:p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--blue-400)] to-[var(--blue-600)] transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-['Outfit'] text-base font-semibold text-[var(--black-charcoal)] md:text-lg">
                    Butuh Bantuan?
                  </h3>
                  <p className="text-sm text-[var(--neutral-600)] md:text-base">
                    Hubungi kami di{" "}
                    <a
                      href="mailto:support@pintarly.com"
                      className="font-semibold text-[var(--blue-600)] transition-colors hover:text-[var(--blue-700)]"
                    >
                      support@pintarly.com
                    </a>
                  </p>
                </div>

                {/* Status Updates Card */}
                <div className="group rounded-2xl border border-[var(--neutral-200)] bg-white p-5 transition-all duration-300 hover:border-[var(--green-400)] hover:shadow-lg md:rounded-3xl md:p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--green-400)] to-[var(--green-600)] transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 font-['Outfit'] text-base font-semibold text-[var(--black-charcoal)] md:text-lg">
                    Pantau Status
                  </h3>
                  <p className="text-sm text-[var(--neutral-600)] md:text-base">
                    Ikuti pembaruan di media sosial kami
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Text */}
            <p className="mt-8 text-center text-sm text-[var(--neutral-500)] md:text-base">
              Terima kasih atas kesabaran Anda 🙏
            </p>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(-10px) translateX(-10px);
            }
            75% {
              transform: translateY(-30px) translateX(5px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.2;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.3;
            }
          }
        `}</style>
      </div>
    </>
  );
}
