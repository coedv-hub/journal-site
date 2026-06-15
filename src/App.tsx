import Contact from "./pages/Contact";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Instructions from "./pages/Instructions";
import PlaceholderPage from "./pages/PlaceholderPage";
import Archives from "./pages/Archives";
import Current from "./pages/Current";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/current"} component={Current} />
      <Route path={"/about"} component={About} />
      <Route path={"/archives"} component={Archives} />
      <Route
        path={"/editorial"}
        component={() => (
          <PlaceholderPage
            title="Editorial Team"
            titleZh="编辑团队"
            description="Meet the editorial team behind Digital Intelligence Frontiers."
            descriptionZh="认识《数字智能前沿》的编辑团队。"
            currentPage="/editorial"
          />
        )}
      />
      <Route path={"/instructions"} component={Instructions} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
