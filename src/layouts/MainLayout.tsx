import { navigation } from "../app/navigation";
export default function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside
        style={{
          width: 260,
          background: "#161b22",
          padding: 20,
          borderRight: "1px solid #30363d",
        }}
      >
        <h2>Mission Control</h2>

        <nav style={{ marginTop: 30 }}>
          {navigation.map((item) => (
            <p key={item}>🏠 {item}</p>
          ))}
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: 40,
        }}
      >
        <h1>Welcome, Neo.</h1>
      </main>
    </div>
  );
}