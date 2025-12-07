import { useState, type FormEvent } from 'react'

type LoginPageProps = {
  onClose?: () => void
  onSuccess?: () => void
}

function LoginPage({ onClose, onSuccess }: LoginPageProps = {}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [banner, setBanner] = useState<{ type: 'error' | 'success'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setBanner(null)
    setIsLoading(true)

    try {
      if (!email || !password) {
        setBanner({ type: 'error', text: 'Please fill in all fields before continuing.' })
        return
      }

      if (!email.includes('@')) {
        setBanner({ type: 'error', text: 'Please enter a valid email address.' })
        return
      }

      await new Promise(resolve => setTimeout(resolve, 1200))

      setBanner({ type: 'success', text: 'Login successful! Preparing your workspace...' })
      await new Promise(resolve => setTimeout(resolve, 900))

      console.log('Login successful:', { email, password, rememberMe })
      setEmail('')
      setPassword('')
      setRememberMe(true)
      onSuccess?.()
    } catch {
      setBanner({ type: 'error', text: 'Login failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4 py-10">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" aria-hidden="true"></div>

      <div className="absolute -top-16 -left-8 h-72 w-72 animate-pulse rounded-full bg-purple-500/30 blur-3xl" style={{ animationDuration: '5s' }} aria-hidden="true"></div>
      <div className="absolute -top-24 right-0 h-80 w-80 animate-pulse rounded-full bg-indigo-500/30 blur-3xl" style={{ animationDuration: '6s', animationDelay: '1s' }} aria-hidden="true"></div>
      <div className="absolute bottom-0 left-1/2 h-96 w-96 animate-pulse rounded-full bg-pink-500/30 blur-3xl" style={{ animationDuration: '7s', animationDelay: '2s' }} aria-hidden="true"></div>

      <div className="relative w-full max-w-5xl" style={{ animation: 'scale-in 0.6s ease-out' }}>
        <div className="grid items-center gap-10 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-3xl shadow-2xl shadow-indigo-900/40 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 shadow-lg shadow-purple-900/20" style={{ animation: 'slide-down 0.6s ease-out' }}>
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Realtime analytics enabled
            </div>
            <div className="space-y-4" style={{ animation: 'slide-down 0.7s ease-out' }}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Aurora Identity</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Secure access for modern product teams
              </h1>
              <p className="text-lg text-white/80">
                Experience a refined authentication flow with beautiful micro-interactions, live validation,
                and enterprise-grade security baked right in.
              </p>
            </div>

            <div className="grid gap-4 text-sm sm:grid-cols-2" style={{ animation: 'fade-in 0.9s ease-out' }}>
              {[{
                label: 'Passkeys + MFA',
                description: 'Adaptive security that learns from every session.'
              }, {
                label: 'Session insights',
                description: 'Visualize activity with intelligent anomaly alerts.'
              }].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
                  <p className="mt-2 text-base text-white/90">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 text-sm" style={{ animation: 'fade-in 1s ease-out' }}>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse"></span>
                99.99% uptime SLA
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
                SOC 2 Type II compliant
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink-300"></span>
                Instant webhooks
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 top-0 -z-10 h-40 rounded-3xl bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-pink-500/40 blur-3xl" aria-hidden="true"></div>
            <div className="rounded-3xl bg-white/95 p-8 shadow-2xl" style={{ animation: 'slide-up 0.7s ease-out' }}>
              <div className="relative mb-8">
                <div className="absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-px shadow-xl shadow-purple-500/40">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                    <svg className="h-9 w-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 6.75L12 3l8.5 3.75v7.5L12 18l-8.5-3.75v-7.5z" />
                    </svg>
                  </div>
                </div>
                {onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-0 top-0 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                    aria-label="Close login form"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-900">Welcome back</h2>
                <p className="mt-1 text-sm text-slate-500">Sign in to continue to Aurora</p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {banner && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm shadow-sm ${
                      banner.type === 'error'
                        ? 'border-red-200 bg-red-50 text-red-700'
                        : 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    }`}
                    style={{ animation: `${banner.type === 'error' ? 'shake 0.5s' : 'pulse-success 0.7s'} ease-out` }}
                  >
                    <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      {banner.type === 'error' ? (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      ) : (
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      )}
                    </svg>
                    <span className="flex-1 font-medium">{banner.text}</span>
                  </div>
                )}

                <div className="space-y-2" style={{ animation: 'slide-up 0.7s ease-out' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-600">
                    Email
                  </label>
                  <div className="relative group">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition group-focus-within:text-indigo-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </span>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@aurora.dev"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-3.5 text-base text-slate-900 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>
                </div>

                <div className="space-y-2" style={{ animation: 'slide-up 0.8s ease-out' }}>
                  <label htmlFor="password" className="block text-sm font-semibold text-slate-600">
                    Password
                  </label>
                  <div className="relative group">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 transition group-focus-within:text-indigo-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-3.5 text-base text-slate-900 shadow-sm transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:bg-slate-100"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3" style={{ animation: 'fade-in 0.9s ease-out' }}>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      disabled={isLoading}
                    />
                    Remember me
                  </label>
                  <a href="#forgot" className="text-sm font-semibold text-indigo-600 transition hover:text-purple-600">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-3.5 font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:shadow-xl disabled:cursor-not-allowed"
                  style={{
                    animation: isLoading ? 'shimmer 2s linear infinite' : 'slide-up 1s ease-out',
                    backgroundSize: isLoading ? '200% 100%' : '100%'
                  }}
                >
                  {isLoading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true"></span>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      Continue
                      <svg className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400" style={{ animation: 'fade-in 1s ease-out' }}>
                  Secured with passkeys, MFA and anomaly detection
                </p>
              </form>

              <div className="mt-8 space-y-6 border-t border-slate-100 pt-6" style={{ animation: 'fade-in 1.1s ease-out' }}>
                <p className="text-center text-sm text-slate-500">
                  Or continue with
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[{
                    label: 'Google',
                    icon: (
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    )
                  }, {
                    label: 'GitHub',
                    icon: (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )
                  }].map((provider) => (
                    <button
                      key={provider.label}
                      type="button"
                      className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white py-3 font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
                    >
                      {provider.icon}
                      {provider.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
