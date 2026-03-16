import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TopicPage from "./pages/TopicPage";
import { useProgress } from "./hooks/useProgress";

function Layout({ children, visited, sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        visited={visited}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-72">
        <TopBar
          visited={visited}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { visited, markVisited } = useProgress();

  return (
    <BrowserRouter basename="/">
      <div className="noise-overlay" />
      <Layout
        visited={visited}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      >
        <Routes>
          <Route path="/" element={<HomePage visited={visited} />} />
          <Route
            path="/:topicId"
            element={<TopicPage markVisited={markVisited} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
