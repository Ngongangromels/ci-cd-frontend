
"use client";

import { useState } from "react";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 1800));
        setIsLoading(false);
    };

    return (
        <div className="signin-root">
            {/* Background */}
            <div className="bg-layer" aria-hidden="true">
                <div className="bg-gradient" />
                <div className="bg-grid" />
                <div className="bg-orb orb-1" />
                <div className="bg-orb orb-2" />
                <div className="bg-orb orb-3" />
            </div>

            {/* Content */}
            <main className="main-layout">
                {/* Left panel — branding */}
                <aside className="brand-panel">
                    <div className="brand-inner">
                        <div className="logo-mark">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <polygon
                                    points="24,4 44,36 4,36"
                                    stroke="url(#g1)"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <polygon
                                    points="24,14 38,38 10,38"
                                    stroke="url(#g1)"
                                    strokeWidth="1"
                                    fill="none"
                                    opacity="0.4"
                                />
                                <defs>
                                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#d4af6a" />
                                        <stop offset="100%" stopColor="#f0d080" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="brand-text">
                            <h1 className="brand-name">AURUM</h1>
                            <p className="brand-tagline">Private Access Portal</p>
                        </div>

                        <div className="brand-quote">
                            <blockquote>
                                "Excellence is not a skill.<br />
                                It is an attitude."
                            </blockquote>
                            <cite>— Ralph Marston</cite>
                        </div>

                        <div className="brand-stats">
                            {[
                                { value: "99.9%", label: "Uptime" },
                                { value: "256-bit", label: "Encryption" },
                                { value: "ISO 27001", label: "Certified" },
                            ].map((s) => (
                                <div className="stat-item" key={s.label}>
                                    <span className="stat-value">{s.value}</span>
                                    <span className="stat-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Right panel — form */}
                <section className="form-panel">
                    <div className="form-card">
                        <div className="card-header">
                            <h2 className="card-title">Welcome back</h2>
                            <p className="card-sub">Sign in to your account to continue</p>
                        </div>

                        {/* Social buttons */}
                        <div className="social-row">
                            {[
                                {
                                    label: "Google",
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                                            <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
                                            <path d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                                            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
                                        </svg>
                                    ),
                                },
                                {
                                    label: "GitHub",
                                    icon: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    ),
                                },
                            ].map((btn) => (
                                <button key={btn.label} className="social-btn">
                                    {btn.icon}
                                    <span>{btn.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="divider">
                            <span>or continue with email</span>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className={`field-group ${focusedField === "email" ? "focused" : ""} ${email ? "filled" : ""}`}>
                                <label className="field-label" htmlFor="email">Email address</label>
                                <div className="field-wrap">
                                    <svg className="field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        required
                                        className="field-input"
                                    />
                                </div>
                                <div className="field-line" />
                            </div>

                            <div className={`field-group ${focusedField === "password" ? "focused" : ""} ${password ? "filled" : ""}`}>
                                <label className="field-label" htmlFor="password">Password</label>
                                <div className="field-wrap">
                                    <svg className="field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                    </svg>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setFocusedField("password")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="••••••••"
                                        autoComplete="current-password"
                                        required
                                        className="field-input"
                                    />
                                    <button
                                        type="button"
                                        className="toggle-visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label="Toggle password visibility"
                                    >
                                        {showPassword ? (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                                                <line x1="1" y1="1" x2="23" y2="23"/>
                                            </svg>
                                        ) : (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className="field-line" />
                            </div>

                            <div className="form-meta">
                                <label className="remember-me">
                                    <input type="checkbox" className="remember-check" />
                                    <span className="check-box" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="forgot-link">Forgot password?</a>
                            </div>

                            <button type="submit" className={`submit-btn ${isLoading ? "loading" : ""}`} disabled={isLoading}>
                                {isLoading ? (
                                    <span className="btn-loader">
                    <span className="loader-ring" />
                    Authenticating…
                  </span>
                                ) : (
                                    <span className="btn-text">
                    Sign In
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12,5 19,12 12,19"/>
                    </svg>
                  </span>
                                )}
                            </button>
                        </form>

                        <p className="signup-prompt">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="signup-link">Request access →</a>
                        </p>
                    </div>
                </section>
            </main>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .signin-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
          background: #0a0a0c;
          font-family: 'DM Sans', sans-serif;
          color: #e8e4dc;
          overflow: hidden;
        }

        /* ── Background ── */
        .bg-layer { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
        .bg-gradient {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 50%, #1a1408 0%, #0a0a0c 60%);
        }
        .bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(212,175,106,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,106,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .bg-orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.18;
          animation: drift 12s ease-in-out infinite alternate;
        }
        .orb-1 { width: 520px; height: 520px; background: #c8922a; top: -10%; right: 5%; animation-duration: 14s; }
        .orb-2 { width: 320px; height: 320px; background: #8b6914; bottom: 5%; right: 25%; animation-duration: 10s; animation-delay: -4s; }
        .orb-3 { width: 200px; height: 200px; background: #d4af6a; top: 50%; left: 5%; opacity: 0.08; animation-duration: 16s; }
        @keyframes drift {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(-30px) scale(1.06); }
        }

        /* ── Layout ── */
        .main-layout {
          position: relative; z-index: 1;
          display: flex; min-height: 100vh;
        }

        /* ── Brand panel ── */
        .brand-panel {
          flex: 0 0 42%;
          display: none;
          padding: 4rem;
          border-right: 1px solid rgba(212,175,106,0.1);
          position: relative;
        }
        @media (min-width: 1024px) { .brand-panel { display: flex; align-items: center; } }

        .brand-inner {
          display: flex; flex-direction: column; gap: 3rem;
          animation: fadeUp 0.9s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .logo-mark { display: flex; align-items: center; }

        .brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem; font-weight: 300; letter-spacing: 0.35em;
          background: linear-gradient(135deg, #d4af6a, #f0d080, #c8922a);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .brand-tagline {
          font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase;
          color: rgba(212,175,106,0.5); margin-top: 0.4rem;
        }

        .brand-quote blockquote {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.3rem; font-weight: 300;
          line-height: 1.7; color: rgba(232,228,220,0.7);
        }
        .brand-quote cite {
          display: block; margin-top: 0.75rem;
          font-size: 0.72rem; letter-spacing: 0.15em;
          color: rgba(212,175,106,0.5);
        }

        .brand-stats {
          display: flex; gap: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(212,175,106,0.1);
        }
        .stat-value {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem; font-weight: 400;
          color: #d4af6a;
        }
        .stat-label {
          display: block; margin-top: 0.2rem;
          font-size: 0.68rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: rgba(232,228,220,0.4);
        }

        /* ── Form panel ── */
        .form-panel {
          flex: 1;
          display: flex; align-items: center; justify-content: center;
          padding: 2rem;
        }

        .form-card {
          width: 100%; max-width: 420px;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(212,175,106,0.12);
          border-radius: 20px;
          padding: 2.5rem 2.5rem 2rem;
          backdrop-filter: blur(20px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
          animation: cardIn 0.8s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: 0.1s;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .card-header { margin-bottom: 1.75rem; }
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.1rem; font-weight: 400; letter-spacing: 0.02em;
          color: #f0ece4;
        }
        .card-sub {
          margin-top: 0.35rem;
          font-size: 0.82rem; color: rgba(232,228,220,0.45); font-weight: 300;
        }

        /* ── Social ── */
        .social-row { display: flex; gap: 0.75rem; margin-bottom: 1.25rem; }
        .social-btn {
          flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          padding: 0.65rem 1rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,106,0.12);
          border-radius: 10px;
          color: rgba(232,228,220,0.7);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 400;
          cursor: pointer;
          transition: all 0.2s;
        }
        .social-btn:hover {
          background: rgba(212,175,106,0.08);
          border-color: rgba(212,175,106,0.3);
          color: #e8e4dc;
          transform: translateY(-1px);
        }

        /* ── Divider ── */
        .divider {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 1.5rem;
          font-size: 0.72rem; letter-spacing: 0.08em;
          color: rgba(232,228,220,0.3); text-transform: uppercase;
        }
        .divider::before, .divider::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(212,175,106,0.1);
        }

        /* ── Form fields ── */
        .auth-form { display: flex; flex-direction: column; gap: 1.25rem; }

        .field-group { display: flex; flex-direction: column; gap: 0.4rem; position: relative; }

        .field-label {
          font-size: 0.72rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(232,228,220,0.4);
          transition: color 0.2s;
        }
        .field-group.focused .field-label { color: #d4af6a; }

        .field-wrap {
          position: relative; display: flex; align-items: center;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,175,106,0.1);
          border-radius: 10px;
          transition: border-color 0.2s, background 0.2s;
          overflow: hidden;
        }
        .field-group.focused .field-wrap {
          border-color: rgba(212,175,106,0.4);
          background: rgba(212,175,106,0.04);
        }

        .field-icon {
          position: absolute; left: 14px;
          color: rgba(212,175,106,0.4);
          pointer-events: none;
          transition: color 0.2s;
        }
        .field-group.focused .field-icon { color: #d4af6a; }

        .field-input {
          width: 100%; padding: 0.75rem 2.8rem 0.75rem 2.8rem;
          background: transparent; border: none; outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 300;
          color: #e8e4dc;
          caret-color: #d4af6a;
        }
        .field-input::placeholder { color: rgba(232,228,220,0.2); }

        .toggle-visibility {
          position: absolute; right: 12px;
          background: none; border: none; cursor: pointer;
          color: rgba(232,228,220,0.3);
          display: flex; align-items: center;
          transition: color 0.2s;
          padding: 4px;
        }
        .toggle-visibility:hover { color: #d4af6a; }

        .field-line {
          height: 1px; background: linear-gradient(90deg, #d4af6a, transparent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s ease;
        }
        .field-group.focused .field-line { transform: scaleX(1); }

        /* ── Form meta ── */
        .form-meta {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: -0.25rem;
        }
        .remember-me {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 0.8rem; color: rgba(232,228,220,0.45);
          cursor: pointer; user-select: none;
        }
        .remember-check { display: none; }
        .check-box {
          width: 16px; height: 16px;
          border: 1px solid rgba(212,175,106,0.25);
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .remember-check:checked + .check-box {
          background: linear-gradient(135deg, #c8922a, #d4af6a);
          border-color: transparent;
        }

        .forgot-link {
          font-size: 0.78rem; color: rgba(212,175,106,0.5);
          text-decoration: none; transition: color 0.2s;
        }
        .forgot-link:hover { color: #d4af6a; }

        /* ── Submit ── */
        .submit-btn {
          margin-top: 0.25rem;
          padding: 0.85rem;
          background: linear-gradient(135deg, #c8922a 0%, #d4af6a 50%, #b87d22 100%);
          background-size: 200% 200%;
          border: none; border-radius: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 500;
          letter-spacing: 0.05em;
          color: #0a0a0c;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 24px rgba(200,146,42,0.25);
        }
        .submit-btn:hover:not(:disabled) {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(200,146,42,0.4);
        }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn.loading { opacity: 0.8; cursor: not-allowed; }

        .btn-text { display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .btn-loader { display: flex; align-items: center; justify-content: center; gap: 0.6rem; }
        .loader-ring {
          width: 16px; height: 16px;
          border: 2px solid rgba(10,10,12,0.3);
          border-top-color: #0a0a0c;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Signup prompt ── */
        .signup-prompt {
          margin-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(232,228,220,0.35);
        }
        .signup-link {
          color: rgba(212,175,106,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .signup-link:hover { color: #d4af6a; }
      `}</style>
        </div>
    );
}