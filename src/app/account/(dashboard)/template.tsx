// Remounts on every navigation inside the dashboard, which retriggers the
// .native-screen animation — a game-style screen swap. The class only
// animates under html[data-native] (see globals.css), so the web dashboard
// is untouched.
export default function AccountTemplate({ children }: { children: React.ReactNode }) {
  return <div className="native-screen">{children}</div>;
}
